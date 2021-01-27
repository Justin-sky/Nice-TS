using Newtonsoft.Json;
using Sirenix.OdinInspector;

namespace NiceTS.Combat
{
    [JsonObject(MemberSerialization.OptIn)]
    [Effect("自定义效果", 1000)]
    public class CustomEffect : Effect
    {
        public override string @class => "CustomEffect";
        public override string Label => "自定义效果";

        [JsonProperty(PropertyName = "customEffectDescription")]
        [ToggleGroup("Enabled"), LabelText("自定义效果")]
        public string CustomEffectDescription;
    }
}
