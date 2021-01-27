using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Sirenix.OdinInspector;
using Sirenix.Serialization;
using System.IO;
using Sirenix.Utilities.Editor;
using System.Linq;
using UnityEditor;
using System.Reflection;
using Newtonsoft.Json;

namespace NiceTS.Combat
{
    [CreateAssetMenu(fileName = "状态配置", menuName = "技能|状态/状态配置")]
    //[LabelText("状态配置")]
    [JsonObject(MemberSerialization.OptIn)]
    public class StatusConfigObject : SerializedScriptableObject
    {
        [JsonProperty(PropertyName = "id")]
        [LabelText(StatusIdLabel), DelayedProperty]
        public string ID = "Status1";

        [JsonProperty(PropertyName = "name")]
        [LabelText(StatusNameLabel), DelayedProperty]
        public string Name = "状态1";

        [JsonProperty(PropertyName = "statusType")]
        [LabelText(StatusTypeLabel)]
        public StatusType StatusType;

        [JsonProperty(PropertyName = "duration")]
        [HideInInspector]
        public uint Duration;

        [JsonProperty(PropertyName = "showInStatusSlots")]
        [LabelText("是否在状态栏显示"), UnityEngine.Serialization.FormerlySerializedAs("ShowInStatusIconList")]
        public bool ShowInStatusSlots;

        [JsonProperty(PropertyName = "canStack")]
        [LabelText("能否叠加")]
        public bool CanStack;

        [JsonProperty(PropertyName = "maxStack")]
        [LabelText("最高叠加层数"), ShowIf("CanStack"), Range(0, 99)]
        public int MaxStack = 0;

        [JsonProperty(PropertyName = "enableChildrenStatuses")]
        [LabelText("子状态效果")]
        public bool EnableChildrenStatuses;

        [JsonProperty(PropertyName = "childrenStatuses")]
        [OnInspectorGUI("DrawSpace", append: true)]
        [HideReferenceObjectPicker]
        [LabelText("子状态效果列表"), ShowIf("EnableChildrenStatuses"), ListDrawerSettings(DraggableItems = false, ShowItemCount = false, CustomAddFunction = "AddChildStatus")]
        public List<ChildStatus> ChildrenStatuses = new List<ChildStatus>();

        private void AddChildStatus()
        {
            ChildrenStatuses.Add(new ChildStatus());
        }

        private void DrawSpace()
        {
            GUILayout.Space(20);
        }

        [JsonProperty(PropertyName= "enabledStateModify")]
        [ToggleGroup("EnabledStateModify", "行为禁制")]
        public bool EnabledStateModify;

        [JsonProperty(PropertyName = "actionControlType")]
        [ToggleGroup("EnabledStateModify")]
        public ActionControlType ActionControlType;

        [JsonProperty(PropertyName = "enabledAttributeModify")]
        [ToggleGroup("EnabledAttributeModify", "属性修饰")]
        public bool EnabledAttributeModify;

        [JsonProperty(PropertyName = "attributeType")]
        [ToggleGroup("EnabledAttributeModify")]
        public AttributeType AttributeType;

        [JsonProperty(PropertyName = "numericValue")]
        [ToggleGroup("EnabledAttributeModify"), LabelText("数值参数")]
        public string NumericValue;

        [JsonProperty(PropertyName = "modifyType")]
        [ToggleGroup("EnabledAttributeModify")]
        public ModifyType ModifyType;
        //[ToggleGroup("EnabledAttributeModify"), LabelText("属性修饰")]
        //[DictionaryDrawerSettings(KeyLabel =)]
        //public Dictionary<NumericType, string> AttributeChanges = new Dictionary<NumericType, string>();

        [JsonProperty(PropertyName = "enabledLogicTrigger")]
        [ToggleGroup("EnabledLogicTrigger", "逻辑触发")]
        public bool EnabledLogicTrigger;

        [JsonProperty(PropertyName ="effects")]
        [ToggleGroup("EnabledLogicTrigger")]
        [LabelText("效果列表")/*, Space(30)*/]
        [ListDrawerSettings(Expanded = true, DraggableItems = true, ShowItemCount = false, HideAddButton = true)]
        [HideReferenceObjectPicker]
        public List<Effect> Effects = new List<Effect>();

        [HorizontalGroup("EnabledLogicTrigger/Hor2", PaddingLeft = 40, PaddingRight = 40)]
        [HideLabel]
        [JsonIgnore]
        [OnValueChanged("AddEffect")]
        [ValueDropdown("EffectTypeSelect")]
        public string EffectTypeName = "(添加效果)";

        public IEnumerable<string> EffectTypeSelect()
        {
            var types = typeof(Effect).Assembly.GetTypes()
                .Where(x => !x.IsAbstract)
                .Where(x => typeof(Effect).IsAssignableFrom(x))
                //.Where(x => x != typeof(AttributeNumericModifyEffect))
                .Where(x => x.GetCustomAttribute<EffectAttribute>() != null)
                .OrderBy(x => x.GetCustomAttribute<EffectAttribute>().Order)
                .Select(x => x.GetCustomAttribute<EffectAttribute>().EffectType);

            //var status = AssetDatabase.FindAssets("t:StatusConfigObject", new string[] { "Assets" })
            //    .Select(guid => AssetDatabase.GUIDToAssetPath(guid))
            //    .Select(path => AssetDatabase.LoadAssetAtPath<StatusConfigObject>(path).Name)
            //    .Select(name => $"施加状态效果 [{name}]");

            var results = types.ToList();
            //results.AddRange(status);
            results.Insert(0, "(添加效果)");
            return results;
        }

        private void AddEffect()
        {
            if (EffectTypeName != "(添加效果)")
            {
                //if (EffectTypeName.Contains("施加状态效果 ["))
                //{
                //    var effect = Activator.CreateInstance<AddStatusEffect>() as Effect;
                //    effect.Enabled = true;
                //    if (effect is AddStatusEffect addStatusEffect)
                //    {
                //        var status = AssetDatabase.FindAssets("t:StatusConfigObject", new string[] { "Assets" })
                //            .Select(guid => AssetDatabase.GUIDToAssetPath(guid))
                //            .Select(path => AssetDatabase.LoadAssetAtPath<StatusConfigObject>(path).Name)
                //            .Select(name => $"施加状态效果 [{name}]")
                //            .Where(name => name == $"施加状态效果 [{name}]");
                //        //addStatusEffect.AddStatus = AssetDatabase.load
                //    }
                //    Effects.Add(effect);
                //}
                //else
                {
                    var effectType = typeof(Effect).Assembly.GetTypes()
                        .Where(x => !x.IsAbstract)
                        .Where(x => typeof(Effect).IsAssignableFrom(x))
                        .Where(x => x.GetCustomAttribute<EffectAttribute>() != null)
                        .Where(x => x.GetCustomAttribute<EffectAttribute>().EffectType == EffectTypeName)
                        .First();
                    var effect = Activator.CreateInstance(effectType) as Effect;
                    effect.Enabled = true;
                    Effects.Add(effect);
                }

                EffectTypeName = "(添加效果)";
            }
            //SkillHelper.AddEffect(Effects, EffectType);
        }

        private void BeginBox()
        {
            GUILayout.Space(30);
            SirenixEditorGUI.DrawThickHorizontalSeparator();
            GUILayout.Space(10);
            SirenixEditorGUI.BeginBox("状态表现");
        }

        [JsonIgnore]
        [LabelText("状态特效")]
        [OnInspectorGUI("BeginBox", append: false)]
        public GameObject ParticleEffect;

        [JsonIgnore]
        [LabelText("状态音效")]
        [OnInspectorGUI("EndBox", append: true)]
        public AudioClip Audio;
        private void EndBox()
        {
            SirenixEditorGUI.EndBox();
            GUILayout.Space(30);
            SirenixEditorGUI.DrawThickHorizontalSeparator();
            GUILayout.Space(10);
        }

        [JsonIgnore]
        [TextArea, LabelText("状态描述")]
        public string StatusDescription;

        [JsonIgnore]
        [SerializeField, LabelText("自动重命名")]
        public bool AutoRename { get { return AutoRenameStatic; } set { AutoRenameStatic = value; } }
        [JsonIgnore]
        public static bool AutoRenameStatic = true;

        //private bool NeedClearLog;
        [OnInspectorGUI]
        private void OnInspectorGUI()
        {
            //if (NeedClearLog)
            //{
            //    var assembly = Assembly.GetAssembly(typeof(UnityEditor.SceneView));
            //    var type = assembly.GetType("UnityEditor.LogEntries");
            //    var method = type.GetMethod("Clear");
            //    method.Invoke(new object(), null);
            //    NeedClearLog = false;
            //}
            //if (EffectType != SkillEffectType.None)
            //{
            //    if (EffectType == SkillEffectType.AddStatus) MyToggleObjects.Add(new StateToggleGroup());
            //    if (EffectType == SkillEffectType.NumericModify) MyToggleObjects.Add(new DurationToggleGroup());
            //    EffectType = SkillEffectType.None;
            //    NeedClearLog = true;
            //}

            if (!AutoRename)
            {
                return;
            }

            RenameFile();
        }

        [Button("重命名配置文件"), HideIf("AutoRename")]
        private void RenameFile()
        {
            string[] guids = UnityEditor.Selection.assetGUIDs;
            int i = guids.Length;
            if (i == 1)
            {
                string guid = guids[0];
                string assetPath = UnityEditor.AssetDatabase.GUIDToAssetPath(guid);
                var so = UnityEditor.AssetDatabase.LoadAssetAtPath<StatusConfigObject>(assetPath);
                if (so != this)
                {
                    return;
                }
                var fileName = Path.GetFileName(assetPath);
                var newName = $"Status_{this.ID}";
                if (!fileName.StartsWith(newName))
                {
                    //Debug.Log(assetPath);
                    UnityEditor.AssetDatabase.RenameAsset(assetPath, newName);
                }
            }
        }


        private const string StatusIdLabel = "状态ID";
        private const string StatusNameLabel = "状态名称";
        private const string StatusTypeLabel = "状态类型";
    }

    [JsonObject(MemberSerialization.OptIn)]
    public class ChildStatus
    {
        [JsonProperty(PropertyName = "statusConfigObject")]
        [LabelText("状态效果")]
        public String StatusConfigObject;

        [JsonProperty(PropertyName ="params")]
        [LabelText("参数列表"), HideReferenceObjectPicker]
        public Dictionary<string, string> param = new Dictionary<string, string>();
    }

    public enum StatusType
    {
        [LabelText("Buff(增益)")]
        Buff,
        [LabelText("Debuff(减益)")]
        Debuff,
        [LabelText("其他")]
        Other,
    }

    public enum EffectTriggerType
    {
        [LabelText("立即触发")]
        Instant = 0,
        [LabelText("条件触发")]
        Condition = 1,
        [LabelText("行动点触发")]
        Action = 2,
        [LabelText("间隔触发")]
        Interval = 3,
    }

    public enum ConditionType
    {
        [LabelText("当x秒内没有受伤")]
        WhenInTimeNoDamage = 0,
        [LabelText("当生命值低于x")]
        WhenHPLower = 1,
        [LabelText("当生命值低于百分比x")]
        WhenHPPctLower = 2,
    }
}