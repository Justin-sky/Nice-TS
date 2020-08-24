using FairyGUI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NiceTS
{
    public class FUIInitComponent
    {
        public const string DefaultFont = "FZXuanZhenZhuanBianS-R-GB";
        public static string ModelPackageName = "FUI/Model";
        private UIPackage modelPackage;

        public void Awake()
        {
            UIConfig.defaultFont = DefaultFont;
            modelPackage = UIPackage.AddPackage(ModelPackageName);
           // ModelBinder.BindAll();
        }

        public  void Dispose()
        {
 

            if (modelPackage != null)
            {
                var p = UIPackage.GetByName(modelPackage.name);

                if (p != null)
                {
                    UIPackage.RemovePackage(modelPackage.name);
                }

                modelPackage = null;
            }
        }

    }
}
