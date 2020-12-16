using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Globalization;

internal static class Tuple
{
	public static Tuple<T1, T2> Create<T1, T2>(T1 item1, T2 item2)
	{
		return new Tuple<T1, T2>(item1, item2);
	}

	public static Tuple<T1, T2, T3> Create<T1, T2, T3>(T1 item1, T2 item2, T3 item3)
	{
		return new Tuple<T1, T2, T3>(item1, item2, item3);
	}
}
[DebuggerDisplay("Item1={Item1};Item2={Item2}")]
public class Tuple<T1, T2> : IFormattable
{
	private static readonly IEqualityComparer<T1> Item1Comparer = EqualityComparer<T1>.Default;

	private static readonly IEqualityComparer<T2> Item2Comparer = EqualityComparer<T2>.Default;

	public T1 Item1
	{
		get;
		private set;
	}

	public T2 Item2
	{
		get;
		private set;
	}

	public Tuple(T1 item1, T2 item2)
	{
		Item1 = item1;
		Item2 = item2;
	}

	public override int GetHashCode()
	{
		int num = 0;
		if (Item1 != null)
		{
			num = Item1Comparer.GetHashCode(Item1);
		}
		if (Item2 != null)
		{
			num = ((num << 3) ^ Item2Comparer.GetHashCode(Item2));
		}
		return num;
	}

	public override bool Equals(object obj)
	{
		Tuple<T1, T2> tuple = obj as Tuple<T1, T2>;
		if (tuple == null)
		{
			return false;
		}
		if (Item1Comparer.Equals(Item1, tuple.Item1))
		{
			return Item2Comparer.Equals(Item2, tuple.Item2);
		}
		return false;
	}

	public override string ToString()
	{
		return ToString(null, CultureInfo.CurrentCulture);
	}

	public string ToString(string format, IFormatProvider formatProvider)
	{
		return string.Format(formatProvider, format ?? "{0},{1}", Item1, Item2);
	}
}
[DebuggerDisplay("Item1={Item1};Item2={Item2};Item3={Item3}")]
public class Tuple<T1, T2, T3> : IFormattable
{
	private static readonly IEqualityComparer<T1> Item1Comparer = EqualityComparer<T1>.Default;

	private static readonly IEqualityComparer<T2> Item2Comparer = EqualityComparer<T2>.Default;

	private static readonly IEqualityComparer<T3> Item3Comparer = EqualityComparer<T3>.Default;

	public T1 Item1
	{
		get;
		private set;
	}

	public T2 Item2
	{
		get;
		private set;
	}

	public T3 Item3
	{
		get;
		private set;
	}

	public Tuple(T1 item1, T2 item2, T3 item3)
	{
		Item1 = item1;
		Item2 = item2;
		Item3 = item3;
	}

	public override int GetHashCode()
	{
		int num = 0;
		if (Item1 != null)
		{
			num = Item1Comparer.GetHashCode(Item1);
		}
		if (Item2 != null)
		{
			num = ((num << 3) ^ Item2Comparer.GetHashCode(Item2));
		}
		if (Item3 != null)
		{
			num = ((num << 6) ^ Item3Comparer.GetHashCode(Item3));
		}
		return num;
	}

	public override bool Equals(object obj)
	{
		Tuple<T1, T2, T3> tuple = obj as Tuple<T1, T2, T3>;
		if (tuple == null)
		{
			return false;
		}
		if (Item1Comparer.Equals(Item1, tuple.Item1) && Item2Comparer.Equals(Item2, tuple.Item2))
		{
			return Item3Comparer.Equals(Item3, tuple.Item3);
		}
		return false;
	}

	public override string ToString()
	{
		return ToString(null, CultureInfo.CurrentCulture);
	}

	public string ToString(string format, IFormatProvider formatProvider)
	{
		return string.Format(formatProvider, format ?? "{0},{1},{2}", Item1, Item2, Item3);
	}
}