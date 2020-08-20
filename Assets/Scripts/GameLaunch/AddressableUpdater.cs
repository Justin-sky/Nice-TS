using Addressable;
using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.AddressableAssets;
using UnityEngine.AddressableAssets.ResourceLocators;
using UnityEngine.ResourceManagement.AsyncOperations;
using UnityEngine.UI;

public class AddressableUpdater : MonoBehaviour
{
    Text statusText;
    Slider slider;

    float totalTime = 0f;
    bool needUpdateRes = false;

    void Awake()
    {
        statusText = transform.Find("ContentRoot/LoadingDesc").GetComponent<Text>();
        slider = transform.Find("ContentRoot/SliderBar").GetComponent<Slider>();
        slider.gameObject.SetActive(false);
    }

    void Start()
    {
        totalTime = 0f;
        statusText.text = "正在检测资源更新...";
    }


    public void StartCheckUpdate()
    {
        StartCoroutine(checkUpdate());
    }

    IEnumerator checkUpdate()
    {
        var start = DateTime.Now;


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

                needUpdateRes = true;

                statusText.text = "正在更新资源...";
                slider.normalizedValue = 0f;
                slider.gameObject.SetActive(true);


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
                        UINoticeTip.Instance.ShowOneButtonTip("更新提示", $"本次更新大小：{size}", "确定", null);
                        yield return UINoticeTip.Instance.WaitForResponse();


                        var downloadHandle = Addressables.DownloadDependenciesAsync(keys, Addressables.MergeMode.Union);
                        while (!downloadHandle.IsDone)
                        {
                            float percentage = downloadHandle.PercentComplete;
                            Logger.Log($"download pregress: {percentage}");
                            slider.normalizedValue = percentage;

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


        needUpdateRes = false;

  
        yield return StartGame();

    }

    IEnumerator StartGame()
    {
        statusText.text = "正在准备资源...";

        JsManager.Instance.StartGame();

        UINoticeTip.Instance.DestroySelf();
        Destroy(gameObject, 0.5f);
        yield break;
    }

    IEnumerator UpdateFinish()
    {
        slider.normalizedValue = 1f;
        statusText.text = "正在准备资源...";


        // 重启资源管理器
        yield return AddressablesManager.Instance.Cleanup();
        yield return AddressablesManager.Instance.Initialize();
       

        JsManager.Instance.Restart();

        yield break;
    }

    private void Update()
    {
        if (needUpdateRes)
        {
            totalTime += Time.deltaTime;

            var progress = totalTime % 10;
            slider.normalizedValue = progress / 10;
        }

    }
}