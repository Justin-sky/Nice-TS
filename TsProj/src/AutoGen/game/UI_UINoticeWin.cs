/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace game
{
    public partial class UI_UINoticeWin : GComponent
    {
        public GTextField m_noticeText;
        public GButton m_backBtn;
        public GButton m_retryBtn;
        public GButton m_okBtn;
        public const string URL = "ui://l64dumk9pyg64q";

        public static UI_UINoticeWin CreateInstance()
        {
            return (UI_UINoticeWin)UIPackage.CreateObject("game", "UINoticeWin");
        }

        public override void ConstructFromXML(XML xml)
        {
            base.ConstructFromXML(xml);

            m_noticeText = (GTextField)GetChild("noticeText");
            m_backBtn = (GButton)GetChild("backBtn");
            m_retryBtn = (GButton)GetChild("retryBtn");
            m_okBtn = (GButton)GetChild("okBtn");
        }
    }
}