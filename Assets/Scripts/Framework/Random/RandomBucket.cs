using System.Collections.Generic;

namespace NiceTS
{
    public class RandomBucket<T>
	{
		private List<T> _data;

		private List<T> _currentBucket;

		private RngId _rngId;

		public RandomBucket(List<T> data, RngId rngId)
		{
			_data = new List<T>(data);
			_currentBucket = new List<T>(data);
			_rngId = rngId;
		}

		public T GetNext()
		{
			T val = _currentBucket[RandomManager.Range(0, _currentBucket.Count, _rngId)];
			_currentBucket.Remove(val);
			if (_currentBucket.Count == 0)
			{
				_currentBucket.AddRange(_data);
			}
			return val;
		}
	}
}
