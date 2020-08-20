using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.AddressableAssets;
using UnityEngine.Networking;

namespace Addressable
{

    public class AddressablesManager : MonoSingleton<AddressablesManager>
    {
        const int MAX_ASSETBUNDLE_CREATE_NUM = 5;



        List<AddressablesAsyncLoader> processingAddressablesAsyncLoader = new List<AddressablesAsyncLoader>();

        // 等待处理的资源请求
        Queue<ResourceWebRequester> webRequesterQueue = new Queue<ResourceWebRequester>();
        // 正在处理的资源请求
        List<ResourceWebRequester> prosessingWebRequester = new List<ResourceWebRequester>();


        public bool IsProsessRunning
        {
            get
            {
                return processingAddressablesAsyncLoader.Count != 0;
            }
        }

        public IEnumerator Initialize()
        {
            yield break;

        }

        #region ============== clear asset and cache
        public IEnumerator Cleanup()
        {
            // 等待所有请求完成
            // 要是不等待Unity很多版本都有各种Bug
            yield return new WaitUntil(() =>
            {
                return !IsProsessRunning;
            });
            ClearAssetsCache();

            yield break;
        }

        public void ClearAssetsCache()
        {
            foreach (UnityEngine.Object asset in assetsCaching)
            {
                Addressables.Release(asset);
            }

            assetsCaching.Clear();
        }

        public void ReleaseAsset(UnityEngine.Object go)
        {
            assetsCaching.Remove(go);
            Addressables.Release(go);
        }
        #endregion

        #region ============== preload lua Async

        //cache asset
        List<UnityEngine.Object> assetsCaching = new List<UnityEngine.Object>();
        Dictionary<string, TextAsset> luaCaching = null;
        LuaAsyncLoader luaAsyncLoader = null;

        public LuaAsyncLoader LoadLuaAsync(string[] luaPaths)
        {
            luaAsyncLoader = LuaAsyncLoader.Get();
            luaAsyncLoader.Init(luaPaths);
            return luaAsyncLoader;
        }

        void OnProcessLuaAsyncLoader()
        {
            if (luaAsyncLoader == null) return;

            luaAsyncLoader.Update();
            if (luaAsyncLoader.isDone)
            {
                luaCaching = luaAsyncLoader.luaAssets;
            }
        }

        public TextAsset GetLuaCache(string luapath)
        {
            if (luaCaching != null)
            {
                TextAsset lua = null;
                luaCaching.TryGetValue(luapath, out lua);
                if (lua != null) return lua;

                Logger.LogError($"can't found  {luapath} in luaCache");
            }
            Logger.LogError("lua cache is null, please preload lua first!");
            return null;
        }
        public void ReleaseLuas()
        {
            if (luaCaching == null)
            {
                Logger.LogError("lua cache is null, can not release!");
                return;
            }
            luaAsyncLoader.Dispose();
            luaAsyncLoader = null;
            luaCaching = null;
        }
        #endregion


        #region Load FB Async

        FBAsyncLoader fbAsyncLoader = null;
        public FBAsyncLoader LoadFBAsync(string fbLabel)
        {
            fbAsyncLoader = FBAsyncLoader.Get();
            fbAsyncLoader.Init(fbLabel);
            return fbAsyncLoader;
        }

        void OnProcessFBAsyncLoader()
        {
            if (fbAsyncLoader == null) return;

            fbAsyncLoader.Update();
        }
        public void ReleaseFB()
        {
            if (fbAsyncLoader != null)
            {
                fbAsyncLoader.Dispose();
                fbAsyncLoader = null;
            }
        }

        #endregion

        #region =============== LoadAssetAsync
        public BaseAssetAsyncLoader LoadAssetAsync(string addressPath, Type assetType)
        {
            var loader = AddressablesAsyncLoader.Get();
            processingAddressablesAsyncLoader.Add(loader);

            loader.Init(addressPath, assetType);

            return loader;
        }

        void OnProcessAddressablesAsyncLoader()
        {
            for (int i = processingAddressablesAsyncLoader.Count - 1; i >= 0; i--)
            {
                var loader = processingAddressablesAsyncLoader[i];
                loader.Update();
                if (loader.isDone)
                {
                    if (loader.asset != null)
                        assetsCaching.Add(loader.asset);

                    processingAddressablesAsyncLoader.RemoveAt(i);
                }
            }
        }
        #endregion


        #region ============== using webrequest
        // 从服务器下载网页内容，需提供完整url，非AB（不计引用计数、不缓存），Creater使用后记得回收
        public ResourceWebRequester DownloadWebResourceAsync(string url)
        {
            var creater = ResourceWebRequester.Get();
            creater.Init(url, url, new DownloadHandlerBuffer(), true);
            webRequesterQueue.Enqueue(creater);
            return creater;
        }

        void OnProsessingWebRequester()
        {
            for (int i = prosessingWebRequester.Count - 1; i >= 0; i--)
            {
                var creater = prosessingWebRequester[i];
                creater.Update();
                if (creater.IsDone())
                {
                    prosessingWebRequester.RemoveAt(i);
                }
            }
            int slotCount = prosessingWebRequester.Count;
            while (slotCount < MAX_ASSETBUNDLE_CREATE_NUM && webRequesterQueue.Count > 0)
            {
                var creater = webRequesterQueue.Dequeue();
                creater.Start();
                prosessingWebRequester.Add(creater);
                slotCount++;
            }
        }

        #endregion

        void Update()
        {
            OnProcessAddressablesAsyncLoader();
            OnProsessingWebRequester();
            OnProcessLuaAsyncLoader();
            OnProcessFBAsyncLoader();
        }



    }
}
