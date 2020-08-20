using Puerts;
using System;

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
        jsEnv = new JsEnv(new JsLoader());

        if(jsEnv == null)
        {
            Logger.LogError("InitJsEnv null!!!");
        }
        
    }

    public JsEnv GetJsEnv()
    {
        return jsEnv;
    }

    private void Update()
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

