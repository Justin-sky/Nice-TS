using Puerts;
using System.IO;
using System.Text;
using UnityEngine;

public class JsLoader : ILoader
{
    private string root = "";

    public JsLoader() { }

    public JsLoader(string root)
    {
        this.root = root;
    }

    public bool FileExists(string filepath)
    {

        return true;
    }

    public string ReadFile(string filepath, out string debugpath)
    {
        StringBuilder scriptPath = new StringBuilder();
        scriptPath.Append(filepath).Append(".txt");

#if UNITY_EDITOR
        var scriptDir = Path.Combine(Application.dataPath, "AssetsPackage/Js");
        var jsPath = Path.Combine(scriptDir, scriptPath.ToString());
        debugpath = jsPath.Replace("/", "\\");
#endif
        var jscache = JsManager.Instance.jscache;
        string jsName = filepath.Replace("puerts/", "");

        string txt;
        jscache.TryGetValue(jsName, out txt);

        return txt;
    }
}