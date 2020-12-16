using System;
using System.Collections;
using System.Linq;

namespace NiceTS
{
	public class CoroutineSignal<T> where T : class
	{
		public delegate IEnumerator SignalCallback(T signalParams);

		private int numListeners;

		private int numOnceListeners;

		private event SignalCallback Listener;

		private event SignalCallback OnceListener;

		public CoroutineSignal<T> Clone()
		{
			CoroutineSignal<T> coroutineSignal = new CoroutineSignal<T>();
			coroutineSignal.Listener += this.Listener;
			coroutineSignal.OnceListener += this.OnceListener;
			coroutineSignal.numListeners = numListeners;
			coroutineSignal.numOnceListeners = numOnceListeners;
			return coroutineSignal;
		}

		public void AddListener(SignalCallback callback)
		{
			this.Listener = AddUnique(this.Listener, callback);
			numListeners++;
		}

		public void AddOnce(SignalCallback callback)
		{
			this.OnceListener = AddUnique(this.OnceListener, callback);
			numOnceListeners++;
		}

		public void RemovelListener(SignalCallback callback)
		{
			if (this.Listener != null)
			{
				Listener -= callback;
				numListeners--;
			}
		}

		public IEnumerator Invoke(T signalParams)
		{
			SignalCallback listener = this.Listener;
			yield return (listener != null) ? listener(signalParams) : null;
			SignalCallback onceListener = this.OnceListener;
			yield return (onceListener != null) ? onceListener(signalParams) : null;
			ClearOnceListeners();
		}

		public void ClearOnceListeners()
		{
			this.OnceListener = null;
			numOnceListeners = 0;
		}

		public void RemoveAllListeners()
		{
			this.Listener = null;
			this.OnceListener = null;
			numListeners = (numOnceListeners = 0);
		}

		private SignalCallback AddUnique(SignalCallback listeners, SignalCallback callback)
		{
			if (listeners == null || !listeners.GetInvocationList().Contains(callback))
			{
				listeners = (SignalCallback)Delegate.Combine(listeners, callback);
			}
			return listeners;
		}
	}
}
