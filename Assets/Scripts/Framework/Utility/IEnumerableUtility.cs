using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NiceTS
{
	public static class IEnumerableUtility
	{
		public static string Print<T>(this IEnumerable<T> list, string divider = ", ")
		{
			if (list == null)
			{
				return "";
			}
			return string.Join(divider, list.Select((T x) => x.ToString()).ToArray());
		}

		public static string Print(this string[] list, string divider = ", ")
		{
			return string.Join(divider, list);
		}

		public static T RandomElement<T>(this IEnumerable<T> list, RngId rngId)
		{
			return list.ElementAt(RandomManager.Range(0, list.Count(), rngId));
		}

		public static bool IsNullOrEmpty<T>(this IEnumerable<T> list)
		{
			if (list != null)
			{
				return list.Count() == 0;
			}
			return true;
		}

		public static bool HasIndex<T>(this IEnumerable<T> list, int index)
		{
			if (list != null && index >= 0)
			{
				return index < list.Count();
			}
			return false;
		}

		public static T GetValueOrDefault<T>(this List<T> list, int index)
		{
			if (!list.HasIndex(index))
			{
				return default(T);
			}
			return list[index];
		}

		public static bool AddIfNotNull<T>(this List<T> list, T item)
		{
			if (item != null)
			{
				list.Add(item);
				return true;
			}
			return false;
		}

		public static List<T> GetEnumValues<T>()
		{
			return Enum.GetValues(typeof(T)).Cast<T>().ToList();
		}

		public static U GetValueOrDefault<T, U>(this IDictionary<T, U> dict, T key, U defaultValue = default(U))
		{
			U value;
			if (dict.TryGetValue(key, out value))
			{
				return value;
			}
			return defaultValue;
		}

		public static void Add<KeyType, ItemType>(this IDictionary<KeyType, List<ItemType>> dictionary, KeyType key, ItemType item)
		{
			if (!dictionary.ContainsKey(key) || dictionary[key] == null)
			{
				dictionary[key] = new List<ItemType>();
			}
			dictionary[key].Add(item);
		}

		public static bool Remove<KeyType, ItemType>(this IDictionary<KeyType, List<ItemType>> dictionary, ItemType item)
		{
			foreach (List<ItemType> value in dictionary.Values)
			{
				if (value.Contains(item))
				{
					return value.Remove(item);
				}
			}
			return false;
		}
	}
}
