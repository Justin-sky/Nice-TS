using System;

namespace NiceTS
{
	internal class LogProviderSignal : ILogProvider
	{
		private Signal<string> _signal;

		public LogProviderSignal()
		{
			_signal = new Signal<string>();
		}

		public void Verbose(string log)
		{
			Signal<string> signal = _signal;
			if (signal != null)
			{
				signal.Dispatch(log);
			}
		}

		public void Debug(string log)
		{
			Signal<string> signal = _signal;
			if (signal != null)
			{
				signal.Dispatch(log);
			}
		}

		public void Warning(string log)
		{
			Signal<string> signal = _signal;
			if (signal != null)
			{
				signal.Dispatch(log);
			}
		}

		public void Error(string log)
		{
			Signal<string> signal = _signal;
			if (signal != null)
			{
				signal.Dispatch(log);
			}
		}

		public void CloseLog()
		{
			Signal<string> signal = _signal;
			if (signal != null)
			{
				signal.RemoveAllListeners();
			}
			_signal = null;
		}

		public ILogProvider GetProvider(Type type)
		{
			if (!type.IsAssignableFrom(GetType()))
			{
				return null;
			}
			return this;
		}

		public void AddListener(Action<string> listener)
		{
			Signal<string> signal = _signal;
			if (signal != null)
			{
				signal.AddListener(listener);
			}
		}

		public void RemoveListener(Action<string> listener)
		{
			Signal<string> signal = _signal;
			if (signal != null)
			{
				signal.RemoveListener(listener);
			}
		}
	}
}