using System;
using System.Collections.Generic;
using UnityEngine;

namespace NiceTS
{
	[Serializable]
	public class RandomState
	{
		[Serializable]
		public class State
		{
			public string rngIdName;

			public NiceRNG rng;
		}

		[SerializeField]
		private List<State> _rngStates = new List<State>(Enum.GetValues(typeof(RngId)).Length);

		public RandomState()
		{
		}

		public RandomState(int seed)
		{
			AddState(RngId.Master, seed);
		}

		public int AddState(RngId rngId, int seed)
		{
			if (HasState(rngId))
			{
				Log.Error(LogGroups.Random, string.Format("RandomState.AddState: State already exists: {0}", rngId));
				return FindStateIdx(rngId);
			}
			State item = new State
			{
				rngIdName = rngId.ToString(),
				rng = new NiceRNG(seed)
			};
			_rngStates.Add(item);
			return FindStateIdx(rngId);
		}

		public bool HasState(RngId rngId)
		{
			return FindStateIdx(rngId) >= 0;
		}

		public int FindStateIdx(RngId rngId)
		{
			for (int i = 0; i < _rngStates.Count; i++)
			{
				if (_rngStates[i].rngIdName == rngId.ToString())
				{
					return i;
				}
			}
			return -1;
		}

		public State FindState(RngId rngId)
		{
			return GetState(FindStateIdx(rngId));
		}

		public State GetState(int stateIdx)
		{
			if (stateIdx < 0 || stateIdx >= _rngStates.Count)
			{
				return null;
			}
			return _rngStates[stateIdx];
		}

		public bool IsValid()
		{
			return HasState(RngId.Master);
		}
	}
}
