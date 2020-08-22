using System.Collections.Generic;
using UnityEngine;
using UnityEngine.AddressableAssets;
using UnityEngine.ResourceManagement.AsyncOperations;

namespace Addressable
{
    public class LuaAsyncLoader : BaseAssetAsyncLoader
    {
        protected bool isOver = false;
        private Dictionary<string, AsyncOperationHandle<TextAsset>> handles = new Dictionary<string, AsyncOperationHandle<TextAsset>>();
        public Dictionary<string, TextAsset> luaAssets = new Dictionary<string, TextAsset>();


        public static LuaAsyncLoader Get()
        {
            return new LuaAsyncLoader();
        }

        public void Init(string[] luaPaths)
        {
            foreach (string luaPath in luaPaths)
            {
                handles.Add(luaPath, Addressables.LoadAssetAsync<TextAsset>(luaPath));
            }
            luaAssets.Clear();
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
                return luaAssets.Count / (handles.Count + luaAssets.Count);
            }
        }

        public override void Update()
        {
            if (isDone) return;

            if (handles.Count > 0)
            {
                var rmKeys = new List<string>();
                foreach (KeyValuePair<string, AsyncOperationHandle<TextAsset>> kv in handles)
                {
                    if (kv.Value.IsValid() && kv.Value.Status == AsyncOperationStatus.Succeeded)
                    {
                        luaAssets.Add(kv.Key, kv.Value.Result);
                        rmKeys.Add(kv.Key);
                    }
                }
                foreach (var key in rmKeys)
                {
                    handles.Remove(key);
                }
            }
            else
            {
                isOver = true;
            }
        }

        public override void Dispose()
        {
            if (handles.Count > 0)
            {
                Logger.LogError($"正在预加载Lua..不能进行销毁.. 未加载数量 ：{handles.Count} 已加载数量：{luaAssets.Count}");
                return;
            }

            foreach (KeyValuePair<string, TextAsset> kv in luaAssets)
            {
                Addressables.Release(kv.Value);
            }
            luaAssets.Clear();
        }
    }
}
