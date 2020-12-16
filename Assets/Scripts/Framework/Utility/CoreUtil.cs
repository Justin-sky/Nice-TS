using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.IO.Compression;
using System.Reflection;
using System.Text;
using UnityEngine;

namespace NiceTS
{
	public static class CoreUtil
	{
		public delegate void WaitForSecondsFired(float seconds);

		public const float fCLAMPVAL = 1E-05f;

		private static StringBuilder _exceptionTextBuffer = new StringBuilder(256);

		public static event WaitForSecondsFired WaitForSecondsListener;

		public static float ZEROCLAMP(float val)
		{
			if (!(Mathf.Abs(val) > 1E-05f))
			{
				return 0f;
			}
			return val;
		}

		public static Vector3 ZEROCLAMP(Vector3 val)
		{
			val.x = ZEROCLAMP(val.x);
			val.y = ZEROCLAMP(val.y);
			val.z = ZEROCLAMP(val.z);
			return val;
		}

		public static float ClampAngle(float angle)
		{
			angle = Mathf.Repeat(angle, 360f);
			if (angle > 180f)
			{
				angle -= 360f;
			}
			return angle;
		}

		public static float ClampAngle(float angle, float min, float max)
		{
			angle = Mathf.Repeat(angle, 360f);
			min = Mathf.Repeat(min, 360f);
			max = Mathf.Repeat(max, 360f);
			if (min > max)
			{
				if (angle > min || angle < max)
				{
					return angle;
				}
				if (!(angle > (min + max) / 2f))
				{
					return max;
				}
				return min;
			}
			if (angle > min && angle < max)
			{
				return angle;
			}
			if (!(angle < min))
			{
				return max;
			}
			return min;
		}

		public static bool INRANGE(float val, float lo, float hi)
		{
			if (val >= lo)
			{
				return val <= hi;
			}
			return false;
		}

		public static bool INRANGE(int val, int lo, int hi)
		{
			if (val >= lo)
			{
				return val <= hi;
			}
			return false;
		}

		public static int Clamp(int value, int min, int max)
		{
			if (value >= min)
			{
				if (value <= max)
				{
					return value;
				}
				return max;
			}
			return min;
		}

		public static bool DidChange(Vector2 initial, Vector2 current)
		{
			if (!Mathf.Approximately(initial.x, current.x) || !Mathf.Approximately(initial.y, current.y))
			{
				return true;
			}
			return false;
		}

		public static bool DidChange(Vector3 initial, Vector3 current)
		{
			if (!Mathf.Approximately(initial.x, current.x) || !Mathf.Approximately(initial.y, current.y) || !Mathf.Approximately(initial.z, current.z))
			{
				return true;
			}
			return false;
		}

		public static bool DidChange(Vector4 initial, Vector4 current)
		{
			if (!Mathf.Approximately(initial.x, current.x) || !Mathf.Approximately(initial.y, current.y) || !Mathf.Approximately(initial.z, current.z) || !Mathf.Approximately(initial.w, current.w))
			{
				return true;
			}
			return false;
		}

		public static T RandomElement<T>(this IList<T> coll, RngId rngId)
		{
			int index = RandomManager.Range(0, coll.Count, rngId);
			return coll[index];
		}

		public static T RandomElement<T>(this T[] coll, RngId rngId)
		{
			int num = RandomManager.Range(0, coll.Length, rngId);
			return coll[num];
		}

		public static IEnumerator WaitForSecondsOrBreak(float seconds)
		{
			if (seconds > 0f && !Mathf.Approximately(seconds, 0f))
			{
				WaitForSecondsFired waitForSecondsListener = CoreUtil.WaitForSecondsListener;
				if (waitForSecondsListener != null)
				{
					waitForSecondsListener(seconds);
				}
				yield return new WaitForSeconds(seconds);
			}
			else if (CoroutineController.CurrentExecuting != null)
			{
				yield return new BreakZeroFrame();
			}
		}

		public static string FormatExceptionString(string label, string message, Exception ex)
		{
			_exceptionTextBuffer.Length = 0;
			if (ex.InnerException != null)
			{
				_exceptionTextBuffer.AppendFormat("[{0}] {1}: {5}: {2}\n\nError Callstack:\n{3}\nCoroutineController callstack:\n{4}\n\nTry-Catch Callstack", label, message, ex.InnerException.Message, ex.InnerException.StackTrace, CoroutineController.CurrentExecuting, ex.GetType());
			}
			else
			{
				_exceptionTextBuffer.AppendFormat("[{0}] {1}: {5}: {2}\n\nError Callstack:\n{3}\nCoroutineController callstack:\n{4}\n\nTry-Catch Callstack", label, message, ex.Message, ex.StackTrace, CoroutineController.CurrentExecuting, ex.GetType());
			}
			return _exceptionTextBuffer.ToString();
		}

		public static FieldInfo FindField(Type type, string fieldName)
		{
			while (type != null)
			{
				FieldInfo field = type.GetField(fieldName, BindingFlags.Instance | BindingFlags.Public | BindingFlags.NonPublic);
				if (field != null)
				{
					return field;
				}
				type = type.BaseType;
			}
			return null;
		}

		public static void CopyToClipboard(string s)
		{
			TextEditor textEditor = new TextEditor();
			textEditor.text = s;
			textEditor.SelectAll();
			textEditor.Copy();
		}

		public static string HashToString(byte[] hash)
		{
			return BitConverter.ToString(hash).Replace("-", string.Empty).ToLowerInvariant();
		}

		public static byte[] CompressBytes(byte[] bytesIn)
		{
			MemoryStream memoryStream = new MemoryStream();
			using (GZipStream gZipStream = new GZipStream(memoryStream, CompressionMode.Compress, true))
			{
				gZipStream.Write(bytesIn, 0, bytesIn.Length);
			}
			memoryStream.Position = 0L;
			byte[] array = new byte[memoryStream.Length];
			memoryStream.Read(array, 0, array.Length);
			byte[] array2 = new byte[array.Length + 4];
			Buffer.BlockCopy(array, 0, array2, 4, array.Length);
			Buffer.BlockCopy(BitConverter.GetBytes(bytesIn.Length), 0, array2, 0, 4);
			return array2;
		}

		public static byte[] DecompressBytes(byte[] gZippedBytesIn)
		{
			using (MemoryStream memoryStream = new MemoryStream())
			{
				int num = BitConverter.ToInt32(gZippedBytesIn, 0);
				memoryStream.Write(gZippedBytesIn, 4, gZippedBytesIn.Length - 4);
				byte[] array = new byte[num];
				memoryStream.Position = 0L;
				using (GZipStream gZipStream = new GZipStream(memoryStream, CompressionMode.Decompress))
				{
					gZipStream.Read(array, 0, array.Length);
				}
				return array;
			}
		}
	}
}
