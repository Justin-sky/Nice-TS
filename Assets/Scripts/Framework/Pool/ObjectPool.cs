using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NiceTS
{
	public class ObjectPool<T> where T : class
	{
		protected List<T> _pool = new List<T>();

		protected readonly Func<T> _factory;

		protected readonly uint _min;

		protected readonly uint _growSize;

		protected readonly uint _max;

		protected readonly List<int> _availableIndices = new List<int>();

		protected readonly Dictionary<object, int> _instanceToIndex = new Dictionary<object, int>();

		public bool isEmpty
		{
			get
			{
				if (_max != 0)
				{
					return _availableIndices.Count == 0;
				}
				return false;
			}
		}

		public bool hasAvailableInstances
		{
			get
			{
				return _availableIndices.Count > 0;
			}
		}

		public int numInstancesInUse
		{
			get
			{
				return _pool.Count - _availableIndices.Count;
			}
		}

		public int size
		{
			get
			{
				return _pool.Count;
			}
		}

		public List<T> toList
		{
			get
			{
				return _pool;
			}
		}

		public ObjectPool(Func<T> factory, uint min, uint growsize)
			: this(factory, min, growsize, 0u)
		{
		}

		public ObjectPool(Func<T> factory, uint min, uint growsize, uint max)
		{
			if (factory == null)
			{
				throw new ArgumentException("Cannot create an ObjectPool with no factory.");
			}
			if (min == 0)
			{
				throw new ArgumentException("Cannot create an ObjectPool of zero objects.");
			}
			_factory = factory;
			_min = min;
			_growSize = growsize;
			_max = max;
			CreateInstances();
		}

		public virtual T Retrieve()
		{
			if (_availableIndices.Count > 0)
			{
				int index = _availableIndices[_availableIndices.Count - 1];
				_availableIndices.RemoveAt(_availableIndices.Count - 1);
				return _pool[index];
			}
			if (!CreateInstances())
			{
				return null;
			}
			return Retrieve();
		}

		public virtual int Reserve()
		{
			int count = _pool.Count;
			CreateInstances();
			return _pool.Count - count;
		}

		public virtual void Release(T instance)
		{
			int value;
			if (_instanceToIndex.TryGetValue(instance, out value) && !_availableIndices.Contains(value))
			{
				_availableIndices.Add(value);
			}
		}

		public void ReleaseAll()
		{
			_availableIndices.Clear();
			foreach (T item in _pool)
			{
				Release(item);
			}
		}

		public virtual void DestroyAll(Action<T> destroyAction)
		{
			for (int i = 0; i < _pool.Count; i++)
			{
				destroyAction(_pool[i]);
				_pool[i] = null;
			}
			_pool.Clear();
			_availableIndices.Clear();
			_instanceToIndex.Clear();
		}

		public bool Contains(T item)
		{
			return _pool.Contains(item);
		}

		private bool CreateInstances()
		{
			int count = _pool.Count;
			int num = DetermineGrowSize();
			for (int i = 0; i < num; i++)
			{
				T val = _factory();
				_pool.Add(val);
				_instanceToIndex[val] = i + count;
				_availableIndices.Add(i + count);
			}
			return num > 0;
		}

		private int DetermineGrowSize()
		{
			int count = _pool.Count;
			if (count == 0)
			{
				return (int)_min;
			}
			if (_max == 0)
			{
				return (int)_growSize;
			}
			return (int)Math.Min(_max - count, count + _growSize);
		}
	}
}
