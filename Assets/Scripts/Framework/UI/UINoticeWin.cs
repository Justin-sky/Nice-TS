using FairyGUI;
using FairyGUI.Utils;
using System;
using System.Threading.Tasks;

namespace NiceTS
{
    public class UINoticeWin: GComponent
    {
        public const string URL = "ui://y4b7yuunpyg64q";

        private GTextField gText;
        private GButton bakBtn;
        private GButton retryBtn;
        private GButton okBtn;

        private TaskCompletionSource<bool> tcs = new TaskCompletionSource<bool>();

        private int _lastClickIndex = -1;
        public int LastClickIndex
        {
            get
            {
                return this._lastClickIndex;
            }
            set
            {
                if(value != -1)
                {
                    this.tcs.SetResult(true);
                }
                this._lastClickIndex = value;
            }
        }

        public override void ConstructFromXML(XML xml)
        {
            base.ConstructFromXML(xml);

            gText = this.GetChild("noticeText") as GTextField;
            bakBtn = this.GetChild("backBtn") as GButton;
            retryBtn = this.GetChild("retryBtn") as GButton;
            okBtn = this.GetChild("okBtn") as GButton;

            
        }

        public static UINoticeWin CreateInstance()
        {

            return UIPackage.CreateObjectFromURL(URL) as UINoticeWin;

        }

        public void ShowOneButton(string msg, Action okClick)
        {
            this.x = 500;
            this.y = 200;
            this.LastClickIndex = -1;
            
            gText.text = msg;
            okBtn.onClick.Add(()=> {
                Logger.Log("button click");
                this.LastClickIndex = 3;
                okClick?.Invoke(); 
            });
            GRoot.inst.AddChild(this);
        }

        public void Hide()
        {
            GRoot.inst.RemoveChild(this);
        }

        public async Task WaitForResponse()
        {
            await tcs.Task;
        }
    }
}
