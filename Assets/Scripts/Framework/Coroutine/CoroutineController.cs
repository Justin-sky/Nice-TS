using System.Collections;
using UnityEngine;

namespace NiceTS
{
    public sealed class CoroutineController
	{
		private const int MaxCoroutinePoppedCountBeforeYield = 30;

		private EnumeratorStack _enumeratorStack = new EnumeratorStack();

		private MonoBehaviour _monoBehaviour;

		private Coroutine _coroutine;

		public static CoroutineController CurrentExecuting
		{
			get;
			private set;
		}

		public void StartCoroutine(MonoBehaviour monoBehaviour, IEnumerator routine)
		{
			Log.Assert(!IsRunning(), LogGroups.Engine, "");
			if (!IsRunning())
			{
				_enumeratorStack.Reset();
				_enumeratorStack.Push(routine);
				_monoBehaviour = monoBehaviour;
				_coroutine = _monoBehaviour.StartCoroutine(Run());
			}
		}

		public bool IsRunning()
		{
			return _coroutine != null;
		}

		public bool IsExecuting()
		{
			if (IsRunning())
			{
				return this == CurrentExecuting;
			}
			return false;
		}

		public void Stop()
		{
			if (_coroutine != null)
			{
				_monoBehaviour.StopCoroutine(_coroutine);
			}
			_enumeratorStack.Stop();
			_monoBehaviour = null;
			_coroutine = null;
		}

		private IEnumerator Run()
		{
			int numChildCoroutinePopped = 0;
			while (true)
			{
				CurrentExecuting = this;
				object obj = _enumeratorStack.RunOnce();
				CurrentExecuting = null;
				if (_enumeratorStack.Count == 0)
				{
					break;
				}
				if (EnumeratorStack.IsChildCoroutine(obj))
				{
					numChildCoroutinePopped = 0;
				}
				else if (obj != null && obj is BreakZeroFrame)
				{
					numChildCoroutinePopped = 0;
				}
				else if (EnumeratorStack.WasChildCoroutinePopped(obj))
				{
					numChildCoroutinePopped++;
					if (numChildCoroutinePopped >= 30)
					{
						Log.Warning(LogGroups.Engine, "Potentially in an infinite coroutine loop. Force yielding.");
						numChildCoroutinePopped = 0;
						yield return null;
					}
				}
				else
				{
					numChildCoroutinePopped = 0;
					yield return obj;
				}
			}
			Stop();
		}

		public string PrintStack(string delimeter)
		{
			return _enumeratorStack.PrintStack(delimeter);
		}

		public override string ToString()
		{
			return _enumeratorStack.ToString();
		}
	}
}