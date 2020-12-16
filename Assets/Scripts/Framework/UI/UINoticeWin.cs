using FairyGUI;
using FairyGUI.Utils;
using System;
using System.Threading.Tasks;
using UnityEngine;

namespace NiceTS
{
    public class UINoticeWin: MonoBehaviour
    {
        public const string URL = "ui://y4b7yuunpyg64q";

        private static  UINoticeWin _uiNoticeWinInst;

        private GComponent _mainView;
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

        public static UINoticeWin Inst
        {
            get { return _uiNoticeWinInst; }
        }

        void Awake()
        {
            if (_uiNoticeWinInst == null) _uiNoticeWinInst = this;

            _mainView = this.GetComponent<UIPanel>().ui;
            

            if (_mainView != null)
            {
                gText = _mainView.GetChild("noticeText").asTextField;
                bakBtn = _mainView.GetChild("backBtn").asButton;
                retryBtn = _mainView.GetChild("retryBtn").asButton;
                okBtn = _mainView.GetChild("okBtn").asButton;

                _mainView.visible = false;
            }
        }


        public void ShowOneButton(string msg, Action okClick)
        {
            if (_mainView == null) return;

            _mainView.visible = true;
            _mainView.SetXY(350, 200);

            this.LastClickIndex = -1;
            
            gText.text = msg;
            okBtn.onClick.Add(()=> {
                Log.Debug(LogGroups.UI,"button click");
                this.LastClickIndex = 3;
                okClick?.Invoke(); 
            });
  
        }

        public void Hide()
        {
            _mainView.visible = false;
        }

        public async Task WaitForResponse()
        {
            await tcs.Task;
        }
    }
}
