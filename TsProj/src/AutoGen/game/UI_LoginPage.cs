/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace game
{
    public partial class UI_LoginPage : GComponent
    {
        public GTextInput m_account;
        public GTextInput m_password;
        public GButton m_loginBtn;
        public const string URL = "ui://l64dumk9pyg64v";

        public static UI_LoginPage CreateInstance()
        {
            return (UI_LoginPage)UIPackage.CreateObject("game", "LoginPage");
        }

        public override void ConstructFromXML(XML xml)
        {
            base.ConstructFromXML(xml);

            m_account = (GTextInput)GetChild("account");
            m_password = (GTextInput)GetChild("password");
            m_loginBtn = (GButton)GetChild("loginBtn");
        }
    }
}