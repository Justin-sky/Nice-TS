
using System.Collections.Generic;
using Puerts;
using System;
using UnityEngine;
using System.Reflection;

//1、配置类必须打[Configure]标签
//2、必须放Editor目录
[Configure]
public class PuertsConfig
{
    [Binding]
    static IEnumerable<Type> Bindings
    {
        get
        {
            return new List<Type>()
            {
                typeof(FairyGUI.EventContext),
                typeof(FairyGUI.EventDispatcher),
                typeof(FairyGUI.EventListener),
                typeof(FairyGUI.InputEvent),
                typeof(FairyGUI.DisplayObject),
                typeof(FairyGUI.Container),
                typeof(FairyGUI.Stage),
                typeof(FairyGUI.Controller),
                typeof(FairyGUI.GObject),
                typeof(FairyGUI.GGraph),
                typeof(FairyGUI.GGroup),
                typeof(FairyGUI.GImage),
                typeof(FairyGUI.GLoader),
                typeof(FairyGUI.GMovieClip),
                typeof(FairyGUI.TextFormat),
                typeof(FairyGUI.GTextField),
                typeof(FairyGUI.GRichTextField),
                typeof(FairyGUI.GTextInput),
                typeof(FairyGUI.GComponent),
                typeof(FairyGUI.GList),
                typeof(FairyGUI.GRoot),
                typeof(FairyGUI.GLabel),
                typeof(FairyGUI.GButton),
                typeof(FairyGUI.GComboBox),
                typeof(FairyGUI.GProgressBar),
                typeof(FairyGUI.GSlider),
                typeof(FairyGUI.PopupMenu),
                typeof(FairyGUI.ScrollPane),
                typeof(FairyGUI.Transition),
                typeof(FairyGUI.UIPackage),
                typeof(FairyGUI.Window),
                typeof(FairyGUI.GObjectPool),
                typeof(FairyGUI.Relations),
                typeof(FairyGUI.RelationType),
                typeof(FairyGUI.Timers),
                typeof(FairyGUI.GTween),
                typeof(FairyGUI.GTweener),
                typeof(FairyGUI.EaseType),
                typeof(FairyGUI.TweenValue),
                typeof(FairyGUI.UIObjectFactory),


                typeof(Debug),
                typeof(Vector3),
                typeof(List<int>),
                //typeof(Dictionary<string, int>),
                typeof(Time),
                typeof(Transform),
                typeof(Component),
                typeof(GameObject),
                typeof(UnityEngine.Object),
                typeof(Delegate),
                typeof(System.Object),
                typeof(Type),
                typeof(ParticleSystem),
                typeof(Canvas),
                typeof(RenderMode),
                typeof(Behaviour),
                typeof(MonoBehaviour),

                typeof(UnityEngine.EventSystems.UIBehaviour),
                typeof(UnityEngine.UI.Selectable),
                typeof(UnityEngine.UI.Button),
                typeof(UnityEngine.UI.Button.ButtonClickedEvent),
                typeof(UnityEngine.Events.UnityEvent),
                typeof(UnityEngine.UI.InputField),
                typeof(UnityEngine.UI.Toggle),
                typeof(UnityEngine.UI.Toggle.ToggleEvent),
                typeof(UnityEngine.Events.UnityEvent<bool>),


                typeof(MonoSingleton<NiceTS.TService>),
                typeof(Logger),
                typeof(Addressable.ResourceManager),
                typeof(UnityEngine.SceneManagement.SceneManager),
                typeof(UnityEngine.SceneManagement.Scene),
                typeof(NiceTS.TService),
                typeof(NiceTS.TChannel),
                typeof(JsManager),
                typeof(GameLaunch),

            };
        }
    }

    [BlittableCopy]
    static IEnumerable<Type> Blittables
    {
        get
        {
            return new List<Type>()
            {
                //打开这个可以优化Vector3的GC，但需要开启unsafe编译
                //typeof(Vector3),
            };
        }
    }

    [Filter]
    static bool Filter(MemberInfo memberInfo)
    {
        return memberInfo.Name == "runInEditMode" ||
            memberInfo.Name == "get_runInEditMode" ||
            memberInfo.Name == "set_runInEditMode";
    }
}
