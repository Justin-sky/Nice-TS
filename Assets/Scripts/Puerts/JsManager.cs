using FairyGUI;
using NiceTS;
using Puerts;
using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using UnityEngine.SceneManagement;

public class JsManager:MonoSingleton<JsManager>
{
    JsEnv jsEnv = null;
    public Dictionary<string, string> jscache = new Dictionary<string, string>();

    public Action JsOnApplicationQuit;
    public Action JsOnDispose;

    protected override void Init()
    {
        base.Init();
       
    }

    public JsEnv GetJsEnv()
    {
        return jsEnv;
    }

    private  void Update()
    {
        if (jsEnv != null)
        {
            jsEnv.Tick();
        }
    }

    async Task InitJsEnv()
    {
        //预加载JS ，在JSEnv初始化前调用
        await ResourceManager.PreloadJS(AddressableConfig.JSLable);

        //调试端口：8080
        jsEnv = new JsEnv(new JsLoader(), 8080);
        //jsEnv.ExecuteFile("puerts/flatbuffers.js");
        if (jsEnv == null)
        {
            Log.Error(LogGroups.Engine, "InitJsEnv null!!!");
        }
       
        //声明Action： 值类型才需要这样添加
        jsEnv.UsingAction<float>();
        jsEnv.UsingAction<float, float>();
        jsEnv.UsingAction<string, byte[]>();
        jsEnv.UsingAction<Scene, LoadSceneMode>();
        jsEnv.UsingAction<TChannel, int>();
        jsEnv.UsingAction<int, GObject>();

    }

    public async void StartGame()
    {
        await InitJsEnv();

        if (jsEnv != null)
        {
            try
            {
                jsEnv.Eval(@"require('bundle')");

            }catch(Exception e)
            {
                Log.Error(LogGroups.Engine, e.ToString());
            }
            
        }
    }

    public async void Restart()
    {
        Dispose();

        await InitJsEnv();
        StartGame();
    }

    private void OnApplicationQuit()
    {
        if (jsEnv != null)
        {
            JsOnApplicationQuit?.Invoke();
        }
    }

    public override void Dispose()
    {
        base.Dispose();
        JsOnDispose?.Invoke();

        if (jsEnv != null){
            try
            {
                jsEnv.Dispose();
                jsEnv = null;
            }catch(Exception ex)
            {
                string msg = string.Format("js exception : {0}\n {1}", ex.Message, ex.StackTrace);
                Log.Error(LogGroups.Engine, msg, null);
            }
        }
    }
}

