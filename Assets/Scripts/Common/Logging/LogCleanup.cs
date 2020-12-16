using UnityEngine;

namespace NiceTS{
	public class LogCleanup : MonoBehaviour
	{
		private void OnDestroy()
		{
			Log.Shutdown();
		}
	}
}
