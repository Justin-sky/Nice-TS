using NiceTS;
using Puerts;
using System;
using System.Collections;
using System.Diagnostics;
using UnityEngine;
using UnityEngine.SceneManagement;

public class JsManager:MonoSingleton<JsManager>
{
    JsEnv jsEnv = null;

    public Action JsOnApplicationQuit;
    public Action JsOnDispose;

    protected override void Init()
    {
        base.Init();
        InitJsEnv();
    }

    void InitJsEnv()
    {
        //调试端口：8080
        jsEnv = new JsEnv(new JsLoader(),8080);
        if(jsEnv == null)
        {
            Logger.LogError("InitJsEnv null!!!");
        }

        //声明Action
        jsEnv.UsingAction<float>();
        jsEnv.UsingAction<float, float>();
        jsEnv.UsingAction<string, byte[]>();
        jsEnv.UsingAction<Scene, LoadSceneMode>();
        jsEnv.UsingAction<TChannel, int>();
        jsEnv.UsingAction<byte[]>();
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

    public void StartGame()
    {
        if(jsEnv != null)
        {
            jsEnv.Eval(@"require('GameMain')");
        }
    }

    public void Restart()
    {
        Dispose();
        InitJsEnv();
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
                Logger.LogError(msg, null);
            }
        }
    }
}

