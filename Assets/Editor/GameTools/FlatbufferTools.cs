using UnityEngine;
using UnityEditor;
using System.IO;
using NiceTS;

[InitializeOnLoad]
public static class FlatbufferTools
{


    [MenuItem("NICETS/Copy Flatbuffer Data To AssetsPackage", false, 50)]
    public static void CopyLuaFilesToAssetsPackage()
    {

        //准备目标路径
        string destination = Path.Combine(Application.dataPath, AddressableConfig.AssetsFolderName);
        destination = Path.Combine(destination, "Config/fb");

        //准备源目录
        string source = Application.dataPath+ "/../../Nice-ET/Tools/Flatbuffer/output_bin";

        //先删除后copy 否则会失败
        AssetDatabase.Refresh();
        GameUtility.SafeDeleteDir(destination);
        FileUtil.CopyFileOrDirectoryFollowSymlinks(source, destination);


        var fbFiles = GameUtility.GetSpecifyFilesInFolder(destination, new string[] { ".bin"}, false);
        if (fbFiles != null && fbFiles.Length > 0)
        {
            for (int i = 0; i < fbFiles.Length; i++)
            {
                GameUtility.SafeRenameFile(fbFiles[i], fbFiles[i].Replace(".bin", ".bytes") );
            }

        }

        AssetDatabase.Refresh();
        Debug.Log("Copy lua files over");
    }

}