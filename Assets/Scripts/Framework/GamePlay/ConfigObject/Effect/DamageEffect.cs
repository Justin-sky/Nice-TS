using Newtonsoft.Json;
using Sirenix.OdinInspector;

namespace NiceTS.Combat
{
    [JsonObject(MemberSerialization.OptIn)]
    [Effect("造成伤害", 10)]
    public class DamageEffect : Effect
    {
        public override string @class => "DamageEffect";
        public override string Label => "造成伤害";

        [JsonProperty(PropertyName = "damageType")]
        [ToggleGroup("Enabled")]
        public DamageType DamageType;

        [JsonProperty(PropertyName = "damageValueFormula")]
        [ToggleGroup("Enabled"), LabelText("伤害取值")]
        public string DamageValueFormula;

        [JsonProperty(PropertyName = "canCrit")]
        [ToggleGroup("Enabled"), LabelText("能否暴击")]
        public bool CanCrit;
    }
}
