using Microsoft.IO;
using System;
using System.Collections.Generic;
using System.Net;
using System.Threading;

namespace NiceTS
{
    public class TService : MonoSingleton<TService>
    {
        private readonly Dictionary<long, TChannel> idChannels = new Dictionary<long, TChannel>();

        public RecyclableMemoryStreamManager MemoryStreamManager = new RecyclableMemoryStreamManager();
        public List<long> needStartSendChannel = new List<long>();

        private void Awake()
        {
            SynchronizationContext.SetSynchronizationContext(OneThreadSynchronizationContext.Instance);
        }

        public TChannel GetChannel()
        {
            TChannel channel = new TChannel(this);
            this.idChannels[channel.Id] = channel;

            return channel;
        }


        public void MarkNeedStartSend(long id)
        {
            this.needStartSendChannel.Add(id);
        }

        public void Remove(long id)
        {
            TChannel channel;
            if (!this.idChannels.TryGetValue(id, out channel))
            {
                return;
            }
            if (channel == null)
            {
                return;
            }
            this.idChannels.Remove(id);
            channel.Dispose();
        }

        public  void Update()
        {
            OneThreadSynchronizationContext.Instance.Update();

            foreach (long id in this.needStartSendChannel)
            {
                TChannel channel;
                if (!this.idChannels.TryGetValue(id, out channel))
                {
                    continue;
                }

                if (channel.IsSending)
                {
                    continue;
                }

                try
                {
                    channel.StartSend();
                }
                catch (Exception e)
                {
                    Log.Error(LogGroups.Engine, e.ToString());
                }
            }

            this.needStartSendChannel.Clear();

        }

    }
}
