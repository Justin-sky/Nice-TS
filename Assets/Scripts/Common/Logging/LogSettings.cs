using System;
using UnityEngine;

namespace NiceTS
{
	[Serializable]
	[CreateAssetMenu(menuName = "Nice TS/Log Settings")]
	public class LogSettings : ScriptableObject
	{
		[EnumFlag]
		public LogGroups LogGroups;

		public LogLevel LogLevel;

		public bool LogToFile;

		[Tooltip("Directory under Application.persistentDataPath")]
		public string LogFileDir = "debug-logs-editor";
	}
}
