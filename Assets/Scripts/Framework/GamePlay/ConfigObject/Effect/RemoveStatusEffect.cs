using Newtonsoft.Json;
using Sirenix.OdinInspector;

namespace NiceTS.Combat
{
    [JsonObject(MemberSerialization.OptIn)]
    [Effect("移除状态效果", 40)]
    public class RemoveStatusEffect : Effect
    {
        public override string @class => "RemoveStatusEffect";
        public override string Label
        {
            get
            {
                if (this.RemoveStatus != null)
                {
                    return $"移除 [ {this.RemoveStatus.Name} ] 状态效果";
                }
                return "移除状态效果";
            }
        }

        [JsonProperty(PropertyName = "removeStatus")]
        [ToggleGroup("Enabled")]
        [LabelText("状态配置")]
        public StatusConfigObject RemoveStatus;
    }
}
