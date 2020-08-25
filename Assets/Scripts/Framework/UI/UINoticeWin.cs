using FairyGUI;
using FairyGUI.Utils;
using System;
using System.Collections;
using UnityEngine;

namespace NiceTS
{
    public class UINoticeWin: GComponent
    {
        public const string URL = "ui://l64dumk9pyg64q";

        private GTextField gText;
        private GButton bakBtn;
        private GButton retryBtn;
        private GButton okBtn;

        private int lastClickIndex = -1;

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
            this.lastClickIndex = -1;

            gText.text = msg;
            okBtn.onClick.Add(()=> {
                Logger.Log("button click");
                this.lastClickIndex = 3;
                okClick?.Invoke(); 
            });
            GRoot.inst.AddChild(this);
        }

        public void Hide()
        {
            GRoot.inst.RemoveChild(this);
        }

        public IEnumerator WaitForResponse()
        {
            yield return new WaitUntil(()=> {
               
                return lastClickIndex != -1;
            });
            yield break;
        }

    }
}
