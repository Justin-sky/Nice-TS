using System;
using System.Globalization;
using System.IO;
using System.Threading;
using UnityEngine;

namespace NiceTS
{
	internal class LogProviderFile : ILogProvider
	{
		private StreamWriter _fileWriter;

		private Thread _mainThread;

		public LogProviderFile(string filePath)
		{
			Directory.CreateDirectory(Path.GetDirectoryName(filePath));
			_fileWriter = new StreamWriter(filePath);
			_fileWriter.AutoFlush = true;
			_mainThread = Thread.CurrentThread;
		}

		public void Verbose(string log)
		{
			try
			{
				_fileWriter.Write(GetLogPrefix("VERBOSE") + log);
				_fileWriter.Write(Environment.NewLine);
			}
			catch
			{
			}
		}

		public void Debug(string log)
		{
			try
			{
				_fileWriter.Write(GetLogPrefix("DEBUG") + log);
				_fileWriter.Write(Environment.NewLine);
			}
			catch
			{
			}
		}

		public void Warning(string log)
		{
			try
			{
				_fileWriter.Write(GetLogPrefix("WARN") + log);
				_fileWriter.Write(Environment.NewLine);
			}
			catch
			{
			}
		}

		public void Error(string log)
		{
			try
			{
				_fileWriter.Write(GetLogPrefix("ERROR") + log);
				_fileWriter.Write(Environment.NewLine);
			}
			catch
			{
			}
		}

		public void CloseLog()
		{
			_fileWriter.Close();
		}

		public ILogProvider GetProvider(Type type)
		{
			if (!type.IsAssignableFrom(GetType()))
			{
				return null;
			}
			return this;
		}

		private string GetLogPrefix(string levelPrefix)
		{
			string text = (_mainThread == Thread.CurrentThread) ? (Time.frameCount % 100).ToString("D2") : "--";
			return DateTime.UtcNow.ToString("s", CultureInfo.InvariantCulture) + " " + text + " " + levelPrefix + " ";
		}
	}
}
