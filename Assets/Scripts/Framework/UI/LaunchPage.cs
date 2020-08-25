using FairyGUI;
using FairyGUI.Utils;
using NiceTS;
using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine.AddressableAssets;
using UnityEngine.AddressableAssets.ResourceLocators;
using UnityEngine.ResourceManagement.AsyncOperations;

public class LaunchPage : GComponent
{
    public const string URL = "ui://l64dumk9pyg64t";

    private GTextField gTextField;
    private GProgressBar gProgress;


    public override void ConstructFromXML(XML xml)
    {
        base.ConstructFromXML(xml);

        gTextField = this.GetChild("updateTxt") as GTextField;
        gProgress = this.GetChild("updateProgress") as GProgressBar;
        gProgress.visible = false;
    }


    public static LaunchPage CreateInstance()
    { 
        return UIPackage.CreateObjectFromURL(URL) as LaunchPage;
    }

    public void Show()
    {
        GRoot.inst.AddChild(this);
    }

    public void Hide(bool disposed = false)
    {
        GRoot.inst.RemoveChild(this, disposed);
    }


    public IEnumerator CheckUpdate()
    {
        var start = DateTime.Now;

        gTextField.text = "正在检查资源更新...";

        var initHandle = Addressables.InitializeAsync();
        yield return initHandle;

        var a = Addressables.RuntimePath;
        var checkHandle = Addressables.CheckForCatalogUpdates(false);
        yield return checkHandle;
        Logger.Log(string.Format("CheckIfNeededUpdate use {0}ms", (DateTime.Now - start).Milliseconds));
        Logger.Log($"catalog count: {checkHandle.Result.Count} === check status: {checkHandle.Status}");
        if (checkHandle.Status == AsyncOperationStatus.Succeeded)
        {
            List<string> catalogs = checkHandle.Result;
            if (catalogs != null && catalogs.Count > 0)
            {
                gTextField.text = "正在更新资源...";
                gProgress.visible = true;
                gProgress.value = 0;

                start = DateTime.Now;
                AsyncOperationHandle<List<IResourceLocator>> updateHandle = Addressables.UpdateCatalogs(catalogs, false);
                yield return updateHandle;

                var locators = updateHandle.Result;
                Logger.Log($"locator count: {locators.Count}");

                foreach (var v in locators)
                {
                    List<object> keys = new List<object>();
                    keys.AddRange(v.Keys);

                    var sizeHandle = Addressables.GetDownloadSizeAsync(keys);
                    yield return sizeHandle;

                    long size = sizeHandle.Result;
                    Logger.Log($"download size:{size}");

                    if (size > 0)
                    {
                        UINoticeWin notice = UINoticeWin.CreateInstance();
                        notice.ShowOneButton($"本次更新大小：{size}",()=> {
                            notice.Hide();
                        });
                        yield return notice.WaitForResponse();

                        var downloadHandle = Addressables.DownloadDependenciesAsync(keys, Addressables.MergeMode.Union);
                        while (!downloadHandle.IsDone)
                        {
                            float percentage = downloadHandle.PercentComplete;
                            Logger.Log($"download pregress: {percentage}");
                            gProgress.value = percentage * 100;

                            yield return null;
                        }
                        Addressables.Release(downloadHandle);
                    }
                }

                Logger.Log(string.Format("UpdateFinish use {0}ms", (DateTime.Now - start).Milliseconds));
                yield return UpdateFinish();

                Addressables.Release(updateHandle);
            }

            Addressables.Release(checkHandle);
        }

        yield return StartGame();

    }

    IEnumerator StartGame()
    {
        gTextField.text = "正在进入游戏...";

        JsManager.Instance.StartGame();

        
        yield break;
    }

    IEnumerator UpdateFinish()
    {
        gProgress.value = 100;

        gTextField.text = "正在准备资源...";


        JsManager.Instance.Restart();

        yield break;
    }

 
}