using Sirenix.OdinInspector;

namespace NiceTS.Combat
{
    [Effect("治疗英雄", 20)]
    public class CureEffect : Effect
    {
        public override string Label => "治疗英雄";

        [ToggleGroup("Enabled"), LabelText("治疗参数")]
        public string CureValueFormula;
    }
}
