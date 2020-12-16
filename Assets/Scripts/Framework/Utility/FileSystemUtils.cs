using System;
using System.IO;
using System.Security.Cryptography;
using System.Text;
using UnityEngine;

namespace NiceTS
{
	public class FileSystemUtils
	{
		public static void WriteAllTextWithBackup(string outputPath, string fileContents)
		{
			string text = outputPath + ".tmp";
			byte[] bytes = Encoding.UTF8.GetBytes(fileContents);
			using (FileStream fileStream = File.Create(text, 4096, FileOptions.WriteThrough))
			{
				fileStream.Write(bytes, 0, bytes.Length);
			}
			if (File.Exists(outputPath))
			{
				File.Replace(text, outputPath, outputPath + ".backup");
			}
			else
			{
				File.Move(text, outputPath);
			}
		}

		public static byte[] CalculateMD5(string filePath)
		{
			try
			{
				using (FileStream inputStream = File.OpenRead(filePath))
				{
					using (MD5 mD = MD5.Create())
					{
						return mD.ComputeHash(inputStream);
					}
				}
			}
			catch (Exception)
			{
				return new byte[0];
			}
		}

		public static void LogAssemblyCsharpHash()
		{
			Log.Verbose(LogGroups.Engine, CoreUtil.HashToString(CalculateMD5(Path.Combine(Application.dataPath, "Managed", "Assembly-CSharp.dll"))));
		}

		public static void LogFreeSpace(string pathRoot)
		{
			try
			{
				DriveInfo driveInfo = new DriveInfo(Path.GetPathRoot(pathRoot));
				Log.Debug(LogGroups.Engine, string.Format("Free space on {0} drive: {1} bytes", (driveInfo != null) ? driveInfo.Name : null, (driveInfo != null) ? new long?(driveInfo.AvailableFreeSpace) : null));
			}
			catch (Exception)
			{
				Log.Warning(LogGroups.Engine, "Error getting driveInfo for save directory " + pathRoot + ".");
			}
		}
	}
}
