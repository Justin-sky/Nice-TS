using NiceTS;
using Puerts;
using System;
using System.Collections;
using System.Diagnostics;
using UnityEngine;

public class JsManager:MonoSingleton<JsManager>
{
    private bool gameStarted = false;

    JsEnv jsEnv = null;

    public Action JsOnApplicationQuit;
    public Action JsOnDispose;

    public Action<float, float> JsUpdate;
    public Action JsLateUpdate;
    public Action<float> JsFixedUpdate;


#if UNITY_EDITOR
#pragma warning disable 0414
    [SerializeField]
    long updateElapsedMilliseconds = 0;
    [SerializeField]
    long lateUpdateElapsedMilliseconds = 0;
    [SerializeField]
    long fixedUpdateElapsedMilliseconds = 0;
#pragma warning restore 0414
    Stopwatch sw = new Stopwatch();
#endif


    protected override void Init()
    {
        base.Init();

        InitJsEnv();

        gameStarted = false;
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


            if (gameStarted)
            {
#if UNITY_EDITOR
                var start = sw.ElapsedMilliseconds;
#endif
                try
                {
                    JsUpdate?.Invoke(Time.deltaTime, Time.unscaledDeltaTime);
                }
                catch (Exception ex)
                {
                    Logger.LogError("luaUpdate err : " + ex.Message + "\n" + ex.StackTrace);
                }
#if UNITY_EDITOR
                updateElapsedMilliseconds = sw.ElapsedMilliseconds - start;
#endif

            }
        }
        
    }

    private void LateUpdate()
    {
        if (gameStarted)
        {
#if UNITY_EDITOR
            var start = sw.ElapsedMilliseconds;
#endif
            try
            {
                JsLateUpdate?.Invoke();
            }
            catch (Exception ex)
            {
                Logger.LogError("luaLateUpdate err : " + ex.Message + "\n" + ex.StackTrace);
            }
#if UNITY_EDITOR
            lateUpdateElapsedMilliseconds = sw.ElapsedMilliseconds - start;
#endif

        }
    }

    private void FixedUpdate()
    {
        if (gameStarted)
        {
#if UNITY_EDITOR
            var start = sw.ElapsedMilliseconds;
#endif
            try
            {
                JsFixedUpdate?.Invoke(Time.fixedDeltaTime);
            }
            catch (Exception ex)
            {
                Logger.LogError("luaFixedUpdate err : " + ex.Message + "\n" + ex.StackTrace);
            }
#if UNITY_EDITOR
            fixedUpdateElapsedMilliseconds = sw.ElapsedMilliseconds - start;
#endif

        }
    }

    public void StartGame()
    {
        if(jsEnv != null)
        {
            jsEnv.Eval(@"require('GameMain')");

            gameStarted = true;
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

        gameStarted = false;

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

