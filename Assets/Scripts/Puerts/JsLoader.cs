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
        scriptPath.Append(filepath);

#if UNITY_EDITOR
        var scriptDir = Path.Combine(Application.dataPath, "../TsProj/output");
        var jsPath = Path.Combine(scriptDir, scriptPath.ToString());

        debugpath = jsPath.Replace("/", "\\");

        return GameUtility.SafeReadAllText(jsPath);

#endif
        //手机上使用Addressables
        debugpath = "";
        return "";
    }
}