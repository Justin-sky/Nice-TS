using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UnityEngine;
using UnityEngine.AddressableAssets;
using UnityEngine.UI;

namespace Addressable
{
    public class ResourceManager
    {


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


    }
}
