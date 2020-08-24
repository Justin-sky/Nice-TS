using FairyGUI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NiceTS
{
    public class FUIPackageComponent
    {

        private readonly Dictionary<string, UIPackage> packages = new Dictionary<string, UIPackage>();

        private string FUI_PACKAGE_DIR = "";

        public void AddPackage(string type)
        {

            UIPackage uiPackage = UIPackage.AddPackage($"{FUI_PACKAGE_DIR}/{type}");

            packages.Add(type, uiPackage);
        }

        public async Task AddPackageAsync(string type)
        {

            await Task.CompletedTask;

            UIPackage uiPackage = UIPackage.AddPackage($"{FUI_PACKAGE_DIR}/{type}");

            packages.Add(type, uiPackage);
        }

        public void RemovePackage(string type)
        {
            UIPackage package;

            if (packages.TryGetValue(type, out package))
            {
                var p = UIPackage.GetByName(package.name);

                if (p != null)
                {
                    UIPackage.RemovePackage(package.name);
                }

                packages.Remove(package.name);
            }


        }

    }
}
