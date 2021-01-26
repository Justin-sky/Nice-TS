using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEditor;
using System.IO;
using NiceTS.Combat;
using Newtonsoft.Json;

public static class SkillExport
{

    [MenuItem("NICETS/Export Skill Json")]
    public static void ExportSkill()
    {
        var basePath = "Assets/AssetsPackage/BattleConfig/";

        var dir = new DirectoryInfo(basePath + "SkillConfigs");
        var files = dir.GetFiles("*.asset");
        foreach (var file in files)
        {
            var asset = AssetDatabase.LoadAssetAtPath<SkillConfigObject>(basePath + dir.Name + "/" + file.Name);

            var json = JsonConvert.SerializeObject(asset);

            var jsonOut = new DirectoryInfo(Application.dataPath+"/../ServerData/Config/SkillConfigs");
            if (!jsonOut.Exists)
            {
                Directory.CreateDirectory(jsonOut.FullName);
            }
            
            File.WriteAllText(jsonOut.FullName + "/" + Path.GetFileNameWithoutExtension(file.FullName)+".json", json);
            

        }


        dir = new DirectoryInfo(basePath + "StatusConfigs");
        files = dir.GetFiles("*.asset");
        foreach (var file in files)
        {
            var asset = AssetDatabase.LoadAssetAtPath<StatusConfigObject>(basePath + dir.Name + "/" + file.Name);

            var json = JsonConvert.SerializeObject(asset);

            var jsonOut = new DirectoryInfo(Application.dataPath + "/../ServerData/Config/StatusConfigs");
            if (!jsonOut.Exists)
            {
                Directory.CreateDirectory(jsonOut.FullName);
            }

            File.WriteAllText(jsonOut.FullName + "/" + Path.GetFileNameWithoutExtension(file.FullName) + ".json", json);


        }


    }

}
