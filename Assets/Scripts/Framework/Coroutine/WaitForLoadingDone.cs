using UnityEngine;

namespace NiceTS
{
	public class WaitForLoadingDone : CustomYieldInstruction
	{
		public override bool keepWaiting
		{
			get
			{
				//return LoadingScreen.IsWorking();
				return true;
			}
		}
	}

}
