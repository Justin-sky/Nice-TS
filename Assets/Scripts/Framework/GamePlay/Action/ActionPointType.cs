using Sirenix.OdinInspector;

namespace NiceTS.Combat
{
    public enum ActionPointType
    {
        [LabelText("造成伤害前")]
        PreCauseDamage,
        [LabelText("承受伤害前")]
        PreReceiveDamage,

        [LabelText("造成伤害后")]
        PostCauseDamage,
        [LabelText("承受伤害后")]
        PostReceiveDamage,

        [LabelText("给予治疗后")]
        PostGiveCure,
        [LabelText("接受治疗后")]
        PostReceiveCure,

        [LabelText("赋给效果")]
        AssignEffect,
        [LabelText("接受效果")]
        ReceiveEffect,

        [LabelText("赋加状态后")]
        PostGiveStatus,
        [LabelText("承受状态后")]
        PostReceiveStatus,

        Max,
    }
}
