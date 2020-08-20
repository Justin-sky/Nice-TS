using System;
using System.Collections;
using UnityEngine;



namespace Addressable
{
    public abstract class ResourceAsyncOperation : IEnumerator, IDisposable
    {
        public object Current
        {
            get
            {
                return null;
            }
        }

        public bool isDone
        {
            get
            {
                return IsDone();
            }
        }

        public float progress
        {
            get
            {
                return Progress();
            }
        }

        abstract public void Update();

        public bool MoveNext()
        {
            return !IsDone();
        }

        public void Reset()
        {
        }

        abstract public bool IsDone();

        abstract public float Progress();

        public virtual void Dispose()
        {
        }
    }

    abstract public class BaseAssetBundleAsyncLoader : ResourceAsyncOperation
    {
        public string assetbundleName
        {
            get;
            protected set;
        }

        public AssetBundle assetbundle
        {
            get;
            protected set;
        }

        public override void Dispose()
        {
            assetbundleName = null;
            assetbundle = null;
        }
    }

    abstract public class BaseAssetAsyncLoader : ResourceAsyncOperation
    {
        public UnityEngine.Object asset
        {
            get;
            protected set;
        }

        public override void Dispose()
        {
            asset = null;
        }
    }
}
