using Newtonsoft.Json;
using Sirenix.OdinInspector;

namespace NiceTS.Combat
{
    [JsonObject(MemberSerialization.OptIn)]
    [Effect("添加护盾", 60)]
    public class AddShieldEffect : Effect
    {
        public override string @class => "AddShieldEffect";

        public override string Label => "添加护盾";

        [JsonProperty(PropertyName = "shieldType")]
        [ToggleGroup("Enabled")]
        public ShieldType ShieldType;

        [JsonProperty(PropertyName = "shieldValue")]
        [ToggleGroup("Enabled"), LabelText("护盾值")]
        public uint ShieldValue;

        [JsonProperty(PropertyName = "shieldDuration")]
        [ToggleGroup("Enabled"), LabelText("护盾持续时间"), SuffixLabel("毫秒", true)]
        public uint ShieldDuration;
    }
}
