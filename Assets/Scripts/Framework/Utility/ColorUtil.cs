using System;
using UnityEngine;

namespace NiceTS
{
	public static class ColorUtil
	{
		public static Color SetAlpha(this Color color, float alpha)
		{
			color.a = alpha;
			return color;
		}

		public static Color Set(this Color color, float r = float.NaN, float g = float.NaN, float b = float.NaN, float a = float.NaN)
		{
			if (!float.IsNaN(r))
			{
				color.r = r;
			}
			if (!float.IsNaN(g))
			{
				color.g = g;
			}
			if (!float.IsNaN(b))
			{
				color.b = b;
			}
			if (!float.IsNaN(a))
			{
				color.a = a;
			}
			return color;
		}

		public static bool Approximately(this Color colorA, Color colorB)
		{
			if (Mathf.Approximately(colorA.r, colorB.r) && Mathf.Approximately(colorA.g, colorB.g) && Mathf.Approximately(colorA.b, colorB.b))
			{
				return Mathf.Approximately(colorA.a, colorB.a);
			}
			return false;
		}

		public static Color EncodeFloatToRGBA(float value, float rangeMin, float rangeMax)
		{
			value = ((rangeMin < rangeMax) ? ((value - rangeMin) / (rangeMax - rangeMin)) : 0f);
			value = Mathf.Clamp(value, 0f, 0.9999999f);
			Vector4 vector = value * new Vector4(1f, 255f, 65025f, 16581375f);
			vector.x -= (float)Math.Truncate(vector.x);
			vector.y -= (float)Math.Truncate(vector.y);
			vector.z -= (float)Math.Truncate(vector.z);
			vector.w -= (float)Math.Truncate(vector.w);
			vector -= new Vector4(vector.y / 255f, vector.z / 255f, vector.w / 255f, 0f);
			return new Color(vector.x, vector.y, vector.z, vector.w);
		}

		public static float DecodeFloatFromRGBA(Color color, float rangeMin, float rangeMax)
		{
			return Mathf.Clamp(Vector4.Dot(new Vector4(color.r, color.g, color.b, color.a), new Vector4(1f, 0.003921569f, 1.53787E-05f, 6.030863E-08f)), 0f, 1f) * (rangeMax - rangeMin) + rangeMin;
		}
	}
}
