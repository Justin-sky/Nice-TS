using Addressable;
using FairyGUI;
using NiceTS;
using System;
using System.Collections;
using System.Threading;
using System.Threading.Tasks;
using UnityEngine;
using UnityEngine.AddressableAssets;
using UnityEngine.ResourceManagement.AsyncOperations;
using UnityEngine.XR;

#if !UNITY_EDITOR
using Addressable;
#endif

public class GameLaunch : MonoSingleton<GameLaunch>
{

    const string fairy_package = "game_fui.bytes";
    public LaunchPage launchPage;

    IEnumerator Start()
    {
        LoggerHelper.Instance.Startup();
        JsManager.Instance.Startup();
      
        //初始化FairyGUI
        GRoot.inst.SetContentScaleFactor(1280, 720, UIContentScaler.ScreenMatchMode.MatchWidthOrHeight);
        UIPackage.unloadBundleByFGUI = false;

        NTexture.CustomDestroyMethod = (Texture t) =>
        {
            Addressables.Release(t);
            Logger.Log(".... release addressable: " + t.name);
        };

        UIObjectFactory.SetPackageItemExtension(LaunchPage.URL, typeof(LaunchPage));
        UIObjectFactory.SetPackageItemExtension(UINoticeWin.URL, typeof(UINoticeWin));

        //加载FairyGUI Package
        AsyncOperationHandle<TextAsset> handle = Addressables.LoadAssetAsync<TextAsset>(fairy_package);
        yield return handle;
        TextAsset pkgAsset = handle.Result;
        UIPackage.AddPackage(
            pkgAsset.bytes, 
            "game",
            async (string name, string extension, Type type, PackageItem ite) => {
                Logger.Log($"{name}, {extension}, {type.ToString()}, {ite.ToString()}");

                if (type == typeof(Texture))
                {
                    Texture t = await Addressables.LoadAssetAsync<Texture>(name+extension).Task ;
                    ite.owner.SetItemAsset(ite, t, DestroyMethod.Custom);
 
                }      
            });
        Addressables.Release(handle);

        //加载更新界面
        launchPage = LaunchPage.CreateInstance();
        launchPage.Show();
        
        //Test
        UINoticeWin notice = UINoticeWin.CreateInstance();
        notice.ShowOneButton("test test", () => {
            notice.Hide();
        });
        yield return notice.WaitForResponse();


        // 开始更新
        if (launchPage != null)
        {
            StartCoroutine(launchPage.CheckUpdate());
        }
        yield break;
    }

    public void JsLuanchFinish()
    {
        if (this.launchPage != null)
        {
            this.launchPage.Dispose();
        }
    }
}
