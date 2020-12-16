using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NiceTS
{ 
	public static class RandomManager
	{
	private static RandomState _randomState;

	private static int[] _rngLookup;

	private static SaveManager _saveManager;

	static RandomManager()
	{
		_rngLookup = new int[Enum.GetValues(typeof(RngId)).Length];
		Init(new RandomState(0), null);
	}

	public static bool Init(RandomState randomState, SaveManager saveManager)
	{
		_saveManager = saveManager;
		bool result = false;
		RandomState.State state = randomState.FindState(RngId.Master);
		if (state == null)
		{
			Log.Error(LogGroups.Random, "RandomManager.Init: RansomState has no Master state entry.  Determinism will be broken.");
			randomState.AddState(RngId.Master, 0);
			state = randomState.FindState(RngId.Master);
			result = true;
		}
		foreach (RngId value in Enum.GetValues(typeof(RngId)))
		{
			int num = randomState.FindStateIdx(value);
			if (num < 0)
			{
				num = randomState.AddState(value, GenerateSeed(state.rng));
				result = true;
			}
			Log.Assert(num >= 0, LogGroups.Random, "");
			_rngLookup[(int)value] = num;
		}
		_randomState = randomState;
		return result;
	}

	private static NiceRNG GetRng(RngId rngId)
	{
		RandomState.State state = _randomState.GetState(_rngLookup[(int)rngId]);
		if (state == null)
		{
			return null;
		}
		return state.rng;
	}

	private static int GenerateSeed(NiceRNG rng)
	{
		return rng.Range(0, int.MaxValue);
	}

	public static void AdvanceToNextNode()
	{
		Log.Verbose(LogGroups.Random, "AdvanceToNextNode");
		NiceRNG rng = GetRng(RngId.Master);
		foreach (RngId value in Enum.GetValues(typeof(RngId)))
		{
			if (value.IsAdvanceNode())
			{
				GetRng(value).Init(GenerateSeed(rng));
			}
		}
	}

	public static void ResetRng(RngId rngId, int offset = 0)
	{
		if (rngId.IsDebugLog())
		{
			Log.Verbose(LogGroups.Random, string.Format("ResetRng {0} [{1}]", rngId, offset));
		}
		if (!rngId.IsResetable())
		{
			Log.Error(LogGroups.Random, string.Format("RandomManager.Reset: type {0} is not allowed to be reset", rngId));
		}
		else
		{
			GetRng(rngId).Reset(offset);
		}
	}

	public static int Range(int min, int max, RngId rngId)
	{
		rngId = ConvertRngId(rngId);
		AssertNotCalledInPreviewMode(rngId);
		if (rngId.IsReserved())
		{
			Log.Error(LogGroups.Random, string.Format("RandomManager.Range: type {0} is reserved.  It can't be used for Range.", rngId));
			return min;
		}
		int num = GetRng(rngId).Range(min, max);
		if (rngId.IsDebugLog())
		{
			Log.Verbose(LogGroups.Random, string.Format("RangeInt {0} [{1} {2}] [{3}]", rngId, min, max, num));
		}
		return num;
	}

	public static float Range(float min, float max, RngId rngId)
	{
		rngId = ConvertRngId(rngId);
		AssertNotCalledInPreviewMode(rngId);
		if (rngId.IsReserved())
		{
			Log.Error(LogGroups.Random, string.Format("RandomManager.Range: type {0} is reserved.  It can't be used for Range.", rngId));
			return min;
		}
		float num = GetRng(rngId).Range(min, max);
		if (rngId.IsDebugLog())
		{
			Log.Verbose(LogGroups.Random, string.Format("RangeFloat {0} [{1} {2}] [{3}]", rngId, min, max, num));
		}
		return num;
	}

	//public static int IncrMerchantGoodOffset(MerchantGoodState good)
	//{
	//	int murmurHash = (good.RewardData.GetID() + "merchant").GetMurmurHash();
	//	int seed = GetRng(RngId.Rewards).GetSeed();
	//	int num = good.IncrNumRngOffers(seed);
	//	return murmurHash + num;
	//}

	public static int GetMurmurHash(this string data)
	{
		if (data == null)
		{
			return 0;
		}
		return (int)MurmurHash2.Hash(data);
	}

	private static RngId ConvertRngId(RngId rngId)
	{
		if (_saveManager != null && _saveManager.PreviewMode && rngId == RngId.Battle)
		{
			return RngId.BattleTest;
		}
		return rngId;
	}

	private static void AssertNotCalledInPreviewMode(RngId rngId)
	{
		if (_saveManager != null && _saveManager.PreviewMode && rngId.IsDeterministic())
		{
			Log.Error(LogGroups.Random, string.Format("RandomManager.Range: Called in preview mode ({0})", rngId));
		}
	}
}
}
