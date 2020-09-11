using FairyGUI;
using NiceTS;
using System.Threading.Tasks;


public class GameLaunch : MonoSingleton<GameLaunch>
{

    const string fairy_package = "game_fui.bytes";
    public LaunchPage launchPage;

    async Task Start()
    {
        LoggerHelper.Instance.Startup();
        JsManager.Instance.Startup();
      
        //初始化FairyGUI
        GRoot.inst.SetContentScaleFactor(1280, 720, UIContentScaler.ScreenMatchMode.MatchWidthOrHeight);
        UIPackage.unloadBundleByFGUI = false;

        
        UIObjectFactory.SetPackageItemExtension(LaunchPage.URL, typeof(LaunchPage));
        UIObjectFactory.SetPackageItemExtension(UINoticeWin.URL, typeof(UINoticeWin));

        //加载FairyGUI Package
        ResourceManager.init();
        await ResourceManager.LoadFairyGUIPackage(fairy_package, "game");


        //加载更新界面
        launchPage = LaunchPage.CreateInstance();
        launchPage.Show();
        
        //Test
        UINoticeWin notice = UINoticeWin.CreateInstance();
        notice.ShowOneButton("test test", () => {
            notice.Hide();
        });
        await notice.WaitForResponse();


        // 开始更新
        if (launchPage != null)
        {
            await launchPage.CheckUpdate();
        }
 
    }

    public void JsLuanchFinish()
    {
        if (this.launchPage != null)
        {
            this.launchPage.Dispose();
        }
    }
}
