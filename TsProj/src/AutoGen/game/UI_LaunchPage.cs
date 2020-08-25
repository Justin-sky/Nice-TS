/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace game
{
    public partial class UI_LaunchPage : GComponent
    {
        public GTextField m_updateTxt;
        public GProgressBar m_updateProgress;
        public const string URL = "ui://l64dumk9pyg64t";

        public static UI_LaunchPage CreateInstance()
        {
            return (UI_LaunchPage)UIPackage.CreateObject("game", "LaunchPage");
        }

        public override void ConstructFromXML(XML xml)
        {
            base.ConstructFromXML(xml);

            m_updateTxt = (GTextField)GetChild("updateTxt");
            m_updateProgress = (GProgressBar)GetChild("updateProgress");
        }
    }
}