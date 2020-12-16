using System;
using UnityEngine;

namespace NiceTS
{
	public class ObjectPoolPrefabs<T> : ObjectPool<T> where T : Component
	{
		private Transform _parentContainer;

		public ObjectPoolPrefabs(T prefab, Transform parent, uint min, uint growsize, uint max = 0u)
			: base(delegate
            {
                if (!(prefab == null) && !(parent == null))
                {
                    T val = UnityEngine.Object.Instantiate(prefab, Vector3.zero, Quaternion.identity, parent);
                    val.gameObject.SetActive(false);
                    return val;
                }
                Log.Error(LogGroups.Engine, string.Format("Null references found in object pool allocation. PREFAB: {0} PARENT: {1}", prefab, parent));
                return null;
            }, min, growsize, max)
		{
			_parentContainer = parent;
		}

		public override void Release(T item)
		{
			if (item != null)
			{
				item.gameObject.SetActive(false);
				if (_parentContainer != null)
				{
					item.transform.SetParent(_parentContainer);
				}
			}
			base.Release(item);
		}

		public override T Retrieve()
		{
			T val = base.Retrieve();
			if (val != null)
			{
				val.gameObject.SetActive(true);
			}
			return val;
		}
	}
}
