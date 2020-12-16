using System;
using UnityEngine;

namespace NiceTS
{
	[Serializable]
	public class NiceRNG
	{
		[SerializeField]
		private int _seed;

		[SerializeField]
		private UnityEngine.Random.State _state;

		public int GetSeed()
		{
			return _seed;
		}

		public UnityEngine.Random.State GetState()
		{
			return _state;
		}

		public NiceRNG(int seed)
		{
			Init(seed);
		}

		public NiceRNG(NiceRNG hadesRngOther)
		{
			Init(hadesRngOther);
		}

		public void Init(int seed)
		{
			SetState(seed);
			_seed = seed;
		}

		public void Init(NiceRNG hadesRngOther)
		{
			_seed = hadesRngOther._seed;
			_state = hadesRngOther._state;
		}

		public void Reset(int offset = 0)
		{
			SetState(_seed + offset);
		}

		private void SetState(int seed)
		{
			UnityEngine.Random.State externalState = ApplyInternalState();
			UnityEngine.Random.InitState(seed);
			RevertState(externalState);
		}

		public int Range(int min, int max)
		{
			UnityEngine.Random.State externalState = ApplyInternalState();
			int result = UnityEngine.Random.Range(min, max);
			RevertState(externalState);
			return result;
		}

		public float Range(float min, float max)
		{
			UnityEngine.Random.State externalState = ApplyInternalState();
			float result = UnityEngine.Random.Range(min, max);
			RevertState(externalState);
			return result;
		}

		private UnityEngine.Random.State ApplyInternalState()
		{
			UnityEngine.Random.State state = UnityEngine.Random.state;
			UnityEngine.Random.state = _state;
			return state;
		}

		private void RevertState(UnityEngine.Random.State externalState)
		{
			_state = UnityEngine.Random.state;
			UnityEngine.Random.state = externalState;
		}
	}
}
