using Addressable;
using System;
using System.Collections;
using UnityEngine;
using UnityEngine.AddressableAssets;
using UnityEngine.ResourceManagement.AsyncOperations;

#if !UNITY_EDITOR
using Addressable;
#endif

public class GameLaunch : MonoBehaviour
{

    const string launchPrefabPath = "UI/Prefabs/View/UILaunch.prefab";
    const string noticeTipPrefabPath = "UI/Prefabs/Common/UINoticeTip.prefab";
    GameObject launchPrefab;
    GameObject noticeTipPrefab;
    AddressableUpdater updater;

    IEnumerator Start()
    {
        LoggerHelper.Instance.Startup();

        var start = DateTime.Now;


        // 初始化UI界面
        yield return InitLaunchPrefab();
        yield return null;
        yield return InitNoticeTipPrefab();


        // 开始更新
        if (updater != null)
        {
            updater.StartCheckUpdate();
        }
        yield break;
    }


    GameObject InstantiateGameObject(GameObject prefab)
    {
        var start = DateTime.Now;
        GameObject go = GameObject.Instantiate(prefab);
        Logger.Log(string.Format("Instantiate use {0}ms", (DateTime.Now - start).Milliseconds));

        var luanchLayer = GameObject.Find("UIRoot/LuanchLayer");
        go.transform.SetParent(luanchLayer.transform);
        var rectTransform = go.GetComponent<RectTransform>();
        rectTransform.offsetMax = Vector2.zero;
        rectTransform.offsetMin = Vector2.zero;
        rectTransform.localScale = Vector3.one;
        rectTransform.localPosition = Vector3.zero;

        return go;
    }

    IEnumerator InitNoticeTipPrefab()
    {
        var start = DateTime.Now;

        AsyncOperationHandle<GameObject> handle = Addressables.LoadAssetAsync<GameObject>(noticeTipPrefabPath);
        yield return handle;
        if (handle.Status == AsyncOperationStatus.Succeeded)
        {
            Logger.Log(string.Format("Load noticeTipPrefab use {0}ms", (DateTime.Now - start).Milliseconds));

            noticeTipPrefab = handle.Result;
            var go = InstantiateGameObject(noticeTipPrefab);
            UINoticeTip.Instance.UIGameObject = go;
            yield break;
        }
        else
        {
            Logger.LogError("LoadAssetAsync noticeTipPrefab err : " + noticeTipPrefabPath);
            yield break;
        }

    }

    IEnumerator InitLaunchPrefab()
    {
        var start = DateTime.Now;

        AsyncOperationHandle<GameObject> handle = Addressables.LoadAssetAsync<GameObject>(launchPrefabPath);
        yield return handle;
        if (handle.Status == AsyncOperationStatus.Succeeded)
        {
            Logger.Log(string.Format("Load launchPrefab use {0}ms", (DateTime.Now - start).Milliseconds));

            launchPrefab = handle.Result;
            var go = InstantiateGameObject(launchPrefab);
            updater = go.AddComponent<AddressableUpdater>();
            yield break;
        }
        else
        {
            Logger.LogError("LoadAssetAsync launchPrefab err : " + launchPrefabPath);
            yield break;
        }

    }

}
