using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NiceTS.Combat
{
    [Effect("移除所有状态效果", 50)]
    public class ClearAllStatusEffect : Effect
    {
        public override string Label => "移除所有状态效果";
    }
}
