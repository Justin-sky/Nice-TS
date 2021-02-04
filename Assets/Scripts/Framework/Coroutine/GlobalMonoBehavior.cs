using System;
using UnityEngine;

namespace NiceTS
{
    public class GlobalMonoBehavior:MonoSingleton<GlobalMonoBehavior>
	{


        public delegate void OnUpdate();

        private OnUpdate onUpdate = null;

        private void Update()
        {
            if (this.onUpdate != null)
            {
                try
                {
                    this.onUpdate();

                }
                catch (Exception e)
                {
                    Log.Error(LogGroups.Engine, "Global Update Error" + e.Message);
                }
            }
        }

        public OnUpdate AddUpdate(OnUpdate e)
        {
            this.onUpdate += e;
            return e;
        }

        public void RemoveUpdate(OnUpdate e)
        {
            try
            {
                if (e != null) this.onUpdate -= e;
            }
            catch (Exception ex)
            {
                Log.Error(LogGroups.Engine, "remove error: " + ex.Message);
            }
        }

    }
}
