using System;
using System.Collections.Generic;
using UnityEngine;

namespace NiceTS
{
	public class ObjectPoolWholePrefabs : ObjectPool<GameObject>
	{
		private Transform _parentContainer;

		public ObjectPoolWholePrefabs(GameObject prefab, Transform parent, uint min, uint growsize, bool uiPrefab = false, Action<GameObject> instantiateCallback = null)
			: base(() => InstantiatePrefab(prefab, parent, uiPrefab, instantiateCallback), min, growsize, 0u)
		{
			_parentContainer = parent;
		}

		public ObjectPoolWholePrefabs(GameObject prefab, Transform parent, uint min, uint growsize, uint max, bool uiPrefab = false, Action<GameObject> instantiateCallback = null)
			: base(() => InstantiatePrefab(prefab, parent, uiPrefab, instantiateCallback), min, growsize, max)
		{
			_parentContainer = parent;
		}

		private static GameObject InstantiatePrefab(GameObject prefab, Transform parent, bool uiPrefab, Action<GameObject> instantiateCallback)
		{
			GameObject gameObject = new GameObject(prefab.name + "-Parent");
			gameObject.transform.SetParent(parent, false);
			if (uiPrefab)
			{
				gameObject.AddComponent<RectTransform>();
			}
			UnityEngine.Object.Instantiate(prefab, gameObject.transform);
            instantiateCallback?.Invoke(gameObject);
            gameObject.SetActive(false);
			return gameObject;
		}

		public override void Release(GameObject item)
		{
			if (item != null)
			{
				item.SetActive(false);
				if (_parentContainer != null)
				{
					item.transform.SetParentKeepLocalScale(_parentContainer);
				}
			}
			base.Release(item);
		}

		public override GameObject Retrieve()
		{
			GameObject gameObject = base.Retrieve();
			if (gameObject != null)
			{
				gameObject.SetActive(true);
			}
			return gameObject;
		}

		public override void DestroyAll(Action<GameObject> destroyAction)
		{
			List<GameObject> list = new List<GameObject>(base.toList);
			base.DestroyAll(destroyAction);
			foreach (GameObject item in list)
			{
				GameObjectUtil.Destroy(item);
			}
		}
	}
}
