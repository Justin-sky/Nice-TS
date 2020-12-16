using System;
using UnityEngine;

namespace NiceTS
{
	internal class LogProviderUnityConsole : ILogProvider
	{
		public void Verbose(string log)
		{
			UnityEngine.Debug.Log(log);
		}

		public void Debug(string log)
		{
			UnityEngine.Debug.Log(log);
		}

		public void Warning(string log)
		{
			UnityEngine.Debug.LogWarning(log);
		}

		public void Error(string log)
		{
			UnityEngine.Debug.LogError(log);
		}

		public void CloseLog()
		{
		}

		public ILogProvider GetProvider(Type type)
		{
			if (!type.IsAssignableFrom(GetType()))
			{
				return null;
			}
			return this;
		}
	}
}