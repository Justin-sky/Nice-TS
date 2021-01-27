using Newtonsoft.Json;
using Sirenix.OdinInspector;

namespace NiceTS.Combat
{
    [JsonObject(MemberSerialization.OptIn)]
    [Effect("标记叠加", 70)]
    public class StackTagEffect : Effect
    {
        public override string @class => "StackTagEffect";
        public override string Label => "标记叠加";

        [JsonProperty(PropertyName = "tagType")]
        [ToggleGroup("Enabled")]
        public TagType TagType;

        [JsonProperty(PropertyName = "tagCount")]
        [ToggleGroup("Enabled"), LabelText("叠加数量")]
        public uint TagCount = 1;

        [JsonProperty(PropertyName = "tagDuration")]
        [ToggleGroup("Enabled"), LabelText("标记停留时间"), SuffixLabel("毫秒", true)]
        public uint TagDuration;
    }
}
