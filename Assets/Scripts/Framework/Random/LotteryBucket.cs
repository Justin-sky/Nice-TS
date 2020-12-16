using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace NiceTS
{
	/// <summary>
	/// 	//构建随机池
	//		LotteryBucket<string> bucket = new LotteryBucket<string>(RngId.CardDraw);
	//		bucket.AddTickets("a", 10);
	//		bucket.AddTickets("b", 20);
	//		bucket.AddTickets("c", 30);
	//		//随机获取一个对象
	//		var rs = bucket.GetNext();
	/// </summary>
	/// <typeparam name="T"></typeparam>
	public class LotteryBucket<T>
	{
		private List<T> _data;

		private RngId _rngId;

		public LotteryBucket(RngId rngId)
		{
			_data = new List<T>();
			_rngId = rngId;
		}

		public void AddTickets(T value, int count)
		{
			for (int i = 0; i < count; i++)
			{
				_data.Add(value);
			}
		}

		public T GetNext()
		{
			T val = _data[RandomManager.Range(0, _data.Count, _rngId)];
			_data.Remove(val);
			return val;
		}

		public bool IsEmpty()
		{
			return _data.Count == 0;
		}
	}

}