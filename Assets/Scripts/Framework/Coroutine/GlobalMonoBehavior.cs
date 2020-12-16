using UnityEngine;

namespace NiceTS
{
    public static class GlobalMonoBehavior
	{
		public class GlobalMonoBehaviorInst : MonoBehaviour
		{
		}

		private static GameObject _gameObject;

		private static GlobalMonoBehaviorInst _monoBehavior;

		public static MonoBehaviour Inst
		{
			get
			{
				if (_monoBehavior == null)
				{
					_gameObject = new GameObject("GlobalMonoBehaviorInst");
					_monoBehavior = _gameObject.AddComponent<GlobalMonoBehaviorInst>();
					Object.DontDestroyOnLoad(_gameObject);
				}
				return _monoBehavior;
			}
		}
	}
}
