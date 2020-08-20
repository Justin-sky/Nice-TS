using System;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.AddressableAssets;
using UnityEngine.ResourceManagement.AsyncOperations;

namespace Addressable
{
    public class AddressablesAsyncLoader : BaseAssetAsyncLoader
    {
        static Queue<AddressablesAsyncLoader> pool = new Queue<AddressablesAsyncLoader>();
        static int sequence = 0;
        protected bool isOver = false;

        dynamic handle;

        public static AddressablesAsyncLoader Get()
        {
            if (pool.Count > 0)
            {
                return pool.Dequeue();
            }
            else
            {
                return new AddressablesAsyncLoader(++sequence);
            }
        }

        public static void Recycle(AddressablesAsyncLoader creater)
        {
            pool.Enqueue(creater);
        }

        public AddressablesAsyncLoader(int seqence)
        {
            Sequence = seqence;
        }

        public void Init(string addressPath, Type assetType)
        {
            this.asset = null;
            isOver = false;
            AssetType = assetType;
            AddressPath = addressPath;

            if (assetType == typeof(Sprite))
            {
                handle = Addressables.LoadAssetAsync<Sprite>(addressPath);
            }
            else if (AssetType == typeof(TextAsset))
            {
                handle = Addressables.LoadAssetAsync<TextAsset>(addressPath);
            }
            else
            {
                handle = Addressables.LoadAssetAsync<GameObject>(addressPath);
            }

        }

        public int Sequence
        {
            get;
            protected set;
        }
        public Type AssetType
        {
            get;
            protected set;
        }
        public string AddressPath
        {
            get;
            protected set;
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
                return 0.0f;
            }
        }

        public override void Update()
        {
            if (isDone) return;

            if (handle.Status == AsyncOperationStatus.Succeeded)
            {
                this.asset = handle.Result;
                isOver = true;
            }
            if (handle.Status == AsyncOperationStatus.Failed)
            {
                Debug.LogError($"Load asset:{AddressPath} error: {handle.Status}");
                isOver = true;
            }

        }

        public override void Dispose()
        {

            Recycle(this);
        }
    }
}
