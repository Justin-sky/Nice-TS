using Puerts;
using System;
using System.IO;
using System.Net;
using System.Net.Sockets;
using System.Runtime.InteropServices;
using UnityEngine;

namespace NiceTS
{
	public delegate void ErrorCallback(TChannel channel, int code);
	public delegate void ReadCallback(ArrayBuffer arrayBuffer);

	public class TChannel
    {
        private bool isSending;
		private bool isConnected;

		public TService Service { get;  }
		private Socket socket;
	
		private SocketAsyncEventArgs innArgs = new SocketAsyncEventArgs();
		private SocketAsyncEventArgs outArgs = new SocketAsyncEventArgs();

		private readonly CircularBuffer recvBuffer = new CircularBuffer();
		private readonly CircularBuffer sendBuffer = new CircularBuffer();

		public long Id { get; set; }
        public bool IsSending => this.isSending;

		public int Error { get; set; }


		public ErrorCallback errorCallback;

		public ReadCallback readCallback;


		private readonly MemoryStream memoryStream;
		private readonly byte[] packetSizeCache;
		private readonly PacketParser parser;

		public string RemoteAddress { get; protected set; }

		public TChannel(TService service) {
			this.Service = service;
			this.packetSizeCache = new byte[4];
			this.memoryStream = service.MemoryStreamManager.GetStream("message", ushort.MaxValue);
			this.parser = new PacketParser(this.recvBuffer, this.memoryStream);
		
			this.innArgs.Completed += this.OnComplete;
			this.outArgs.Completed += this.OnComplete;

			this.Id = IdGenerater.GenerateId();
		}
		public void Connect(string address)
        {
			
			IPEndPoint ipEndPoint = NetworkHelper.ToIPEndPoint(address);

			this.socket = new Socket(AddressFamily.InterNetwork, SocketType.Stream, ProtocolType.Tcp);
			this.socket.NoDelay = true;
			
			this.RemoteAddress = ipEndPoint.ToString();
			this.isConnected = false;
			this.isSending = false;

			this.outArgs.RemoteEndPoint = ipEndPoint;

			this.socket.ConnectAsync(this.outArgs);

			
		}

		private void OnComplete(object sender, SocketAsyncEventArgs e)
		{
			switch (e.LastOperation)
			{
				case SocketAsyncOperation.Connect:
					OneThreadSynchronizationContext.Instance.Post(this.OnConnectComplete, e);
					break;
				case SocketAsyncOperation.Receive:
					OneThreadSynchronizationContext.Instance.Post(this.OnRecvComplete, e);
					break;
				case SocketAsyncOperation.Send:
					OneThreadSynchronizationContext.Instance.Post(this.OnSendComplete, e);
					break;
				case SocketAsyncOperation.Disconnect:
					OneThreadSynchronizationContext.Instance.Post(this.OnDisconnectComplete, e);
					break;
				default:
					throw new Exception($"socket error: {e.LastOperation}");
			}
		}

		protected void OnError(int e)
		{
			this.Error = e;
            errorCallback(this, e);
		}

		protected void OnRead(MemoryStream memoryStream)
		{
			var arrayBuffer = new ArrayBuffer(memoryStream.ToArray());

			this.readCallback.Invoke(arrayBuffer);
		}

		#region Connect
		private void OnConnectComplete(object o)
		{
			if (this.socket == null)
			{
				return;
			}
			SocketAsyncEventArgs e = (SocketAsyncEventArgs)o;

			if (e.SocketError != SocketError.Success)
			{
				this.OnError((int)e.SocketError);
				return;
			}

			//连接成功
			this.OnError(ErrorCode.ERR_SocketConnSucc);
			e.RemoteEndPoint = null;
			this.isConnected = true;
			this.StartRecv();
			this.Service.MarkNeedStartSend(this.Id);
		}

		private void OnDisconnectComplete(object o)
		{
			SocketAsyncEventArgs e = (SocketAsyncEventArgs)o;
			this.OnError((int)e.SocketError);
		}


		#endregion

		#region Send
		public void Send(ArrayBuffer ab)
		{
			if (this.Id == 0)
			{
				throw new Exception("TChannel已经被Dispose, 不能发送消息");
			}

			MemoryStream stream = this.memoryStream;
			if (ab.Bytes.Length > ushort.MaxValue * 16)
			{
				throw new Exception($"send packet too large: {stream.Length}");
			}
			this.packetSizeCache.WriteTo(0, ab.Bytes.Length);
			
			Array.Reverse(this.packetSizeCache);

			//foreach(var i in this.packetSizeCache)
   //         {
			//	Debug.Log("C#: "+i);
   //         }
			//foreach(var i in ab.Bytes)
   //         {
			//	Debug.Log("C#: " + i);
			//}

			this.sendBuffer.Write(this.packetSizeCache, 0, this.packetSizeCache.Length);
			this.sendBuffer.Write(ab.Bytes, 0, ab.Bytes.Length);

			this.Service.MarkNeedStartSend(this.Id);
		}
		public void StartSend()
		{
			if (!this.isConnected)
			{
				return;
			}

			// 没有数据需要发送
			if (this.sendBuffer.Length == 0)
			{
				this.isSending = false;
				return;
			}

			this.isSending = true;

			int sendSize = this.sendBuffer.ChunkSize - this.sendBuffer.FirstIndex;
			if (sendSize > this.sendBuffer.Length)
			{
				sendSize = (int)this.sendBuffer.Length;
			}

			this.SendAsync(this.sendBuffer.First, this.sendBuffer.FirstIndex, sendSize);
		}

		public void SendAsync(byte[] buffer, int offset, int count)
		{
			try
			{
				this.outArgs.SetBuffer(buffer, offset, count);
			}
			catch (Exception e)
			{
				throw new Exception($"socket set buffer error: {buffer.Length}, {offset}, {count}", e);
			}
			if (this.socket.SendAsync(this.outArgs))
			{
				return;
			}
			OnSendComplete(this.outArgs);
		}

		private void OnSendComplete(object o)
		{
			if (this.socket == null)
			{
				return;
			}
			SocketAsyncEventArgs e = (SocketAsyncEventArgs)o;

			if (e.SocketError != SocketError.Success)
			{
				this.OnError((int)e.SocketError);
				return;
			}

			if (e.BytesTransferred == 0)
			{
				this.OnError(ErrorCode.ERR_PeerDisconnect);
				return;
			}

			this.sendBuffer.FirstIndex += e.BytesTransferred;
			if (this.sendBuffer.FirstIndex == this.sendBuffer.ChunkSize)
			{
				this.sendBuffer.FirstIndex = 0;
				this.sendBuffer.RemoveFirst();
			}

			this.StartSend();
		}

		#endregion

		#region Receive
		public void StartRecv()
		{
			int size = this.recvBuffer.ChunkSize - this.recvBuffer.LastIndex;
			this.RecvAsync(this.recvBuffer.Last, this.recvBuffer.LastIndex, size);
		}

		public void RecvAsync(byte[] buffer, int offset, int count)
		{
			try
			{
				this.innArgs.SetBuffer(buffer, offset, count);
			}
			catch (Exception e)
			{
				throw new Exception($"socket set buffer error: {buffer.Length}, {offset}, {count}", e);
			}

			if (this.socket.ReceiveAsync(this.innArgs))
			{
				return;
			}
			OnRecvComplete(this.innArgs);
		}

		private void OnRecvComplete(object o)
		{
			if (this.socket == null)
			{
				return;
			}
			SocketAsyncEventArgs e = (SocketAsyncEventArgs)o;

			if (e.SocketError != SocketError.Success)
			{
				this.OnError((int)e.SocketError);
				return;
			}

			if (e.BytesTransferred == 0)
			{
				this.OnError(ErrorCode.ERR_PeerDisconnect);
				return;
			}

			this.recvBuffer.LastIndex += e.BytesTransferred;
			if (this.recvBuffer.LastIndex == this.recvBuffer.ChunkSize)
			{
				this.recvBuffer.AddLast();
				this.recvBuffer.LastIndex = 0;
			}

			// 收到消息回调
			while (true)
			{
				try
				{
					if (!this.parser.Parse())
					{
						break;
					}
				}
				catch (Exception ee)
				{
					Log.Error( LogGroups.Engine, $"ip: {this.RemoteAddress} {ee}");
					this.OnError(ErrorCode.ERR_SocketError);
					return;
				}

				try
				{
					this.OnRead(this.parser.GetPacket());
				}
				catch (Exception ee)
				{
					Log.Error(LogGroups.Engine, ee.ToString());
				}
			}

			if (this.socket == null)
			{
				return;
			}

			this.StartRecv();
		}

		#endregion


		public void Dispose()
        {
			this.Id = 0;
			this.memoryStream.Flush();
			this.memoryStream.Dispose();

			if (this.socket.Connected)
            {
				this.socket.Disconnect(false);
			}
        }


    }
}
