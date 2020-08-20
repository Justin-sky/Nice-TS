using fb;
using System;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.AddressableAssets;
using UnityEngine.ResourceManagement.AsyncOperations;

namespace Addressable
{
    public class FBAsyncLoader : ResourceAsyncOperation
    {
        protected bool isOver = false;
        private AsyncOperationHandle<IList<TextAsset>> fbHandler;
        public Action<string, byte[]> OnFBLoadedHandle = null;

        public static FBAsyncLoader Get()
        {
            return new FBAsyncLoader();
        }


        public void Init(string fbLabel)
        {
            fbHandler = Addressables.LoadAssetsAsync<TextAsset>(fbLabel, null);
            isOver = false;
        }

        public override bool IsDone()
        {
            return isOver;
        }

        public override float Progress()
        {
            if (isDone)
            {
                return 1.0f;
            }
            else
            {
                return fbHandler.PercentComplete;
            }
        }

        public override void Update()
        {
            if (isDone) return;

            if (fbHandler.IsDone)
            {
                isOver = true;

                //call back to Lua
                var list = fbHandler.Result;
                if (list != null)
                {
                    FlatBufferManager.Instance.ClearSkillCache();

                    foreach (var txt in list)
                    {
                        FlatBufferManager.Instance.AddSkillCache(txt);

                        OnFBLoadedHandle?.Invoke(txt.name, txt.bytes);
                    }
                }
                else
                {
                    Logger.LogError("加载Flatbuffer失败......");
                }
            }
        }

        public override void Dispose()
        {
            Addressables.Release(fbHandler);
        }
    }
}
