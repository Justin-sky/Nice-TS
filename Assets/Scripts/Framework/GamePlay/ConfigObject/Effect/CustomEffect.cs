using Sirenix.OdinInspector;

namespace NiceTS.Combat
{
    [Effect("自定义效果", 1000)]
    public class CustomEffect : Effect
    {
        public override string Label => "自定义效果";

        [ToggleGroup("Enabled"), LabelText("自定义效果")]
        public string CustomEffectDescription;
    }
}
