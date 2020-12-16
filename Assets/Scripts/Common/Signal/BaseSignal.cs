using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NiceTS
{
	public abstract class BaseSignal : IBaseSignal
	{
		protected int numListeners;

		protected int numOnceListeners;

		public int Count
		{
			get { return numListeners + numOnceListeners; }
		}

		protected event Action<IBaseSignal, object[]> BaseListener;

		protected event Action<IBaseSignal, object[]> OnceBaseListener;

		private Action<T, U> AddUnique<T, U>(Action<T, U> listeners, Action<T, U> callback)
		{
			if (listeners == null || !listeners.GetInvocationList().Contains(callback))
			{
				listeners = (Action<T, U>)Delegate.Combine(listeners, callback);
				numListeners++;
			}
			return listeners;
		}

		public void AddListener(Action<IBaseSignal, object[]> callback)
		{
			this.BaseListener = AddUnique(this.BaseListener, callback);
			numListeners++;
		}

		public void AddOnce(Action<IBaseSignal, object[]> callback)
		{
			this.OnceBaseListener = AddUnique(this.OnceBaseListener, callback);
			numOnceListeners++;
		}

		public void Dispatch(object[] args)
		{
			try
			{
				this.BaseListener?.Invoke(this, args);
				this.OnceBaseListener?.Invoke(this, args);
			}
			catch (Exception ex)
			{
				Log.Error(LogGroups.Engine, CoreUtil.FormatExceptionString("BaseSignal", "Trapped listener exception", ex));
			}
			this.OnceBaseListener = null;
			numOnceListeners = 0;
		}

		public virtual List<Type> GetTypes()
		{
			return new List<Type>();
		}

		public virtual void RemoveAllListeners()
		{
			this.BaseListener = null;
			this.OnceBaseListener = null;
			numListeners = (numOnceListeners = 0);
		}

		public void RemoveListener(Action<IBaseSignal, object[]> callback)
		{
			if (this.BaseListener != null)
			{
				BaseListener -= callback;
				numListeners--;
			}
		}
	}
}
