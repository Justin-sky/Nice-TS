using System.Text;

namespace NiceTS
{
    public class MurmurHash2
	{
		private const uint m = 1540483477u;

		private const int r = 24;

		public static uint Hash(string data)
		{
			return Hash(Encoding.UTF8.GetBytes(data));
		}

		public static uint Hash(byte[] data)
		{
			return Hash(data, 3314489978u);
		}

		public static uint Hash(byte[] data, uint seed)
		{
			int num = data.Length;
			if (num == 0)
			{
				return 0u;
			}
			uint num2 = (uint)((int)seed ^ num);
			int num3 = 0;
			while (num >= 4)
			{
				uint num4 = (uint)(data[num3++] | (data[num3++] << 8) | (data[num3++] << 16) | (data[num3++] << 24));
				num4 *= 1540483477;
				num4 ^= num4 >> 24;
				num4 *= 1540483477;
				num2 *= 1540483477;
				num2 ^= num4;
				num -= 4;
			}
			switch (num)
			{
				case 3:
					num2 ^= (ushort)(data[num3++] | (data[num3++] << 8));
					num2 = (uint)((int)num2 ^ (data[num3] << 16));
					num2 *= 1540483477;
					break;
				case 2:
					num2 ^= (ushort)(data[num3++] | (data[num3] << 8));
					num2 *= 1540483477;
					break;
				case 1:
					num2 ^= data[num3];
					num2 *= 1540483477;
					break;
			}
			num2 ^= num2 >> 13;
			num2 *= 1540483477;
			return num2 ^ (num2 >> 15);
		}
	}
}
