using FairyGUI;
using fb;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UnityEngine;
using UnityEngine.AddressableAssets;
using UnityEngine.ResourceManagement.AsyncOperations;
using UnityEngine.UI;

namespace Addressable
{
    public class ResourceManager
    {
        public static Action<string, byte[]> OnFBLoadedHandle = null;

        public static void init()
        {
            NTexture.CustomDestroyMethod = (Texture t) =>
            {
                Addressables.Release(t);
                Logger.Log(".... release addressable: " + t.name);
            };
        }

        public static void ReleaseFGUIPackage(string packageName)
        {
            UIPackage.RemovePackage(packageName);
        }

        public static async Task LoadFairyGUIPackage(string address, string packageName)
        {

            var pkgAsset = await Addressables.LoadAssetAsync<TextAsset>(address).Task;

            UIPackage.AddPackage(
                pkgAsset.bytes,
                packageName,
                async (string name, string extension, Type type, PackageItem ite) => {
                    Logger.Log($"{name}, {extension}, {type.ToString()}, {ite.ToString()}");

                    if (type == typeof(Texture))
                    {
                        Texture t = await Addressables.LoadAssetAsync<Texture>(name + extension).Task;
                        ite.owner.SetItemAsset(ite, t, DestroyMethod.Custom);

                    }
                });
            Addressables.Release(pkgAsset);
 
        }

        public static async Task<bool> PreadloadFB(string fbLabel)
        {
            var list = await Addressables.LoadAssetsAsync<TextAsset>(fbLabel, null).Task;

            if (list != null)
            {
                FlatBufferManager.Instance.ClearSkillCache();

                foreach(var txt in list)
                {
                    FlatBufferManager.Instance.AddSkillCache(txt);

                    OnFBLoadedHandle?.Invoke(txt.name, txt.bytes);
                }
                return true;
            }
            else
            {
                Logger.LogError("加载Flatbuffer失败......");
                return false;
            }

            
        }


        public static async Task<GameObject> LoadPrefab(string address)
        {
            var res =  await Addressables.LoadAssetAsync<GameObject>(address).Task;
           
            return res;
        }


        public static async Task<TextAsset> LoadTextAsset(string address)
        {
            var res = await Addressables.LoadAssetAsync<TextAsset>(address).Task;

            return res;
        }


        public static async Task<Sprite> LoadSprite(string address)
        {
            var res = await Addressables.LoadAssetAsync<Sprite>(address).Task;
   
            return res;
        }

        public void ReleaseAddressGO(UnityEngine.Object go)
        {
            Addressables.Release(go);
        }

    }
}
