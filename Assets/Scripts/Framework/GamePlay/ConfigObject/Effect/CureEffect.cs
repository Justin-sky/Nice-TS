using Newtonsoft.Json;
using Sirenix.OdinInspector;

namespace NiceTS.Combat
{
    [JsonObject(MemberSerialization.OptIn)]
    [Effect("治疗英雄", 20)]
    public class CureEffect : Effect
    {
        public override string @class => "CureEffect";
        public override string Label => "治疗英雄";

        [JsonProperty(PropertyName = "cureValueFormula")]
        [ToggleGroup("Enabled"), LabelText("治疗参数")]
        public string CureValueFormula;
    }
}
