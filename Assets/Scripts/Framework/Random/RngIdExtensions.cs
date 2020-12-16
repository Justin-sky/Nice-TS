
namespace NiceTS
{
	public static class RngIdExtensions
	{
		public static bool IsAdvanceNode(this RngId rngId)
		{
			if (rngId != 0 && rngId != RngId.NonDeterministic)
			{
				return rngId != RngId.SetupRun;
			}
			return false;
		}

		public static bool IsReserved(this RngId rngId)
		{
			return rngId == RngId.Master;
		}

		public static bool IsResetable(this RngId rngId)
		{
			if (rngId != RngId.Rewards && rngId != RngId.Spawning)
			{
				return rngId == RngId.StoryEvents;
			}
			return true;
		}

		public static bool IsDebugLog(this RngId rngId)
		{
			if (rngId != RngId.NonDeterministic && rngId != RngId.Chatter)
			{
				return rngId != RngId.BattleTest;
			}
			return false;
		}

		public static bool IsDeterministic(this RngId rngId)
		{
			if (rngId != RngId.NonDeterministic)
			{
				return rngId != RngId.BattleTest;
			}
			return false;
		}
	}
}
