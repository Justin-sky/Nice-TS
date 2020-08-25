/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace game
{
    public partial class UI_SelServerWin : GComponent
    {
        public GButton m_backBtn;
        public GButton m_okBtn;
        public const string URL = "ui://l64dumk9pyg64w";

        public static UI_SelServerWin CreateInstance()
        {
            return (UI_SelServerWin)UIPackage.CreateObject("game", "SelServerWin");
        }

        public override void ConstructFromXML(XML xml)
        {
            base.ConstructFromXML(xml);

            m_backBtn = (GButton)GetChild("backBtn");
            m_okBtn = (GButton)GetChild("okBtn");
        }
    }
}