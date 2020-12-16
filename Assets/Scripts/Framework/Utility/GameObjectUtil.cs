using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using UnityEngine;
using UnityEngine.UI;

namespace NiceTS
{
	public static class GameObjectUtil
	{
		public static IEnumerator Flicker(GameObject obj, int flickerCount = 7, float durationFactor = 0.02f, bool reverse = false)
		{
			return Flicker(new List<GameObject>
		{
			obj
		}, flickerCount, durationFactor, reverse);
		}

		public static IEnumerator Flicker(List<GameObject> objects, int flickerCount = 7, float durationFactor = 0.02f, bool reverse = false)
		{
			bool active = objects[0].activeSelf;
			for (int i = 0; i < flickerCount; i++)
			{
				active = !active;
				objects.ForEach(delegate (GameObject o)
				{
					o.SetActive(active);
				});
				int num = reverse ? (flickerCount - i) : (i + 1);
				yield return CoreUtil.WaitForSecondsOrBreak((float)num * durationFactor);
			}
		}

		public static void AdjustLocalPosition(this Transform transform, float x = 0f, float y = 0f, float z = 0f)
		{
			transform.localPosition = new Vector3(transform.localPosition.x + x, transform.localPosition.y + y, transform.localPosition.z + z);
		}

		public static void AdjustPosition(this Transform transform, float x = 0f, float y = 0f, float z = 0f)
		{
			transform.position = new Vector3(transform.position.x + x, transform.position.y + y, transform.position.z + z);
		}

		public static void SetLocalPosition(this Transform transform, float x = float.NaN, float y = float.NaN, float z = float.NaN)
		{
			Vector3 localPosition = transform.localPosition;
			if (!float.IsNaN(x))
			{
				localPosition.x = x;
			}
			if (!float.IsNaN(y))
			{
				localPosition.y = y;
			}
			if (!float.IsNaN(z))
			{
				localPosition.z = z;
			}
			transform.localPosition = localPosition;
		}

		public static void SetPosition(this Transform transform, float x = float.NaN, float y = float.NaN, float z = float.NaN)
		{
			Vector3 position = transform.position;
			if (!float.IsNaN(x))
			{
				position.x = x;
			}
			if (!float.IsNaN(y))
			{
				position.y = y;
			}
			if (!float.IsNaN(z))
			{
				position.z = z;
			}
			transform.position = position;
		}

		public static void SetAnchoredPosition(this RectTransform transform, float x = float.NaN, float y = float.NaN, float z = float.NaN)
		{
			Vector3 v = transform.anchoredPosition;
			if (!float.IsNaN(x))
			{
				v.x = x;
			}
			if (!float.IsNaN(y))
			{
				v.y = y;
			}
			if (!float.IsNaN(z))
			{
				v.z = z;
			}
			transform.anchoredPosition = v;
		}

		public static void SetScale(this Transform transform, float x = float.NaN, float y = float.NaN, float z = float.NaN)
		{
			Vector3 localScale = transform.localScale;
			if (!float.IsNaN(x))
			{
				localScale.x = x;
			}
			if (!float.IsNaN(y))
			{
				localScale.y = y;
			}
			if (!float.IsNaN(z))
			{
				localScale.z = z;
			}
			transform.localScale = localScale;
		}

		public static void SetPivot(this RectTransform transform, float x = float.NaN, float y = float.NaN)
		{
			Vector2 pivot = transform.pivot;
			if (!float.IsNaN(x))
			{
				pivot.x = x;
			}
			if (!float.IsNaN(y))
			{
				pivot.y = y;
			}
			transform.pivot = pivot;
		}

		public static void SetAnchors(this RectTransform transform, float x = float.NaN, float y = float.NaN)
		{
			Vector3 v = transform.anchorMin;
			Vector3 v2 = transform.anchorMax;
			if (!float.IsNaN(x))
			{
				v.x = x;
				v2.x = x;
			}
			if (!float.IsNaN(y))
			{
				v.y = y;
				v2.y = y;
			}
			transform.anchorMin = v;
			transform.anchorMax = v2;
		}

		public static void SetParentKeepLocalScale(this Transform transform, Transform parent, bool worldPositionStays = true)
		{
			Vector3 localScale = transform.localScale;
			transform.SetParent(parent, worldPositionStays);
			transform.localScale = localScale;
		}

		public static bool NameMatchesPrefab(this GameObject gameObject, GameObject prefab)
		{
			if (!(gameObject.name == prefab.name))
			{
				return gameObject.name == string.Format("{0}(Clone)", prefab.name);
			}
			return true;
		}

		public static bool HasParent(this Transform transform, Transform parentToFind)
		{
			Transform transform2 = transform.OrNull();
			transform = (((object)transform2 != null) ? transform2.parent : null);
			while (transform != null)
			{
				if (transform == parentToFind)
				{
					return true;
				}
				transform = transform.parent;
			}
			return false;
		}

		public static string GetPath(this GameObject go)
		{
			if (go == null)
			{
				return string.Empty;
			}
			StringBuilder stringBuilder = new StringBuilder(50);
			Transform transform = go.transform;
			stringBuilder.Append(transform.name);
			while (transform.parent != null)
			{
				transform = transform.parent;
				stringBuilder.Insert(0, "/");
				stringBuilder.Insert(0, transform.name);
			}
			stringBuilder.Insert(0, "/");
			stringBuilder.Insert(0, go.scene.name);
			return stringBuilder.ToString();
		}

		public static T OrNull<T>(this T obj) where T : UnityEngine.Object
		{
			if (!((UnityEngine.Object)obj == (UnityEngine.Object)null))
			{
				return obj;
			}
			return null;
		}

		public static bool IsDestroyedOrInactive(this Component component)
		{
			if (!(component == null) && !(component.gameObject == null))
			{
				return !component.gameObject.activeInHierarchy;
			}
			return true;
		}

		public static List<ViewType> PopulateViewList<DataType, ViewType>(Component container, List<DataType> dataList) where ViewType : MonoBehaviour, IDataView<DataType>
		{
			return GenericPopulateViewList(container, dataList, delegate (ViewType view, DataType data, int index)
			{
				view.Set(data, index);
			}, delegate (ViewType view)
			{
				view.Clear();
			});
		}

		public static List<ViewType> PopulateViewList<DataType, ViewType, HelperType>(Component container, List<DataType> dataList, HelperType helper) where ViewType : MonoBehaviour, IDataView<DataType, HelperType>
		{
			return GenericPopulateViewList(container, dataList, delegate (ViewType view, DataType data, int index)
			{
				view.Set(data, helper, index);
			}, delegate (ViewType view)
			{
				view.Clear();
			});
		}

		public static List<ViewType> GenericPopulateViewList<DataType, ViewType>(Component container, List<DataType> dataList, Action<ViewType, DataType, int> viewSetter, Action<ViewType> viewClearer) where ViewType : MonoBehaviour
		{
			List<ViewType> list = container.GetComponentsInChildren<ViewType>(true).ToList();
			if (list.Count == 0)
			{
				Log.Error(LogGroups.UI, "Can't PopulateViewList because no items of type " + typeof(ViewType) + " were found under " + container);
				return list;
			}
			int i = 0;
			for (int num = (dataList != null) ? dataList.Count : 0; i < num; i++)
			{
				if (i >= list.Count)
				{
					GameObject gameObject = list[0].gameObject;
					GameObject gameObject2 = UnityEngine.Object.Instantiate(gameObject, gameObject.transform.parent);
					list.Add(gameObject2.GetComponent<ViewType>());
				}
				viewSetter(list[i], dataList[i], i);
			}
			for (; i < list.Count; i++)
			{
				viewClearer(list[i]);
			}
			LayoutGroup layoutGroup = container as LayoutGroup;
			if (layoutGroup != null)
			{
				layoutGroup.enabled = false;
				layoutGroup.enabled = true;
			}
			return list;
		}

		public static void ClearViewList<ViewType>(Component container) where ViewType : MonoBehaviour, IDataViewBase
		{
			ViewType[] componentsInChildren = container.GetComponentsInChildren<ViewType>(true);
			for (int i = 0; i < componentsInChildren.Length; i++)
			{
				componentsInChildren[i].Clear();
			}
		}

		public static void Destroy(UnityEngine.Object obj)
		{
			if (Application.isPlaying)
			{
				UnityEngine.Object.Destroy(obj);
			}
			else
			{
				UnityEngine.Object.DestroyImmediate(obj);
			}
		}
	}
}
