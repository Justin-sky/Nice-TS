using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NiceTS
{
	public class Signal : BaseSignal, ISignal
	{
		public Delegate listener
		{
			get
			{
				return (Action)delegate
				{
				};
			}
			set
			{
				this.Listener = (Action)value;
			}
		}

		public event Action Listener;

		public event Action OnceListener;

		public Signal Clone()
		{
			Signal signal = new Signal();
			signal.Listener += this.Listener;
			signal.OnceListener += this.OnceListener;
			signal.numListeners = numListeners;
			signal.numOnceListeners = numOnceListeners;
			return signal;
		}

		public void AddListener(Action callback)
		{
			this.Listener = AddUnique(this.Listener, callback);
			numListeners++;
		}

		public void AddOneTimeListener(Action callback)
		{
			this.OnceListener = AddUnique(this.OnceListener, callback);
			numOnceListeners++;
		}

		public void RemoveOneTimeListener(Action callback)
		{
			if (this.OnceListener != null)
			{
				OnceListener -= callback;
				numOnceListeners--;
			}
		}

		public void RemoveListener(Action callback)
		{
			if (this.Listener != null)
			{
				Listener -= callback;
				numListeners--;
			}
		}

		public override List<Type> GetTypes()
		{
			return new List<Type>();
		}

		public void Dispatch()
		{
			try
			{
				Action listener = this.Listener;
				if (listener != null)
				{
					listener();
				}
				Action onceListener = this.OnceListener;
				if (onceListener != null)
				{
					onceListener();
				}
			}
			catch (Exception ex)
			{
				Log.Error(LogGroups.Engine, CoreUtil.FormatExceptionString("Signal", "Trapped listener exception", ex));
	
			}
			this.OnceListener = null;
			numOnceListeners = 0;
			Dispatch(null);
		}

		private Action AddUnique(Action listeners, Action callback)
		{
			if (listeners == null || !listeners.GetInvocationList().Contains(callback))
			{
				listeners = (Action)Delegate.Combine(listeners, callback);
			}
			return listeners;
		}

		public override void RemoveAllListeners()
		{
			this.Listener = null;
			this.OnceListener = null;
			base.RemoveAllListeners();
		}
	}
	public class Signal<T> : BaseSignal, ISignal
	{
		public Delegate listener
		{
			get
			{
				return (Action<T>)delegate
				{
				};
			}
			set
			{
				this.Listener = (Action<T>)value;
			}
		}

		private event Action<T> Listener;

		private event Action<T> OnceListener;

		public Signal<T> Clone()
		{
			Signal<T> signal = new Signal<T>();
			signal.Listener += this.Listener;
			signal.OnceListener += this.OnceListener;
			signal.numListeners = numListeners;
			signal.numOnceListeners = numOnceListeners;
			return signal;
		}

		public void AddListener(Action<T> callback)
		{
			this.Listener = AddUnique(this.Listener, callback);
			numListeners++;
		}

		public void AddOnce(Action<T> callback)
		{
			this.OnceListener = AddUnique(this.OnceListener, callback);
			numOnceListeners++;
		}

		public void RemoveListener(Action<T> callback)
		{
			if (this.Listener != null)
			{
				Listener -= callback;
				numListeners--;
			}
		}

		public override List<Type> GetTypes()
		{
			return new List<Type>
			{
				typeof(T)
			};
		}

		public void Dispatch(T type1)
		{
			try
			{
				Action<T> listener = this.Listener;
				if (listener != null)
				{
					listener(type1);
				}
				Action<T> onceListener = this.OnceListener;
				if (onceListener != null)
				{
					onceListener(type1);
				}
			}
			catch (Exception ex)
			{
				Log.Error(LogGroups.Engine, CoreUtil.FormatExceptionString("Signal", "Trapped listener exception", ex));

			}
			this.OnceListener = null;
			numOnceListeners = 0;
			object[] args = new object[1]
			{
				type1
			};
			Dispatch(args);
		}

		private Action<T> AddUnique(Action<T> listeners, Action<T> callback)
		{
			if (listeners == null || !listeners.GetInvocationList().Contains(callback))
			{
				listeners = (Action<T>)Delegate.Combine(listeners, callback);
			}
			return listeners;
		}

		public override void RemoveAllListeners()
		{
			this.Listener = null;
			this.OnceListener = null;
			base.RemoveAllListeners();
		}
	}
	public class Signal<T, U> : BaseSignal, ISignal
	{
		public Delegate listener
		{
			get
			{
				return (Action<T, U>)delegate
				{
				};
			}
			set
			{
				this.Listener = (Action<T, U>)value;
			}
		}

		private event Action<T, U> Listener;

		private event Action<T, U> OnceListener;

		public Signal<T, U> Clone()
		{
			Signal<T, U> signal = new Signal<T, U>();
			signal.Listener += this.Listener;
			signal.OnceListener += this.OnceListener;
			signal.numListeners = numListeners;
			signal.numOnceListeners = numOnceListeners;
			return signal;
		}

		public void AddListener(Action<T, U> callback)
		{
			this.Listener = AddUnique(this.Listener, callback);
			numListeners++;
		}

		public void AddOnce(Action<T, U> callback)
		{
			this.OnceListener = AddUnique(this.OnceListener, callback);
			numOnceListeners++;
		}

		public void RemoveListener(Action<T, U> callback)
		{
			if (this.Listener != null)
			{
				Listener -= callback;
				numListeners--;
			}
		}

		public override List<Type> GetTypes()
		{
			return new List<Type>
			{
				typeof(T),
				typeof(U)
			};
		}

		public void Dispatch(T type1, U type2)
		{
			try
			{
				Action<T, U> listener = this.Listener;
				if (listener != null)
				{
					listener(type1, type2);
				}
				Action<T, U> onceListener = this.OnceListener;
				if (onceListener != null)
				{
					onceListener(type1, type2);
				}
			}
			catch (Exception ex)
			{
				Log.Error(LogGroups.Engine, CoreUtil.FormatExceptionString("Signal", "Trapped listener exception", ex));
		
			}
			this.OnceListener = null;
			numOnceListeners = 0;
			object[] args = new object[2]
			{
				type1,
				type2
			};
			Dispatch(args);
		}

		private Action<T, U> AddUnique(Action<T, U> listeners, Action<T, U> callback)
		{
			if (listeners == null || !listeners.GetInvocationList().Contains(callback))
			{
				listeners = (Action<T, U>)Delegate.Combine(listeners, callback);
			}
			return listeners;
		}

		public override void RemoveAllListeners()
		{
			this.Listener = null;
			this.OnceListener = null;
			base.RemoveAllListeners();
		}
	}
	public class Signal<T, U, V> : BaseSignal, ISignal
	{
		public Delegate listener
		{
			get
			{
				return (Action<T, U, V>)delegate
				{
				};
			}
			set
			{
				this.Listener = (Action<T, U, V>)value;
			}
		}

		private event Action<T, U, V> Listener;

		private event Action<T, U, V> OnceListener;

		public Signal<T, U, V> Clone()
		{
			Signal<T, U, V> signal = new Signal<T, U, V>();
			signal.Listener += this.Listener;
			signal.OnceListener += this.OnceListener;
			signal.numListeners = numListeners;
			signal.numOnceListeners = numOnceListeners;
			return signal;
		}

		public void AddListener(Action<T, U, V> callback)
		{
			this.Listener = AddUnique(this.Listener, callback);
			numListeners++;
		}

		public void AddOnce(Action<T, U, V> callback)
		{
			this.OnceListener = AddUnique(this.OnceListener, callback);
			numOnceListeners++;
		}

		public void RemoveListener(Action<T, U, V> callback)
		{
			if (this.Listener != null)
			{
				Listener -= callback;
				numListeners--;
			}
		}

		public override List<Type> GetTypes()
		{
			return new List<Type>
			{
				typeof(T),
				typeof(U),
				typeof(V)
			};
		}

		public void Dispatch(T type1, U type2, V type3)
		{
			try
			{
				Action<T, U, V> listener = this.Listener;
				if (listener != null)
				{
					listener(type1, type2, type3);
				}
				Action<T, U, V> onceListener = this.OnceListener;
				if (onceListener != null)
				{
					onceListener(type1, type2, type3);
				}
			}
			catch (Exception ex)
			{
				Log.Error(LogGroups.Engine, CoreUtil.FormatExceptionString("Signal", "Trapped listener exception", ex));
		
			}
			this.OnceListener = null;
			numOnceListeners = 0;
			object[] args = new object[3]
			{
				type1,
				type2,
				type3
			};
			Dispatch(args);
		}

		private Action<T, U, V> AddUnique(Action<T, U, V> listeners, Action<T, U, V> callback)
		{
			if (listeners == null || !listeners.GetInvocationList().Contains(callback))
			{
				listeners = (Action<T, U, V>)Delegate.Combine(listeners, callback);
			}
			return listeners;
		}

		public override void RemoveAllListeners()
		{
			this.Listener = null;
			this.OnceListener = null;
			base.RemoveAllListeners();
		}
	}
	public class Signal<T, U, V, W> : BaseSignal, ISignal
	{
		public Delegate listener
		{
			get
			{
				return (Action<T, U, V, W>)delegate
				{
				};
			}
			set
			{
				this.Listener = (Action<T, U, V, W>)value;
			}
		}

		private event Action<T, U, V, W> Listener;

		private event Action<T, U, V, W> OnceListener;

		public Signal<T, U, V, W> Clone()
		{
			Signal<T, U, V, W> signal = new Signal<T, U, V, W>();
			signal.Listener += this.Listener;
			signal.OnceListener += this.OnceListener;
			signal.numListeners = numListeners;
			signal.numOnceListeners = numOnceListeners;
			return signal;
		}

		public void AddListener(Action<T, U, V, W> callback)
		{
			this.Listener = AddUnique(this.Listener, callback);
			numListeners++;
		}

		public void AddOnce(Action<T, U, V, W> callback)
		{
			this.OnceListener = AddUnique(this.OnceListener, callback);
			numOnceListeners++;
		}

		public void RemoveListener(Action<T, U, V, W> callback)
		{
			if (this.Listener != null)
			{
				Listener -= callback;
				numListeners--;
			}
		}

		public override List<Type> GetTypes()
		{
			return new List<Type>
			{
				typeof(T),
				typeof(U),
				typeof(V),
				typeof(W)
			};
		}

		public void Dispatch(T type1, U type2, V type3, W type4)
		{
			try
			{
				Action<T, U, V, W> listener = this.Listener;
				if (listener != null)
				{
					listener(type1, type2, type3, type4);
				}
				Action<T, U, V, W> onceListener = this.OnceListener;
				if (onceListener != null)
				{
					onceListener(type1, type2, type3, type4);
				}
			}
			catch (Exception ex)
			{
				Log.Error(LogGroups.Engine, CoreUtil.FormatExceptionString("Signal", "Trapped listener exception", ex));
	
			}
			this.OnceListener = null;
			numOnceListeners = 0;
			object[] args = new object[4]
			{
				type1,
				type2,
				type3,
				type4
			};
			Dispatch(args);
		}

		private Action<T, U, V, W> AddUnique(Action<T, U, V, W> listeners, Action<T, U, V, W> callback)
		{
			if (listeners == null || !listeners.GetInvocationList().Contains(callback))
			{
				listeners = (Action<T, U, V, W>)Delegate.Combine(listeners, callback);
			}
			return listeners;
		}

		public override void RemoveAllListeners()
		{
			this.Listener = null;
			this.OnceListener = null;
			base.RemoveAllListeners();
		}
	}
}
