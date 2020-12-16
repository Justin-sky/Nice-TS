using System.Runtime.InteropServices;

namespace NiceTS
{
	[StructLayout(LayoutKind.Sequential, Pack = 1)]
	public struct IdStruct
	{
		public uint Time; // 30bit
		public ushort Value; // 16bit

		public long ToLong()
		{
			ulong result = 0;
			result |= (ulong)this.Value << 18;
			result |= (ulong)this.Time << 34;
			return (long)result;
		}

		public IdStruct(uint time, ushort value)
		{
			this.Time = time;
			this.Value = value;
		}

		public IdStruct(long id)
		{
			ulong result = (ulong)id;
			this.Value = (ushort)(result & (ushort.MaxValue));
			result >>= 16;
			this.Time = (uint)result;
		}

		public override string ToString()
		{
			return $" time: {this.Time}, value: {this.Value}";
		}
	}

	public class IdGenerater
    {
		public static long lastTime;
		private static uint value;

		public static long GenerateId()
		{
			long time = TimeHelper.ClientNowSeconds();
			if (time != lastTime)
			{
				value = 0;
				lastTime = time;
			}

			if (++value > ushort.MaxValue - 1)
			{
				Log.Error(LogGroups.Engine, $"id is not enough! value: {value}");
			}

			if (time > int.MaxValue)
			{
				Log.Error(LogGroups.Engine, $"time > int.MaxValue value: {time}");
			}

			IdStruct idStruct = new IdStruct((uint)time, (ushort)value);
			return idStruct.ToLong();
		}
	}
}
