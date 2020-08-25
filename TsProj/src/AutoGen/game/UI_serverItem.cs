/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace game
{
    public partial class UI_serverItem : GComponent
    {
        public GTextField m_serverName;
        public GImage m_serverStatus;
        public const string URL = "ui://l64dumk9pyg64y";

        public static UI_serverItem CreateInstance()
        {
            return (UI_serverItem)UIPackage.CreateObject("game", "serverItem");
        }

        public override void ConstructFromXML(XML xml)
        {
            base.ConstructFromXML(xml);

            m_serverName = (GTextField)GetChild("serverName");
            m_serverStatus = (GImage)GetChild("serverStatus");
        }
    }
}