using System;
using System.Collections;
using System.Threading.Tasks;
using UnityEngine;

namespace NiceTS
{
	public sealed class DelayForFrames
	{
		private int _numFrames;

		private Action _callbackUpdate;

		private Action _callbackDone;

		private Coroutine _coroutine;

		public DelayForFrames(int numFrames, Action callbackDone, Action callbackUpdate = null)
		{
			_numFrames = numFrames;
			_callbackUpdate = callbackUpdate;
			_callbackDone = callbackDone;
		}

		public static DelayForFrames Start(int numFrames, Action callbackDone, Action callbackUpdate = null)
		{
			return new DelayForFrames(numFrames, callbackDone, callbackUpdate).Start();
		}

		public DelayForFrames Start()
		{
			Stop();
			_coroutine = GlobalMonoBehavior.Instance.StartCoroutine(Run(_numFrames, _callbackDone, _callbackUpdate));
			return this;
		}

		public void Stop()
		{
			if (_coroutine != null)
			{
				GlobalMonoBehavior.Instance.StopCoroutine(_coroutine);
				_coroutine = null;
			}
		}

		public static IEnumerator Run(int numFrames, Action callbackDone, Action callbackUpdate = null)
		{
			int firstFrame = Time.frameCount;
			while (Time.frameCount - firstFrame < numFrames)
			{
				if (callbackUpdate != null)
				{
					callbackUpdate();
				}
				yield return null;
			}
			if (callbackDone != null)
			{
				callbackDone();
			}
		}

		public static Task Await(int numFrames)
		{
			TaskCompletionSource<object> tcs = new TaskCompletionSource<object>();
			Start(numFrames, delegate
			{
				tcs.TrySetResult(null);
			});
			return tcs.Task;
		}
	}
}
