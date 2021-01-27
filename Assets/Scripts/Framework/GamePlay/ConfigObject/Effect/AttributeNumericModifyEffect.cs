using Newtonsoft.Json;
using Sirenix.OdinInspector;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NiceTS.Combat
{
    [Effect("属性数值修饰", 50)]
    [JsonObject(MemberSerialization.OptIn)]
    public class AttributeNumericModifyEffect : Effect
    {
        public override string @class => "AttributeNumericModifyEffect";

        public override string Label => "属性数值修饰";

        [JsonProperty(PropertyName = "numericType")]
        [ToggleGroup("Enabled")]
        public AttributeType NumericType;

        [JsonProperty(PropertyName = "numericValue")]
        [ToggleGroup("Enabled"), LabelText("数值参数")]
        public string NumericValue;
    }
}
