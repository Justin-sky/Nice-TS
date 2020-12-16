using System.Collections;
using UnityEngine;

namespace NiceTS
{
	public static class CoroutineControllerExtensions
	{
		public static CoroutineController StartCoroutineController(this MonoBehaviour monoBehaviour, IEnumerator routine)
		{
			CoroutineController coroutineController = new CoroutineController();
			coroutineController.StartCoroutine(monoBehaviour, routine);
			return coroutineController;
		}
	}
}
