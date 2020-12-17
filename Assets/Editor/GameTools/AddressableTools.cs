using NiceTS;
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
         "static_fairygui",
         "static_story"
        };

        var start = DateTime.Now;
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

