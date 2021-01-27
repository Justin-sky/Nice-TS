using Sirenix.OdinInspector;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UnityEngine;
using Newtonsoft.Json;

namespace NiceTS.Combat
{
    [System.AttributeUsage(AttributeTargets.Class, Inherited = false, AllowMultiple = false)]
    sealed class EffectAttribute : Attribute
    {
        readonly string effectType;
        readonly int order;

        public EffectAttribute(string effectType, int order)
        {
            this.effectType = effectType;
            this.order = order;
        }

        public string EffectType
        {
            get { return effectType; }
        }

        public int Order
        {
            get { return order; }
        }
    }

    [JsonObject(MemberSerialization.OptIn)]
    [Serializable]
    public abstract class Effect
    {
        [JsonProperty(PropertyName = "@class")]
        public virtual string @class => "effect";

        [HideInInspector]
        public bool IsSkillEffect;

        [JsonIgnore]
        [HideInInspector]
        public virtual string Label => "Effect";

        [JsonIgnore]
        [ToggleGroup("Enabled", "$Label")]
        public bool Enabled;

        [JsonProperty(PropertyName = "addSkillEffectTargetType")]
        [ToggleGroup("Enabled"), ShowIf("IsSkillEffect", true)]
        public AddSkillEffetTargetType AddSkillEffectTargetType;

        [JsonProperty(PropertyName = "effectTriggerType")]
        [HorizontalGroup("Enabled/Hor")]
        [ToggleGroup("Enabled"), HideIf("IsSkillEffect", true), HideLabel]
        public EffectTriggerType EffectTriggerType;

        [JsonProperty(PropertyName = "conditionType")]
        [HorizontalGroup("Enabled/Hor")]
        [ToggleGroup("Enabled"), HideIf("IsSkillEffect", true), ShowIf("EffectTriggerType", EffectTriggerType.Condition), HideLabel]
        public ConditionType ConditionType;

        [JsonProperty(PropertyName = "actionPointType")]
        [HorizontalGroup("Enabled/Hor")]
        [ToggleGroup("Enabled"), HideIf("IsSkillEffect", true), ShowIf("EffectTriggerType", EffectTriggerType.Action), HideLabel]
        public ActionPointType ActionPointType;

        [JsonProperty(PropertyName = "interval")]
        [HorizontalGroup("Enabled/Hor")]
        [ToggleGroup("Enabled"), HideIf("IsSkillEffect", true), ShowIf("EffectTriggerType", EffectTriggerType.Interval), SuffixLabel("毫秒", true), HideLabel]
        public string Interval;

        [JsonProperty(PropertyName = "conditionParam")]
        [ToggleGroup("Enabled"), HideIf("IsSkillEffect", true), LabelText("条件参数 x="), ShowIf("EffectTriggerType", EffectTriggerType.Condition)]
        public string ConditionParam;

        [JsonProperty(PropertyName = "triggerProbability")]
        [ToggleGroup("Enabled"), /*HideIf("IsSkillEffect", true), */LabelText("触发概率")]
        public string TriggerProbability = "100%";
    }
}
