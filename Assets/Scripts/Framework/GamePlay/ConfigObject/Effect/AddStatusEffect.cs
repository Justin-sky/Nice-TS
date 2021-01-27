using Newtonsoft.Json;
using Sirenix.OdinInspector;
using System;
using System.Collections.Generic;

namespace NiceTS.Combat
{
    [JsonObject(MemberSerialization.OptIn)]
    [Effect("施加状态效果", 30)]
    [Serializable]
    public class AddStatusEffect : Effect
    {
        public override string @class => "AddStatusEffect";

        public override string Label
        {
            get
            {
                if (this.AddStatus != null)
                {
                    return $"施加 [ {this.AddStatus} ] 状态效果";
                }
                return "施加状态效果";
            }
        }

        [JsonProperty(PropertyName = "addStatus")]
        [ToggleGroup("Enabled")]
        [LabelText("状态配置")]
        public string AddStatus;

        [JsonProperty(PropertyName = "duration")]
        [ToggleGroup("Enabled"), LabelText("持续时间"), SuffixLabel("毫秒", true)]
        public uint Duration;

        //[ToggleGroup("Enabled"), LabelText("参数")]
        //public string ParamValue;

        [JsonProperty(PropertyName = "params")]
        [HideReferenceObjectPicker]
        [ToggleGroup("Enabled")]
        [LabelText("参数列表")]
        public Dictionary<string, string> Params = new Dictionary<string, string>();
    }
}
