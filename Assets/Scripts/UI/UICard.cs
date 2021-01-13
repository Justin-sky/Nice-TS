using FairyGUI;
using FairyGUI.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UnityEngine;


namespace NiceTS
{
    public class UICard:GComponent
    {

        public const string URL = "ui://w69vialgw6jk6";

        private GTextField g_costtxt;

        public override void ConstructFromXML(XML xml)
        {
            base.ConstructFromXML(xml);

            g_costtxt = this.GetChild("cost_txt").asTextField;

            
        }

        public static UICard CreateInstance()
        {
            return UIPackage.CreateObjectFromURL(URL) as UICard;
        }



    }
}
