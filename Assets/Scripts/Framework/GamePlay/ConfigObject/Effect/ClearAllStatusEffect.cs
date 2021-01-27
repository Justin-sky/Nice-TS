using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NiceTS.Combat
{
    [JsonObject(MemberSerialization.OptIn)]
    [Effect("移除所有状态效果", 50)]
    public class ClearAllStatusEffect : Effect
    {
        public override string @class => "ClearAllStatusEffect";
        public override string Label => "移除所有状态效果";
    }
}
