using System.Collections.Generic;

namespace NiceTS
{
    public static class ListExtensions
	{
		public static void Shuffle<T>(this IList<T> list, RngId rngId)
		{
			int num = list.Count;
			while (num > 1)
			{
				num--;
				int index = RandomManager.Range(0, num + 1, rngId);
				T value = list[index];
				list[index] = list[num];
				list[num] = value;
			}
		}
	}
}
