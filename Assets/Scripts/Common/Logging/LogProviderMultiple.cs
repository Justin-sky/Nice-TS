using System;
using System.Collections.Generic;

namespace NiceTS
{
	internal class LogProviderMultiple : ILogProvider
	{
		private List<ILogProvider> _loggers;

		public LogProviderMultiple(params ILogProvider[] loggers)
		{
			_loggers = new List<ILogProvider>(loggers);
		}

		public void Verbose(string log)
		{
			_loggers.ForEach(delegate (ILogProvider logger)
			{
				logger.Verbose(log);
			});
		}

		public void Debug(string log)
		{
			_loggers.ForEach(delegate (ILogProvider logger)
			{
				logger.Debug(log);
			});
		}

		public void Warning(string log)
		{
			_loggers.ForEach(delegate (ILogProvider logger)
			{
				logger.Warning(log);
			});
		}

		public void Error(string log)
		{
			_loggers.ForEach(delegate (ILogProvider logger)
			{
				logger.Error(log);
			});
		}

		public void CloseLog()
		{
			_loggers.ForEach(delegate (ILogProvider logger)
			{
				logger.CloseLog();
			});
			_loggers.Clear();
		}

		public ILogProvider GetProvider(Type type)
		{
			if (type.IsAssignableFrom(GetType()))
			{
				return this;
			}
			foreach (ILogProvider logger in _loggers)
			{
				ILogProvider provider = logger.GetProvider(type);
				if (provider != null)
				{
					return provider;
				}
			}
			return null;
		}

		public ILogProvider GetProviderInMultiple(Type type)
		{
			ILogProvider provider = GetProvider(type);
			if (provider == null || !_loggers.Contains(provider))
			{
				return null;
			}
			return provider;
		}

		public bool HasProviderInMultiple(Type type)
		{
			return GetProviderInMultiple(type) != null;
		}

		public void RemoveProviderFromMultiple(Type type)
		{
			_loggers.Remove(GetProviderInMultiple(type));
		}

		public void AddProviderToMultiple(ILogProvider loggerNew)
		{
			RemoveProviderFromMultiple(loggerNew.GetType());
			_loggers.Add(loggerNew);
		}
	}
}