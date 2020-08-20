using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Networking;

namespace Addressable
{
    public class MyCertificateHandler : CertificateHandler
    {
        protected override bool ValidateCertificate(byte[] certificateData)
        {
            return true;
        }
    }

    public class ResourceWebRequester : ResourceAsyncOperation
    {
        static Queue<ResourceWebRequester> pool = new Queue<ResourceWebRequester>();
        static int sequence = 0;
        protected UnityWebRequest www = null;
        protected bool isOver = false;
        protected DownloadHandler downloadHandler = null;
        protected MyCertificateHandler cerHandler = null;
        public static ResourceWebRequester Get()
        {
            if (pool.Count > 0)
            {
                return pool.Dequeue();
            }
            else
            {
                return new ResourceWebRequester(++sequence);
            }
        }

        public static void Recycle(ResourceWebRequester creater)
        {
            pool.Enqueue(creater);
        }

        public ResourceWebRequester(int sequence)
        {
            Sequence = sequence;
        }

        public void Init(string name, string url, DownloadHandler downloadHandler, bool noCache = false)
        {
            assetbundleName = name;
            this.url = url;
            this.noCache = noCache;
            this.downloadHandler = downloadHandler;
            this.cerHandler = new MyCertificateHandler();
            www = null;
            isOver = false;
        }

        public int Sequence
        {
            get;
            protected set;
        }

        public bool noCache
        {
            get;
            protected set;
        }

        public string assetbundleName
        {
            get;
            protected set;
        }

        public string url
        {
            get;
            protected set;
        }

        public AssetBundle assetbundle
        {
            get
            {
                DownloadHandlerAssetBundle downloadHandler = (DownloadHandlerAssetBundle)www.downloadHandler;
                return downloadHandler.assetBundle; ;
            }
        }

        public byte[] bytes
        {
            get
            {
                return www.downloadHandler.data;
            }
        }

        public string text
        {
            get
            {
                return www.downloadHandler.text;
            }
        }

        public string error
        {
            get
            {
                // 注意：不能直接判空
                // 详见：https://docs.unity3d.com/530/Documentation/ScriptReference/WWW-error.html
                if (www == null) return " error";
                return string.IsNullOrEmpty(www.error) ? null : www.error;
            }
        }

        public override bool IsDone()
        {
            return isOver;
        }

        public void Start()
        {
            www = new UnityWebRequest(url);
            if (www == null)
            {
                Logger.LogError("New www failed!!!");
                isOver = true;
            }
            else
            {
                www.useHttpContinue = true;
                www.timeout = 300;
                www.certificateHandler = this.cerHandler;
                if (this.downloadHandler != null)
                {
                    www.downloadHandler = downloadHandler;
                    www.SendWebRequest();
                }
            }
        }

        public override float Progress()
        {
            if (isDone)
            {
                return 1.0f;
            }
            return www != null ? www.downloadProgress : 0f;
        }

        public override void Update()
        {
            if (isDone)
            {
                return;
            }
            //error check
            if (www != null && !string.IsNullOrEmpty(www.error))
            {
                Logger.LogError(www.url + ":" + www.error);
                isOver = true;
                return;
            }

            //download check
            isOver = www != null && (www.downloadHandler.isDone);

            if (!isOver)
            {
                return;
            }


        }

        public override void Dispose()
        {
            if (www != null)
            {
                www.Dispose();
                www = null;
            }
            Recycle(this);
        }
    }
}

