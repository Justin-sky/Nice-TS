using Addressable;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using UnityEditor;
using UnityEditor.AddressableAssets.Settings;
using UnityEngine;

[InitializeOnLoad]
public class AddressableTools
{


    [MenuItem("NICETS/Initialize Addressable Enviroment", false, 52)]
    public static void RunCheckAssetBundle()
    {

        var initGroups = new string[] {
         "static_effect",
         "static_js",
         "static_models",
         "static_shaders",
         "static_fb",
         "static_jsmap",
         "static_fairygui"
        };


        var start = DateTime.Now;
       

        //更新assetmap
        List<AddressableAssetEntry> assets = new List<AddressableAssetEntry>();
        AASUtility.GetSettings().GetAllAssets(assets, false,
            (g) => { return g.name.Equals("static_js"); });

        string[] address = assets.Select(e => e.address).ToArray();

        string assetFolder = Path.Combine(Application.dataPath, AddressableConfig.AssetsFolderName);
        
        var assetPathMap = Path.Combine(assetFolder, AddressableConfig.AssetsPathMapFileName);

        GameUtility.SafeWriteAllLines(assetPathMap, address);
        AssetDatabase.Refresh();

        //初始化Groups
        foreach(var g in initGroups)
        {
            AASUtility.CreateGroup(g);
        }
        Debug.Log("Finished Update Asset Path Map... " + (DateTime.Now - start).TotalSeconds + "s");
        
    }

    public static void SingleFileAddress(string group, string path)
    {
        string relativePath = path.Substring(path.IndexOf("Assets\\") );
       
        AASUtility.AddAssetToGroup(AssetDatabase.AssetPathToGUID(relativePath), group);
    }
}

