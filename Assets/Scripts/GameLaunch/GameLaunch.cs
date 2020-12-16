using FairyGUI;
using NiceTS;
using System.Threading.Tasks;
using UnityEngine;

public class GameLaunch : MonoSingleton<GameLaunch>
{

    public GameObject launchPageGO;

    async Task Start()
    {
        JsManager.Instance.Startup();

        //初始化FairyGUI
        GRoot.inst.SetContentScaleFactor(1280, 720, UIContentScaler.ScreenMatchMode.MatchWidthOrHeight);
        UIPackage.unloadBundleByFGUI = false;

        //加载FairyGUI Package
        ResourceManager.init();

        //Test
        UINoticeWin notice = UINoticeWin.Inst;
        notice.ShowOneButton("test test", () =>
        {
            notice.Hide();
        });
        await notice.WaitForResponse();

        // 开始更新
        var launchPage = launchPageGO.GetComponent<LaunchPage>();
        if (launchPage != null)
        {
            await launchPage.CheckUpdate();
        }

    }

    public void JsLuanchFinish()
    {
     
    }
}
