using System;
using System.Diagnostics;
using System.IO;
using System.Text;
using UnityEngine;

namespace NiceTS
{
	public static class Log
	{
		private static ILogProvider _logger;

		private static LogGroups _enabledLogGroups;

		private static LogLevel _logLevel;

		private static readonly string _logRootDirectory;

		private static StringBuilder _logMessageBuilder;

		public static string LogPath
		{
			get;
			private set;
		}

		public static LogLevel LogLevel
		{
			get
			{
				return _logLevel;
			}
			set
			{
				_logLevel = value;
			}
		}

		static Log()
		{
			_logger = new LogProviderUnityConsole();
			_enabledLogGroups = (LogGroups)0;
			_logLevel = LogLevel.All;
			_logRootDirectory = Application.persistentDataPath;
			_logMessageBuilder = new StringBuilder(1024);
			try
			{
				if (Application.isEditor)
				{
					if (!LoadLogSettingsFromLogSettingsAsset("PersonalLogSettings") && !LoadLogSettingsFromLogSettingsAsset("DefaultLogSettings"))
					{
						EnableAllLogGroups();
					}
					LogPath = Environment.ExpandEnvironmentVariables("%APPDATA%\\..\\Local\\Unity\\Editor\\Editor.log");
				}
				else
				{
					SetLogSettingsFromCommandLine();
					LogPath = Path.Combine(_logRootDirectory, "logfile.log");
					SetLogProvider(new LogProviderFile(LogPath));
				}
			}
			catch (Exception)
			{
				Error(LogGroups.Engine, "Unable to parse log configuration.");
			}
		}

		[Conditional("NICETS_LOGGING_ENABLED")]
		public static void SetLogProvider(ILogProvider logProvider)
		{
			if (logProvider != null)
			{
				_logger.CloseLog();
				_logger = logProvider;
			}
		}

		[Conditional("NICETS_LOGGING_ENABLED")]
		public static void EnableLogGroup(LogGroups group)
		{
			_enabledLogGroups |= group;
		}

		[Conditional("NICETS_LOGGING_ENABLED")]
		public static void DisableLogGroup(LogGroups group)
		{
			_enabledLogGroups &= ~group;
		}

		[Conditional("NICETS_LOGGING_ENABLED")]
		public static void EnableAllLogGroups()
		{
			_enabledLogGroups = (LogGroups)(-1);
		}

		[Conditional("NICETS_LOGGING_ENABLED")]
		public static void Verbose(LogGroups group, string message)
		{
			if (_logLevel == LogLevel.All && IsGroupEnabled(group))
			{
				_logger.Verbose(FormatMessage(group, message));
			}
		}

		[Conditional("NICETS_LOGGING_ENABLED")]
		public static void Verbose(LogGroups group, object format, params object[] paramList)
		{
			if (_logLevel == LogLevel.All && IsGroupEnabled(group))
			{
				try
				{
					_logger.Verbose(FormatMessage(group, format, paramList));
				}
				catch (ArgumentNullException message)
				{
					UnityEngine.Debug.LogError(message);
				}
				catch (FormatException message2)
				{
					UnityEngine.Debug.LogError(message2);
				}
			}
		}

		[Conditional("NICETS_LOGGING_ENABLED")]
		public static void Debug(LogGroups group, string message)
		{
			if ((_logLevel == LogLevel.DebugWarningsAndErrors || _logLevel == LogLevel.All) && IsGroupEnabled(group))
			{
				_logger.Debug(FormatMessage(group, message));
			}
		}

		[Conditional("NICETS_LOGGING_ENABLED")]
		public static void Debug(LogGroups group, object format, params object[] paramList)
		{
			if ((_logLevel == LogLevel.DebugWarningsAndErrors || _logLevel == LogLevel.All) && IsGroupEnabled(group))
			{
				try
				{
					_logger.Debug(FormatMessage(group, format, paramList));
				}
				catch (ArgumentNullException message)
				{
					UnityEngine.Debug.LogError(message);
				}
				catch (FormatException message2)
				{
					UnityEngine.Debug.LogError(message2);
				}
			}
		}

		[Conditional("NICETS_LOGGING_ENABLED")]
		public static void Warning(LogGroups group, string message)
		{
			if (_logLevel != LogLevel.ErrorsOnly && IsGroupEnabled(group))
			{
				_logger.Warning(FormatMessage(group, message));
			}
		}

		[Conditional("NICETS_LOGGING_ENABLED")]
		public static void Warning(LogGroups group, object format, params object[] paramList)
		{
			if (_logLevel != LogLevel.ErrorsOnly && IsGroupEnabled(group))
			{
				try
				{
					_logger.Warning(FormatMessage(group, format, paramList));
				}
				catch (ArgumentNullException message)
				{
					UnityEngine.Debug.LogError(message);
				}
				catch (FormatException message2)
				{
					UnityEngine.Debug.LogError(message2);
				}
			}
		}

		[Conditional("NICETS_LOGGING_ENABLED")]
		public static void Error(LogGroups group, string message)
		{
			if (IsGroupEnabled(group))
			{
				_logger.Error(FormatMessage(group, message));
			}
		}

		[Conditional("NICETS_LOGGING_ENABLED")]
		public static void Error(LogGroups group, object format, params object[] paramList)
		{
			if (IsGroupEnabled(group))
			{
				try
				{
					_logger.Error(FormatMessage(group, format, paramList));
				}
				catch (ArgumentNullException message)
				{
					UnityEngine.Debug.LogError(message);
				}
				catch (FormatException message2)
				{
					UnityEngine.Debug.LogError(message2);
				}
			}
		}

		[Conditional("NICETS_LOGGING_ENABLED")]
		public static void Assert(bool exprTrue, LogGroups group, object format, params object[] paramList)
		{
			if (!exprTrue)
			{
				Error(group, format, paramList);
			}
		}

		[Conditional("NICETS_LOGGING_ENABLED")]
		[Conditional("NICETS_STAGING")]
		public static void AssertDev(bool exprTrue, LogGroups group, object format, params object[] paramList)
		{
			Assert(exprTrue, group, format, paramList);
		}

		[Conditional("NICETS_LOGGING_ENABLED")]
		public static void Shutdown()
		{
			if (_logger != null)
			{
				_logger.CloseLog();
			}
		}

		private static bool IsGroupEnabled(LogGroups group)
		{
			return (_enabledLogGroups & group) == group;
		}

		private static bool LoadLogSettingsFromLogSettingsAsset(string resourceNameNoExtension)
		{
			LogSettings logSettings = Resources.Load<LogSettings>(resourceNameNoExtension);
			bool result = LoadLogSettingsFromLogSettingsAsset(logSettings);
			if (logSettings != null)
			{
				Resources.UnloadAsset(logSettings);
			}
			return result;
		}

		public static bool LoadLogSettingsFromLogSettingsAsset(LogSettings logSettings)
		{
			if (logSettings == null)
			{
				return false;
			}
			_enabledLogGroups = logSettings.LogGroups;
			_logLevel = logSettings.LogLevel;
			if (logSettings.LogToFile)
			{
				bool num = _logger.GetProvider(typeof(LogProviderFile)) != null;
				string a = (LogPath != null) ? Path.GetDirectoryName(LogPath) : null;
				string text = Path.Combine(_logRootDirectory, logSettings.LogFileDir);
				if (!num || a != text)
				{
					LogPath = Path.Combine(text, DateTime.Now.ToString("yyyy-MM-dd-HH-mm-ss") + ".log");
					
				}
			}
			else if (_logger.GetProvider(typeof(LogProviderFile)) != null)
			{
				LogPath = null;
	
			}
			return true;
		}

		private static void SetLogSettingsFromCommandLine()
		{
			EnableAllLogGroups();
			_logLevel = LogLevel.All;
			string[] commandLineArgs = Environment.GetCommandLineArgs();
			int num = Array.IndexOf(commandLineArgs, "-loglevel");
			string text = (num >= 0 && num + 1 < commandLineArgs.Length) ? commandLineArgs[num + 1] : string.Empty;
			LogLevel result;
			if (string.Equals(text, "None", StringComparison.OrdinalIgnoreCase))
			{
				_enabledLogGroups = (LogGroups)0;
			}
			else if (Enum.TryParse(text, true, out result))
			{
				_logLevel = result;
			}
		}

		private static string FormatMessage(LogGroups group, object format, params object[] paramList)
		{
			_logMessageBuilder.Clear();
			_logMessageBuilder.Append("[");
			_logMessageBuilder.Append(group.ToString());
			_logMessageBuilder.Append("] ");
			string format2;
			if (paramList != null && paramList.Length != 0 && (format2 = (format as string)) != null)
			{
				_logMessageBuilder.Append(string.Format(format2, paramList));
			}
			else
			{
				_logMessageBuilder.Append(format);
			}
			return _logMessageBuilder.ToString();
		}
	}
}
