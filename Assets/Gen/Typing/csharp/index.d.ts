
declare module 'csharp' {
    interface $Ref<T> {}
    
    type $Extension<T1, T2> = {
        [P in keyof T2] : T2[P] extends (obj:T1, ...args: infer P) => infer R ? (...args: P) => R : never;
    }
    
    namespace System {
        interface Array$1<T> extends System.Array {
            get_Item(index: number):T;
            
            set_Item(index: number, value: T):void;
        }
    }
    
    type $Task<T> = System.Threading.Tasks.Task$1<T>
    
    namespace FairyGUI {
        class EventContext extends System.Object {
            public type: string;
            public data: any;
            public sender: FairyGUI.EventDispatcher;
            public initiator: any;
            public inputEvent: FairyGUI.InputEvent;
            public isDefaultPrevented: boolean;
            public constructor();
            public StopPropagation():void;
            public PreventDefault():void;
            public CaptureTouch():void;
            
        }
        class EventDispatcher extends System.Object {
            public constructor();
            public AddEventListener(strType: string, callback: FairyGUI.EventCallback1):void;
            public AddEventListener(strType: string, callback: FairyGUI.EventCallback0):void;
            public RemoveEventListener(strType: string, callback: FairyGUI.EventCallback1):void;
            public RemoveEventListener(strType: string, callback: FairyGUI.EventCallback0):void;
            public AddCapture(strType: string, callback: FairyGUI.EventCallback1):void;
            public RemoveCapture(strType: string, callback: FairyGUI.EventCallback1):void;
            public RemoveEventListeners():void;
            public RemoveEventListeners(strType: string):void;
            public hasEventListeners(strType: string):boolean;
            public isDispatching(strType: string):boolean;
            public DispatchEvent(strType: string):boolean;
            public DispatchEvent(strType: string, data: any):boolean;
            public DispatchEvent(strType: string, data: any, initiator: any):boolean;
            public DispatchEvent(context: FairyGUI.EventContext):boolean;
            public BubbleEvent(strType: string, data: any):boolean;
            public BroadcastEvent(strType: string, data: any):boolean;
            
        }
        class InputEvent extends System.Object {
            public x: number;
            public y: number;
            public keyCode: UnityEngine.KeyCode;
            public character: number;
            public modifiers: UnityEngine.EventModifiers;
            public mouseWheelDelta: number;
            public touchId: number;
            public button: number;
            public clickCount: number;
            public holdTime: number;
            public position: UnityEngine.Vector2;
            public isDoubleClick: boolean;
            public ctrlOrCmd: boolean;
            public ctrl: boolean;
            public shift: boolean;
            public alt: boolean;
            public command: boolean;
            public constructor();
            
        }
        type EventCallback1 = (context: FairyGUI.EventContext) => void;
        var EventCallback1: {new (func: (context: FairyGUI.EventContext) => void): EventCallback1;}
        type EventCallback0 = () => void;
        var EventCallback0: {new (func: () => void): EventCallback0;}
        class EventListener extends System.Object {
            public type: string;
            public isEmpty: boolean;
            public isDispatching: boolean;
            public constructor(owner: FairyGUI.EventDispatcher, type: string);
            public AddCapture(callback: FairyGUI.EventCallback1):void;
            public RemoveCapture(callback: FairyGUI.EventCallback1):void;
            public Add(callback: FairyGUI.EventCallback1):void;
            public Remove(callback: FairyGUI.EventCallback1):void;
            public Add(callback: FairyGUI.EventCallback0):void;
            public Remove(callback: FairyGUI.EventCallback0):void;
            public Set(callback: FairyGUI.EventCallback1):void;
            public Set(callback: FairyGUI.EventCallback0):void;
            public Clear():void;
            public Call():boolean;
            public Call(data: any):boolean;
            public BubbleCall(data: any):boolean;
            public BubbleCall():boolean;
            public BroadcastCall(data: any):boolean;
            public BroadcastCall():boolean;
            
        }
        class DisplayObject extends FairyGUI.EventDispatcher {
            public name: string;
            public gOwner: FairyGUI.GObject;
            public id: number;
            public parent: FairyGUI.Container;
            public gameObject: UnityEngine.GameObject;
            public cachedTransform: UnityEngine.Transform;
            public graphics: FairyGUI.NGraphics;
            public paintingGraphics: FairyGUI.NGraphics;
            public onClick: FairyGUI.EventListener;
            public onRightClick: FairyGUI.EventListener;
            public onTouchBegin: FairyGUI.EventListener;
            public onTouchMove: FairyGUI.EventListener;
            public onTouchEnd: FairyGUI.EventListener;
            public onRollOver: FairyGUI.EventListener;
            public onRollOut: FairyGUI.EventListener;
            public onMouseWheel: FairyGUI.EventListener;
            public onAddedToStage: FairyGUI.EventListener;
            public onRemovedFromStage: FairyGUI.EventListener;
            public onKeyDown: FairyGUI.EventListener;
            public onClickLink: FairyGUI.EventListener;
            public onFocusIn: FairyGUI.EventListener;
            public onFocusOut: FairyGUI.EventListener;
            public alpha: number;
            public grayed: boolean;
            public visible: boolean;
            public x: number;
            public y: number;
            public z: number;
            public xy: UnityEngine.Vector2;
            public position: UnityEngine.Vector3;
            public pixelPerfect: boolean;
            public width: number;
            public height: number;
            public size: UnityEngine.Vector2;
            public scaleX: number;
            public scaleY: number;
            public scale: UnityEngine.Vector2;
            public rotation: number;
            public rotationX: number;
            public rotationY: number;
            public skew: UnityEngine.Vector2;
            public perspective: boolean;
            public focalLength: number;
            public pivot: UnityEngine.Vector2;
            public location: UnityEngine.Vector3;
            public material: UnityEngine.Material;
            public shader: string;
            public renderingOrder: number;
            public layer: number;
            public focusable: boolean;
            public tabStop: boolean;
            public focused: boolean;
            public cursor: string;
            public isDisposed: boolean;
            public topmost: FairyGUI.Container;
            public stage: FairyGUI.Stage;
            public worldSpaceContainer: FairyGUI.Container;
            public touchable: boolean;
            public touchDisabled: boolean;
            public paintingMode: boolean;
            public cacheAsBitmap: boolean;
            public filter: FairyGUI.IFilter;
            public blendMode: FairyGUI.BlendMode;
            public home: UnityEngine.Transform;
            public constructor();
            public add_onPaint(value: System.Action):void;
            public remove_onPaint(value: System.Action):void;
            public SetXY(xv: number, yv: number):void;
            public SetPosition(xv: number, yv: number, zv: number):void;
            public SetSize(wv: number, hv: number):void;
            public EnsureSizeCorrect():void;
            public SetScale(xv: number, yv: number):void;
            public EnterPaintingMode():void;
            public EnterPaintingMode(requestorId: number, extend: System.Nullable$1<FairyGUI.Margin>):void;
            public EnterPaintingMode(requestorId: number, extend: System.Nullable$1<FairyGUI.Margin>, scale: number):void;
            public LeavePaintingMode(requestorId: number):void;
            public GetScreenShot(extend: System.Nullable$1<FairyGUI.Margin>, scale: number):UnityEngine.Texture2D;
            public GetBounds(targetSpace: FairyGUI.DisplayObject):UnityEngine.Rect;
            public GlobalToLocal(point: UnityEngine.Vector2):UnityEngine.Vector2;
            public LocalToGlobal(point: UnityEngine.Vector2):UnityEngine.Vector2;
            public WorldToLocal(worldPoint: UnityEngine.Vector3, direction: UnityEngine.Vector3):UnityEngine.Vector3;
            public LocalToWorld(localPoint: UnityEngine.Vector3):UnityEngine.Vector3;
            public TransformPoint(point: UnityEngine.Vector2, targetSpace: FairyGUI.DisplayObject):UnityEngine.Vector2;
            public TransformRect(rect: UnityEngine.Rect, targetSpace: FairyGUI.DisplayObject):UnityEngine.Rect;
            public RemoveFromParent():void;
            public InvalidateBatchingState():void;
            public Update(context: FairyGUI.UpdateContext):void;
            public Dispose():void;
            
        }
        class GObject extends FairyGUI.EventDispatcher {
            public name: string;
            public data: any;
            public sourceWidth: number;
            public sourceHeight: number;
            public initWidth: number;
            public initHeight: number;
            public minWidth: number;
            public maxWidth: number;
            public minHeight: number;
            public maxHeight: number;
            public dragBounds: System.Nullable$1<UnityEngine.Rect>;
            public packageItem: FairyGUI.PackageItem;
            public id: string;
            public relations: FairyGUI.Relations;
            public parent: FairyGUI.GComponent;
            public displayObject: FairyGUI.DisplayObject;
            public static draggingObject: FairyGUI.GObject;
            public onClick: FairyGUI.EventListener;
            public onRightClick: FairyGUI.EventListener;
            public onTouchBegin: FairyGUI.EventListener;
            public onTouchMove: FairyGUI.EventListener;
            public onTouchEnd: FairyGUI.EventListener;
            public onRollOver: FairyGUI.EventListener;
            public onRollOut: FairyGUI.EventListener;
            public onAddedToStage: FairyGUI.EventListener;
            public onRemovedFromStage: FairyGUI.EventListener;
            public onKeyDown: FairyGUI.EventListener;
            public onClickLink: FairyGUI.EventListener;
            public onPositionChanged: FairyGUI.EventListener;
            public onSizeChanged: FairyGUI.EventListener;
            public onDragStart: FairyGUI.EventListener;
            public onDragMove: FairyGUI.EventListener;
            public onDragEnd: FairyGUI.EventListener;
            public onGearStop: FairyGUI.EventListener;
            public onFocusIn: FairyGUI.EventListener;
            public onFocusOut: FairyGUI.EventListener;
            public x: number;
            public y: number;
            public z: number;
            public xy: UnityEngine.Vector2;
            public position: UnityEngine.Vector3;
            public width: number;
            public height: number;
            public size: UnityEngine.Vector2;
            public actualWidth: number;
            public actualHeight: number;
            public xMin: number;
            public yMin: number;
            public scaleX: number;
            public scaleY: number;
            public scale: UnityEngine.Vector2;
            public skew: UnityEngine.Vector2;
            public pivotX: number;
            public pivotY: number;
            public pivot: UnityEngine.Vector2;
            public pivotAsAnchor: boolean;
            public touchable: boolean;
            public grayed: boolean;
            public enabled: boolean;
            public rotation: number;
            public rotationX: number;
            public rotationY: number;
            public alpha: number;
            public visible: boolean;
            public sortingOrder: number;
            public focusable: boolean;
            public tabStop: boolean;
            public focused: boolean;
            public tooltips: string;
            public cursor: string;
            public filter: FairyGUI.IFilter;
            public blendMode: FairyGUI.BlendMode;
            public gameObjectName: string;
            public inContainer: boolean;
            public onStage: boolean;
            public resourceURL: string;
            public gearXY: FairyGUI.GearXY;
            public gearSize: FairyGUI.GearSize;
            public gearLook: FairyGUI.GearLook;
            public group: FairyGUI.GGroup;
            public root: FairyGUI.GRoot;
            public text: string;
            public icon: string;
            public draggable: boolean;
            public dragging: boolean;
            public isDisposed: boolean;
            public asImage: FairyGUI.GImage;
            public asCom: FairyGUI.GComponent;
            public asButton: FairyGUI.GButton;
            public asLabel: FairyGUI.GLabel;
            public asProgress: FairyGUI.GProgressBar;
            public asSlider: FairyGUI.GSlider;
            public asComboBox: FairyGUI.GComboBox;
            public asTextField: FairyGUI.GTextField;
            public asRichTextField: FairyGUI.GRichTextField;
            public asTextInput: FairyGUI.GTextInput;
            public asLoader: FairyGUI.GLoader;
            public asLoader3D: FairyGUI.GLoader3D;
            public asList: FairyGUI.GList;
            public asGraph: FairyGUI.GGraph;
            public asGroup: FairyGUI.GGroup;
            public asMovieClip: FairyGUI.GMovieClip;
            public asTree: FairyGUI.GTree;
            public treeNode: FairyGUI.GTreeNode;
            public constructor();
            public SetXY(xv: number, yv: number):void;
            public SetXY(xv: number, yv: number, topLeftValue: boolean):void;
            public SetPosition(xv: number, yv: number, zv: number):void;
            public Center():void;
            public Center(restraint: boolean):void;
            public MakeFullScreen():void;
            public SetSize(wv: number, hv: number):void;
            public SetSize(wv: number, hv: number, ignorePivot: boolean):void;
            public SetScale(wv: number, hv: number):void;
            public SetPivot(xv: number, yv: number):void;
            public SetPivot(xv: number, yv: number, asAnchor: boolean):void;
            public RequestFocus():void;
            public RequestFocus(byKey: boolean):void;
            public SetHome(obj: FairyGUI.GObject):void;
            public GetGear(index: number):FairyGUI.GearBase;
            public InvalidateBatchingState():void;
            public HandleControllerChanged(c: FairyGUI.Controller):void;
            public AddRelation(target: FairyGUI.GObject, relationType: FairyGUI.RelationType):void;
            public AddRelation(target: FairyGUI.GObject, relationType: FairyGUI.RelationType, usePercent: boolean):void;
            public RemoveRelation(target: FairyGUI.GObject, relationType: FairyGUI.RelationType):void;
            public RemoveFromParent():void;
            public StartDrag():void;
            public StartDrag(touchId: number):void;
            public StopDrag():void;
            public LocalToGlobal(pt: UnityEngine.Vector2):UnityEngine.Vector2;
            public GlobalToLocal(pt: UnityEngine.Vector2):UnityEngine.Vector2;
            public LocalToGlobal(rect: UnityEngine.Rect):UnityEngine.Rect;
            public GlobalToLocal(rect: UnityEngine.Rect):UnityEngine.Rect;
            public LocalToRoot(pt: UnityEngine.Vector2, r: FairyGUI.GRoot):UnityEngine.Vector2;
            public RootToLocal(pt: UnityEngine.Vector2, r: FairyGUI.GRoot):UnityEngine.Vector2;
            public WorldToLocal(pt: UnityEngine.Vector3):UnityEngine.Vector2;
            public WorldToLocal(pt: UnityEngine.Vector3, camera: UnityEngine.Camera):UnityEngine.Vector2;
            public TransformPoint(pt: UnityEngine.Vector2, targetSpace: FairyGUI.GObject):UnityEngine.Vector2;
            public TransformRect(rect: UnityEngine.Rect, targetSpace: FairyGUI.GObject):UnityEngine.Rect;
            public Dispose():void;
            public ConstructFromResource():void;
            public Setup_BeforeAdd(buffer: FairyGUI.Utils.ByteBuffer, beginPos: number):void;
            public Setup_AfterAdd(buffer: FairyGUI.Utils.ByteBuffer, beginPos: number):void;
            public TweenMove(endValue: UnityEngine.Vector2, duration: number):FairyGUI.GTweener;
            public TweenMoveX(endValue: number, duration: number):FairyGUI.GTweener;
            public TweenMoveY(endValue: number, duration: number):FairyGUI.GTweener;
            public TweenScale(endValue: UnityEngine.Vector2, duration: number):FairyGUI.GTweener;
            public TweenScaleX(endValue: number, duration: number):FairyGUI.GTweener;
            public TweenScaleY(endValue: number, duration: number):FairyGUI.GTweener;
            public TweenResize(endValue: UnityEngine.Vector2, duration: number):FairyGUI.GTweener;
            public TweenFade(endValue: number, duration: number):FairyGUI.GTweener;
            public TweenRotate(endValue: number, duration: number):FairyGUI.GTweener;
            
        }
        class Container extends FairyGUI.DisplayObject {
            public renderMode: UnityEngine.RenderMode;
            public renderCamera: UnityEngine.Camera;
            public opaque: boolean;
            public clipSoftness: System.Nullable$1<UnityEngine.Vector4>;
            public hitArea: FairyGUI.IHitTest;
            public touchChildren: boolean;
            public reversedMask: boolean;
            public numChildren: number;
            public clipRect: System.Nullable$1<UnityEngine.Rect>;
            public mask: FairyGUI.DisplayObject;
            public fairyBatching: boolean;
            public tabStopChildren: boolean;
            public constructor();
            public constructor(gameObjectName: string);
            public constructor(attachTarget: UnityEngine.GameObject);
            public add_onUpdate(value: System.Action):void;
            public remove_onUpdate(value: System.Action):void;
            public AddChild(child: FairyGUI.DisplayObject):FairyGUI.DisplayObject;
            public AddChildAt(child: FairyGUI.DisplayObject, index: number):FairyGUI.DisplayObject;
            public Contains(child: FairyGUI.DisplayObject):boolean;
            public GetChildAt(index: number):FairyGUI.DisplayObject;
            public GetChild(name: string):FairyGUI.DisplayObject;
            public GetChildren():System.Array$1<FairyGUI.DisplayObject>;
            public GetChildIndex(child: FairyGUI.DisplayObject):number;
            public RemoveChild(child: FairyGUI.DisplayObject):FairyGUI.DisplayObject;
            public RemoveChild(child: FairyGUI.DisplayObject, dispose: boolean):FairyGUI.DisplayObject;
            public RemoveChildAt(index: number):FairyGUI.DisplayObject;
            public RemoveChildAt(index: number, dispose: boolean):FairyGUI.DisplayObject;
            public RemoveChildren():void;
            public RemoveChildren(beginIndex: number, endIndex: number, dispose: boolean):void;
            public SetChildIndex(child: FairyGUI.DisplayObject, index: number):void;
            public SwapChildren(child1: FairyGUI.DisplayObject, child2: FairyGUI.DisplayObject):void;
            public SwapChildrenAt(index1: number, index2: number):void;
            public ChangeChildrenOrder(indice: System.Collections.Generic.IList$1<number>, objs: System.Collections.Generic.IList$1<FairyGUI.DisplayObject>):void;
            public GetDescendants(backward: boolean):System.Collections.Generic.IEnumerator$1<FairyGUI.DisplayObject>;
            public CreateGraphics():void;
            public GetRenderCamera():UnityEngine.Camera;
            public HitTest(stagePoint: UnityEngine.Vector2, forTouch: boolean):FairyGUI.DisplayObject;
            public IsAncestorOf(obj: FairyGUI.DisplayObject):boolean;
            public InvalidateBatchingState(childrenChanged: boolean):void;
            public SetChildrenLayer(value: number):void;
            public InvalidateBatchingState():void;
            
        }
        class NGraphics extends System.Object {
            
        }
        class Stage extends FairyGUI.Container {
            public soundVolume: number;
            public static inst: FairyGUI.Stage;
            public static touchScreen: boolean;
            public static keyboardInput: boolean;
            public static isTouchOnUI: boolean;
            public static devicePixelRatio: number;
            public onStageResized: FairyGUI.EventListener;
            public touchTarget: FairyGUI.DisplayObject;
            public focus: FairyGUI.DisplayObject;
            public touchPosition: UnityEngine.Vector2;
            public touchCount: number;
            public keyboard: FairyGUI.IKeyboard;
            public activeCursor: string;
            public constructor();
            public add_beforeUpdate(value: System.Action):void;
            public remove_beforeUpdate(value: System.Action):void;
            public add_afterUpdate(value: System.Action):void;
            public remove_afterUpdate(value: System.Action):void;
            public static Instantiate():void;
            public SetFous(newFocus: FairyGUI.DisplayObject, byKey?: boolean):void;
            public DoKeyNavigate(backward: boolean):void;
            public GetTouchPosition(touchId: number):UnityEngine.Vector2;
            public GetTouchTarget(touchId: number):FairyGUI.DisplayObject;
            public GetAllTouch(result: System.Array$1<number>):System.Array$1<number>;
            public ResetInputState():void;
            public CancelClick(touchId: number):void;
            public EnableSound():void;
            public DisableSound():void;
            public PlayOneShotSound(clip: UnityEngine.AudioClip, volumeScale: number):void;
            public PlayOneShotSound(clip: UnityEngine.AudioClip):void;
            public OpenKeyboard(text: string, autocorrection: boolean, multiline: boolean, secure: boolean, alert: boolean, textPlaceholder: string, keyboardType: number, hideInput: boolean):void;
            public CloseKeyboard():void;
            public InputString(value: string):void;
            public SetCustomInput(screenPos: UnityEngine.Vector2, buttonDown: boolean):void;
            public SetCustomInput(screenPos: UnityEngine.Vector2, buttonDown: boolean, buttonUp: boolean):void;
            public SetCustomInput(hit: $Ref<UnityEngine.RaycastHit>, buttonDown: boolean):void;
            public SetCustomInput(hit: $Ref<UnityEngine.RaycastHit>, buttonDown: boolean, buttonUp: boolean):void;
            public ForceUpdate():void;
            public ApplyPanelOrder(target: FairyGUI.Container):void;
            public SortWorldSpacePanelsByZOrder(panelSortingOrder: number):void;
            public MonitorTexture(texture: FairyGUI.NTexture):void;
            public AddTouchMonitor(touchId: number, target: FairyGUI.EventDispatcher):void;
            public RemoveTouchMonitor(target: FairyGUI.EventDispatcher):void;
            public IsTouchMonitoring(target: FairyGUI.EventDispatcher):boolean;
            public RegisterCursor(cursorName: string, texture: UnityEngine.Texture2D, hotspot: UnityEngine.Vector2):void;
            
        }
        class Margin extends System.ValueType {
            
        }
        interface IFilter {
            
        }
        enum BlendMode { Normal = 0, None = 1, Add = 2, Multiply = 3, Screen = 4, Erase = 5, Mask = 6, Below = 7, Off = 8, One_OneMinusSrcAlpha = 9, Custom1 = 10, Custom2 = 11, Custom3 = 12 }
        class UpdateContext extends System.Object {
            
        }
        interface IHitTest {
            
        }
        interface IKeyboard {
            
        }
        class NTexture extends System.Object {
            
        }
        class Controller extends FairyGUI.EventDispatcher {
            public name: string;
            public onChanged: FairyGUI.EventListener;
            public selectedIndex: number;
            public selectedPage: string;
            public previsousIndex: number;
            public previousPage: string;
            public pageCount: number;
            public constructor();
            public Dispose():void;
            public SetSelectedIndex(value: number):void;
            public SetSelectedPage(value: string):void;
            public GetPageName(index: number):string;
            public GetPageId(index: number):string;
            public GetPageIdByName(aName: string):string;
            public AddPage(name: string):void;
            public AddPageAt(name: string, index: number):void;
            public RemovePage(name: string):void;
            public RemovePageAt(index: number):void;
            public ClearPages():void;
            public HasPage(aName: string):boolean;
            public RunActions():void;
            public Setup(buffer: FairyGUI.Utils.ByteBuffer):void;
            
        }
        class PackageItem extends System.Object {
            
        }
        class Relations extends System.Object {
            public handling: FairyGUI.GObject;
            public isEmpty: boolean;
            public constructor(owner: FairyGUI.GObject);
            public Add(target: FairyGUI.GObject, relationType: FairyGUI.RelationType):void;
            public Add(target: FairyGUI.GObject, relationType: FairyGUI.RelationType, usePercent: boolean):void;
            public Remove(target: FairyGUI.GObject, relationType: FairyGUI.RelationType):void;
            public Contains(target: FairyGUI.GObject):boolean;
            public ClearFor(target: FairyGUI.GObject):void;
            public ClearAll():void;
            public CopyFrom(source: FairyGUI.Relations):void;
            public Dispose():void;
            public OnOwnerSizeChanged(dWidth: number, dHeight: number, applyPivot: boolean):void;
            public Setup(buffer: FairyGUI.Utils.ByteBuffer, parentToChild: boolean):void;
            
        }
        class GComponent extends FairyGUI.GObject {
            public rootContainer: FairyGUI.Container;
            public container: FairyGUI.Container;
            public scrollPane: FairyGUI.ScrollPane;
            public onDrop: FairyGUI.EventListener;
            public fairyBatching: boolean;
            public opaque: boolean;
            public margin: FairyGUI.Margin;
            public childrenRenderOrder: FairyGUI.ChildrenRenderOrder;
            public apexIndex: number;
            public tabStopChildren: boolean;
            public numChildren: number;
            public Controllers: System.Collections.Generic.List$1<FairyGUI.Controller>;
            public clipSoftness: UnityEngine.Vector2;
            public mask: FairyGUI.DisplayObject;
            public reversedMask: boolean;
            public baseUserData: string;
            public viewWidth: number;
            public viewHeight: number;
            public constructor();
            public InvalidateBatchingState(childChanged: boolean):void;
            public AddChild(child: FairyGUI.GObject):FairyGUI.GObject;
            public AddChildAt(child: FairyGUI.GObject, index: number):FairyGUI.GObject;
            public RemoveChild(child: FairyGUI.GObject):FairyGUI.GObject;
            public RemoveChild(child: FairyGUI.GObject, dispose: boolean):FairyGUI.GObject;
            public RemoveChildAt(index: number):FairyGUI.GObject;
            public RemoveChildAt(index: number, dispose: boolean):FairyGUI.GObject;
            public RemoveChildren():void;
            public RemoveChildren(beginIndex: number, endIndex: number, dispose: boolean):void;
            public GetChildAt(index: number):FairyGUI.GObject;
            public GetChild(name: string):FairyGUI.GObject;
            public GetChildByPath(path: string):FairyGUI.GObject;
            public GetVisibleChild(name: string):FairyGUI.GObject;
            public GetChildInGroup(group: FairyGUI.GGroup, name: string):FairyGUI.GObject;
            public GetChildren():System.Array$1<FairyGUI.GObject>;
            public GetChildIndex(child: FairyGUI.GObject):number;
            public SetChildIndex(child: FairyGUI.GObject, index: number):void;
            public SetChildIndexBefore(child: FairyGUI.GObject, index: number):number;
            public SwapChildren(child1: FairyGUI.GObject, child2: FairyGUI.GObject):void;
            public SwapChildrenAt(index1: number, index2: number):void;
            public IsAncestorOf(obj: FairyGUI.GObject):boolean;
            public ChangeChildrenOrder(objs: System.Collections.Generic.IList$1<FairyGUI.GObject>):void;
            public AddController(controller: FairyGUI.Controller):void;
            public GetControllerAt(index: number):FairyGUI.Controller;
            public GetController(name: string):FairyGUI.Controller;
            public RemoveController(c: FairyGUI.Controller):void;
            public GetTransitionAt(index: number):FairyGUI.Transition;
            public GetTransition(name: string):FairyGUI.Transition;
            public IsChildInView(child: FairyGUI.GObject):boolean;
            public GetFirstChildInView():number;
            public SetBoundsChangedFlag():void;
            public EnsureBoundsCorrect():void;
            public ConstructFromXML(xml: FairyGUI.Utils.XML):void;
            public InvalidateBatchingState():void;
            
        }
        class GearXY extends FairyGUI.GearBase {
            
        }
        class GearBase extends System.Object {
            
        }
        class GearSize extends FairyGUI.GearBase {
            
        }
        class GearLook extends FairyGUI.GearBase {
            
        }
        enum RelationType { Left_Left = 0, Left_Center = 1, Left_Right = 2, Center_Center = 3, Right_Left = 4, Right_Center = 5, Right_Right = 6, Top_Top = 7, Top_Middle = 8, Top_Bottom = 9, Middle_Middle = 10, Bottom_Top = 11, Bottom_Middle = 12, Bottom_Bottom = 13, Width = 14, Height = 15, LeftExt_Left = 16, LeftExt_Right = 17, RightExt_Left = 18, RightExt_Right = 19, TopExt_Top = 20, TopExt_Bottom = 21, BottomExt_Top = 22, BottomExt_Bottom = 23, Size = 24 }
        class GGroup extends FairyGUI.GObject {
            public layout: FairyGUI.GroupLayoutType;
            public lineGap: number;
            public columnGap: number;
            public excludeInvisibles: boolean;
            public autoSizeDisabled: boolean;
            public mainGridMinSize: number;
            public mainGridIndex: number;
            public constructor();
            public SetBoundsChangedFlag(positionChangedOnly?: boolean):void;
            public EnsureBoundsCorrect():void;
            
        }
        class GRoot extends FairyGUI.GComponent {
            public static contentScaleFactor: number;
            public static contentScaleLevel: number;
            public static inst: FairyGUI.GRoot;
            public modalLayer: FairyGUI.GGraph;
            public hasModalWindow: boolean;
            public modalWaiting: boolean;
            public touchTarget: FairyGUI.GObject;
            public hasAnyPopup: boolean;
            public focus: FairyGUI.GObject;
            public soundVolume: number;
            public constructor();
            public SetContentScaleFactor(designResolutionX: number, designResolutionY: number):void;
            public SetContentScaleFactor(designResolutionX: number, designResolutionY: number, screenMatchMode: FairyGUI.UIContentScaler.ScreenMatchMode):void;
            public SetContentScaleFactor(constantScaleFactor: number):void;
            public ApplyContentScaleFactor():void;
            public ShowWindow(win: FairyGUI.Window):void;
            public HideWindow(win: FairyGUI.Window):void;
            public HideWindowImmediately(win: FairyGUI.Window):void;
            public HideWindowImmediately(win: FairyGUI.Window, dispose: boolean):void;
            public BringToFront(win: FairyGUI.Window):void;
            public ShowModalWait():void;
            public CloseModalWait():void;
            public CloseAllExceptModals():void;
            public CloseAllWindows():void;
            public GetTopWindow():FairyGUI.Window;
            public DisplayObjectToGObject(obj: FairyGUI.DisplayObject):FairyGUI.GObject;
            public ShowPopup(popup: FairyGUI.GObject):void;
            public ShowPopup(popup: FairyGUI.GObject, target: FairyGUI.GObject):void;
            public ShowPopup(popup: FairyGUI.GObject, target: FairyGUI.GObject, dir: FairyGUI.PopupDirection):void;
            public ShowPopup(popup: FairyGUI.GObject, target: FairyGUI.GObject, dir: FairyGUI.PopupDirection, closeUntilUpEvent: boolean):void;
            public GetPoupPosition(popup: FairyGUI.GObject, target: FairyGUI.GObject, dir: FairyGUI.PopupDirection):UnityEngine.Vector2;
            public TogglePopup(popup: FairyGUI.GObject):void;
            public TogglePopup(popup: FairyGUI.GObject, target: FairyGUI.GObject):void;
            public TogglePopup(popup: FairyGUI.GObject, target: FairyGUI.GObject, dir: FairyGUI.PopupDirection):void;
            public TogglePopup(popup: FairyGUI.GObject, target: FairyGUI.GObject, dir: FairyGUI.PopupDirection, closeUntilUpEvent: boolean):void;
            public HidePopup():void;
            public HidePopup(popup: FairyGUI.GObject):void;
            public ShowTooltips(msg: string):void;
            public ShowTooltips(msg: string, delay: number):void;
            public ShowTooltipsWin(tooltipWin: FairyGUI.GObject):void;
            public ShowTooltipsWin(tooltipWin: FairyGUI.GObject, delay: number):void;
            public HideTooltips():void;
            public EnableSound():void;
            public DisableSound():void;
            public PlayOneShotSound(clip: UnityEngine.AudioClip, volumeScale: number):void;
            public PlayOneShotSound(clip: UnityEngine.AudioClip):void;
            
        }
        class GImage extends FairyGUI.GObject {
            public color: UnityEngine.Color;
            public flip: FairyGUI.FlipType;
            public fillMethod: FairyGUI.FillMethod;
            public fillOrigin: number;
            public fillClockwise: boolean;
            public fillAmount: number;
            public texture: FairyGUI.NTexture;
            public material: UnityEngine.Material;
            public shader: string;
            public constructor();
            
        }
        class GButton extends FairyGUI.GComponent {
            public sound: FairyGUI.NAudioClip;
            public soundVolumeScale: number;
            public changeStateOnClick: boolean;
            public linkedPopup: FairyGUI.GObject;
            public static UP: string;
            public static DOWN: string;
            public static OVER: string;
            public static SELECTED_OVER: string;
            public static DISABLED: string;
            public static SELECTED_DISABLED: string;
            public onChanged: FairyGUI.EventListener;
            public icon: string;
            public title: string;
            public text: string;
            public selectedIcon: string;
            public selectedTitle: string;
            public titleColor: UnityEngine.Color;
            public color: UnityEngine.Color;
            public titleFontSize: number;
            public selected: boolean;
            public mode: FairyGUI.ButtonMode;
            public relatedController: FairyGUI.Controller;
            public relatedPageId: string;
            public constructor();
            public FireClick(downEffect: boolean, clickCall?: boolean):void;
            public GetTextField():FairyGUI.GTextField;
            
        }
        class GLabel extends FairyGUI.GComponent {
            public icon: string;
            public title: string;
            public text: string;
            public editable: boolean;
            public titleColor: UnityEngine.Color;
            public titleFontSize: number;
            public color: UnityEngine.Color;
            public constructor();
            public GetTextField():FairyGUI.GTextField;
            
        }
        class GProgressBar extends FairyGUI.GComponent {
            public titleType: FairyGUI.ProgressTitleType;
            public min: number;
            public max: number;
            public value: number;
            public reverse: boolean;
            public constructor();
            public TweenValue(value: number, duration: number):FairyGUI.GTweener;
            public Update(newValue: number):void;
            
        }
        class GSlider extends FairyGUI.GComponent {
            public changeOnClick: boolean;
            public canDrag: boolean;
            public onChanged: FairyGUI.EventListener;
            public onGripTouchEnd: FairyGUI.EventListener;
            public titleType: FairyGUI.ProgressTitleType;
            public min: number;
            public max: number;
            public value: number;
            public wholeNumbers: boolean;
            public constructor();
            
        }
        class GComboBox extends FairyGUI.GComponent {
            public visibleItemCount: number;
            public dropdown: FairyGUI.GComponent;
            public onChanged: FairyGUI.EventListener;
            public icon: string;
            public title: string;
            public text: string;
            public titleColor: UnityEngine.Color;
            public titleFontSize: number;
            public items: System.Array$1<string>;
            public icons: System.Array$1<string>;
            public values: System.Array$1<string>;
            public itemList: System.Collections.Generic.List$1<string>;
            public valueList: System.Collections.Generic.List$1<string>;
            public iconList: System.Collections.Generic.List$1<string>;
            public selectedIndex: number;
            public selectionController: FairyGUI.Controller;
            public value: string;
            public popupDirection: FairyGUI.PopupDirection;
            public constructor();
            public ApplyListChange():void;
            public GetTextField():FairyGUI.GTextField;
            public UpdateDropdownList():void;
            
        }
        class GTextField extends FairyGUI.GObject {
            public text: string;
            public templateVars: System.Collections.Generic.Dictionary$2<string, string>;
            public textFormat: FairyGUI.TextFormat;
            public color: UnityEngine.Color;
            public align: FairyGUI.AlignType;
            public verticalAlign: FairyGUI.VertAlignType;
            public singleLine: boolean;
            public stroke: number;
            public strokeColor: UnityEngine.Color;
            public shadowOffset: UnityEngine.Vector2;
            public UBBEnabled: boolean;
            public autoSize: FairyGUI.AutoSizeType;
            public textWidth: number;
            public textHeight: number;
            public constructor();
            public SetVar(name: string, value: string):FairyGUI.GTextField;
            public FlushVars():void;
            public HasCharacter(ch: number):boolean;
            
        }
        class GRichTextField extends FairyGUI.GTextField {
            public richTextField: FairyGUI.RichTextField;
            public emojies: System.Collections.Generic.Dictionary$2<number, FairyGUI.Emoji>;
            public constructor();
            
        }
        class GTextInput extends FairyGUI.GTextField {
            public inputTextField: FairyGUI.InputTextField;
            public onChanged: FairyGUI.EventListener;
            public onSubmit: FairyGUI.EventListener;
            public editable: boolean;
            public hideInput: boolean;
            public maxLength: number;
            public restrict: string;
            public displayAsPassword: boolean;
            public caretPosition: number;
            public promptText: string;
            public keyboardInput: boolean;
            public keyboardType: number;
            public disableIME: boolean;
            public emojies: System.Collections.Generic.Dictionary$2<number, FairyGUI.Emoji>;
            public border: number;
            public corner: number;
            public borderColor: UnityEngine.Color;
            public backgroundColor: UnityEngine.Color;
            public mouseWheelEnabled: boolean;
            public constructor();
            public SetSelection(start: number, length: number):void;
            public ReplaceSelection(value: string):void;
            
        }
        class GLoader extends FairyGUI.GObject {
            public showErrorSign: boolean;
            public url: string;
            public icon: string;
            public align: FairyGUI.AlignType;
            public verticalAlign: FairyGUI.VertAlignType;
            public fill: FairyGUI.FillType;
            public shrinkOnly: boolean;
            public autoSize: boolean;
            public playing: boolean;
            public frame: number;
            public timeScale: number;
            public ignoreEngineTimeScale: boolean;
            public material: UnityEngine.Material;
            public shader: string;
            public color: UnityEngine.Color;
            public fillMethod: FairyGUI.FillMethod;
            public fillOrigin: number;
            public fillClockwise: boolean;
            public fillAmount: number;
            public image: FairyGUI.Image;
            public movieClip: FairyGUI.MovieClip;
            public component: FairyGUI.GComponent;
            public texture: FairyGUI.NTexture;
            public filter: FairyGUI.IFilter;
            public blendMode: FairyGUI.BlendMode;
            public constructor();
            public Advance(time: number):void;
            
        }
        class GLoader3D extends FairyGUI.GObject {
            
        }
        class GList extends FairyGUI.GComponent {
            public defaultItem: string;
            public foldInvisibleItems: boolean;
            public selectionMode: FairyGUI.ListSelectionMode;
            public itemRenderer: FairyGUI.ListItemRenderer;
            public itemProvider: FairyGUI.ListItemProvider;
            public scrollItemToViewOnClick: boolean;
            public onClickItem: FairyGUI.EventListener;
            public onRightClickItem: FairyGUI.EventListener;
            public layout: FairyGUI.ListLayoutType;
            public lineCount: number;
            public columnCount: number;
            public lineGap: number;
            public columnGap: number;
            public align: FairyGUI.AlignType;
            public verticalAlign: FairyGUI.VertAlignType;
            public autoResizeItem: boolean;
            public defaultItemSize: UnityEngine.Vector2;
            public itemPool: FairyGUI.GObjectPool;
            public selectedIndex: number;
            public selectionController: FairyGUI.Controller;
            public touchItem: FairyGUI.GObject;
            public isVirtual: boolean;
            public numItems: number;
            public constructor();
            public GetFromPool(url: string):FairyGUI.GObject;
            public AddItemFromPool():FairyGUI.GObject;
            public AddItemFromPool(url: string):FairyGUI.GObject;
            public RemoveChildToPoolAt(index: number):void;
            public RemoveChildToPool(child: FairyGUI.GObject):void;
            public RemoveChildrenToPool():void;
            public RemoveChildrenToPool(beginIndex: number, endIndex: number):void;
            public GetSelection():System.Collections.Generic.List$1<number>;
            public GetSelection(result: System.Collections.Generic.List$1<number>):System.Collections.Generic.List$1<number>;
            public AddSelection(index: number, scrollItToView: boolean):void;
            public RemoveSelection(index: number):void;
            public ClearSelection():void;
            public SelectAll():void;
            public SelectNone():void;
            public SelectReverse():void;
            public EnableSelectionFocusEvents(enabled: boolean):void;
            public EnableArrowKeyNavigation(enabled: boolean):void;
            public HandleArrowKey(dir: number):number;
            public ResizeToFit():void;
            public ResizeToFit(itemCount: number):void;
            public ResizeToFit(itemCount: number, minSize: number):void;
            public ScrollToView(index: number):void;
            public ScrollToView(index: number, ani: boolean):void;
            public ScrollToView(index: number, ani: boolean, setFirst: boolean):void;
            public ChildIndexToItemIndex(index: number):number;
            public ItemIndexToChildIndex(index: number):number;
            public SetVirtual():void;
            public SetVirtualAndLoop():void;
            public RefreshVirtualList():void;
            
        }
        class GGraph extends FairyGUI.GObject {
            public color: UnityEngine.Color;
            public shape: FairyGUI.Shape;
            public constructor();
            public ReplaceMe(target: FairyGUI.GObject):void;
            public AddBeforeMe(target: FairyGUI.GObject):void;
            public AddAfterMe(target: FairyGUI.GObject):void;
            public SetNativeObject(obj: FairyGUI.DisplayObject):void;
            public DrawRect(aWidth: number, aHeight: number, lineSize: number, lineColor: UnityEngine.Color, fillColor: UnityEngine.Color):void;
            public DrawRoundRect(aWidth: number, aHeight: number, fillColor: UnityEngine.Color, corner: System.Array$1<number>):void;
            public DrawEllipse(aWidth: number, aHeight: number, fillColor: UnityEngine.Color):void;
            public DrawPolygon(aWidth: number, aHeight: number, points: System.Collections.Generic.IList$1<UnityEngine.Vector2>, fillColor: UnityEngine.Color):void;
            public DrawPolygon(aWidth: number, aHeight: number, points: System.Collections.Generic.IList$1<UnityEngine.Vector2>, fillColor: UnityEngine.Color, lineSize: number, lineColor: UnityEngine.Color):void;
            
        }
        class GMovieClip extends FairyGUI.GObject {
            public onPlayEnd: FairyGUI.EventListener;
            public playing: boolean;
            public frame: number;
            public color: UnityEngine.Color;
            public flip: FairyGUI.FlipType;
            public material: UnityEngine.Material;
            public shader: string;
            public timeScale: number;
            public ignoreEngineTimeScale: boolean;
            public constructor();
            public Rewind():void;
            public SyncStatus(anotherMc: FairyGUI.GMovieClip):void;
            public Advance(time: number):void;
            public SetPlaySettings(start: number, end: number, times: number, endAt: number):void;
            
        }
        class GTree extends FairyGUI.GList {
            
        }
        class GTreeNode extends System.Object {
            
        }
        class GTweener extends System.Object {
            public delay: number;
            public duration: number;
            public repeat: number;
            public target: any;
            public userData: any;
            public startValue: FairyGUI.TweenValue;
            public endValue: FairyGUI.TweenValue;
            public value: FairyGUI.TweenValue;
            public deltaValue: FairyGUI.TweenValue;
            public normalizedTime: number;
            public completed: boolean;
            public allCompleted: boolean;
            public constructor();
            public SetDelay(value: number):FairyGUI.GTweener;
            public SetDuration(value: number):FairyGUI.GTweener;
            public SetBreakpoint(value: number):FairyGUI.GTweener;
            public SetEase(value: FairyGUI.EaseType):FairyGUI.GTweener;
            public SetEase(value: FairyGUI.EaseType, customEase: FairyGUI.CustomEase):FairyGUI.GTweener;
            public SetEasePeriod(value: number):FairyGUI.GTweener;
            public SetEaseOvershootOrAmplitude(value: number):FairyGUI.GTweener;
            public SetRepeat(times: number, yoyo?: boolean):FairyGUI.GTweener;
            public SetTimeScale(value: number):FairyGUI.GTweener;
            public SetIgnoreEngineTimeScale(value: boolean):FairyGUI.GTweener;
            public SetSnapping(value: boolean):FairyGUI.GTweener;
            public SetPath(value: FairyGUI.GPath):FairyGUI.GTweener;
            public SetTarget(value: any):FairyGUI.GTweener;
            public SetTarget(value: any, propType: FairyGUI.TweenPropType):FairyGUI.GTweener;
            public SetUserData(value: any):FairyGUI.GTweener;
            public OnUpdate(callback: FairyGUI.GTweenCallback):FairyGUI.GTweener;
            public OnStart(callback: FairyGUI.GTweenCallback):FairyGUI.GTweener;
            public OnComplete(callback: FairyGUI.GTweenCallback):FairyGUI.GTweener;
            public OnUpdate(callback: FairyGUI.GTweenCallback1):FairyGUI.GTweener;
            public OnStart(callback: FairyGUI.GTweenCallback1):FairyGUI.GTweener;
            public OnComplete(callback: FairyGUI.GTweenCallback1):FairyGUI.GTweener;
            public SetListener(value: FairyGUI.ITweenListener):FairyGUI.GTweener;
            public SetPaused(paused: boolean):FairyGUI.GTweener;
            public Seek(time: number):void;
            public Kill(complete?: boolean):void;
            
        }
        class Shape extends FairyGUI.DisplayObject {
            
        }
        enum GroupLayoutType { None = 0, Horizontal = 1, Vertical = 2 }
        enum FlipType { None = 0, Horizontal = 1, Vertical = 2, Both = 3 }
        enum FillMethod { None = 0, Horizontal = 1, Vertical = 2, Radial90 = 3, Radial180 = 4, Radial360 = 5 }
        enum AlignType { Left = 0, Center = 1, Right = 2 }
        enum VertAlignType { Top = 0, Middle = 1, Bottom = 2 }
        enum FillType { None = 0, Scale = 1, ScaleMatchHeight = 2, ScaleMatchWidth = 3, ScaleFree = 4, ScaleNoBorder = 5 }
        class Image extends FairyGUI.DisplayObject {
            
        }
        class MovieClip extends FairyGUI.Image {
            
        }
        class TextFormat extends System.Object {
            public size: number;
            public font: string;
            public color: UnityEngine.Color;
            public lineSpacing: number;
            public letterSpacing: number;
            public bold: boolean;
            public underline: boolean;
            public italic: boolean;
            public strikethrough: boolean;
            public gradientColor: System.Array$1<UnityEngine.Color32>;
            public align: FairyGUI.AlignType;
            public specialStyle: FairyGUI.TextFormat.SpecialStyle;
            public outline: number;
            public outlineColor: UnityEngine.Color;
            public shadowOffset: UnityEngine.Vector2;
            public shadowColor: UnityEngine.Color;
            public constructor();
            public SetColor(value: number):void;
            public EqualStyle(aFormat: FairyGUI.TextFormat):boolean;
            public CopyFrom(source: FairyGUI.TextFormat):void;
            public FillVertexColors(vertexColors: System.Array$1<UnityEngine.Color32>):void;
            
        }
        enum AutoSizeType { None = 0, Both = 1, Height = 2, Shrink = 3 }
        class RichTextField extends FairyGUI.Container {
            
        }
        class Emoji extends System.Object {
            
        }
        class InputTextField extends FairyGUI.RichTextField {
            
        }
        class ScrollPane extends FairyGUI.EventDispatcher {
            public static TWEEN_TIME_GO: number;
            public static TWEEN_TIME_DEFAULT: number;
            public static PULL_RATIO: number;
            public static draggingPane: FairyGUI.ScrollPane;
            public onScroll: FairyGUI.EventListener;
            public onScrollEnd: FairyGUI.EventListener;
            public onPullDownRelease: FairyGUI.EventListener;
            public onPullUpRelease: FairyGUI.EventListener;
            public owner: FairyGUI.GComponent;
            public hzScrollBar: FairyGUI.GScrollBar;
            public vtScrollBar: FairyGUI.GScrollBar;
            public header: FairyGUI.GComponent;
            public footer: FairyGUI.GComponent;
            public bouncebackEffect: boolean;
            public touchEffect: boolean;
            public inertiaDisabled: boolean;
            public softnessOnTopOrLeftSide: boolean;
            public scrollStep: number;
            public snapToItem: boolean;
            public pageMode: boolean;
            public pageController: FairyGUI.Controller;
            public mouseWheelEnabled: boolean;
            public decelerationRate: number;
            public isDragged: boolean;
            public percX: number;
            public percY: number;
            public posX: number;
            public posY: number;
            public isBottomMost: boolean;
            public isRightMost: boolean;
            public currentPageX: number;
            public currentPageY: number;
            public scrollingPosX: number;
            public scrollingPosY: number;
            public contentWidth: number;
            public contentHeight: number;
            public viewWidth: number;
            public viewHeight: number;
            public constructor(owner: FairyGUI.GComponent);
            public Setup(buffer: FairyGUI.Utils.ByteBuffer):void;
            public Dispose():void;
            public SetPercX(value: number, ani: boolean):void;
            public SetPercY(value: number, ani: boolean):void;
            public SetPosX(value: number, ani: boolean):void;
            public SetPosY(value: number, ani: boolean):void;
            public SetCurrentPageX(value: number, ani: boolean):void;
            public SetCurrentPageY(value: number, ani: boolean):void;
            public ScrollTop():void;
            public ScrollTop(ani: boolean):void;
            public ScrollBottom():void;
            public ScrollBottom(ani: boolean):void;
            public ScrollUp():void;
            public ScrollUp(ratio: number, ani: boolean):void;
            public ScrollDown():void;
            public ScrollDown(ratio: number, ani: boolean):void;
            public ScrollLeft():void;
            public ScrollLeft(ratio: number, ani: boolean):void;
            public ScrollRight():void;
            public ScrollRight(ratio: number, ani: boolean):void;
            public ScrollToView(obj: FairyGUI.GObject):void;
            public ScrollToView(obj: FairyGUI.GObject, ani: boolean):void;
            public ScrollToView(obj: FairyGUI.GObject, ani: boolean, setFirst: boolean):void;
            public ScrollToView(rect: UnityEngine.Rect, ani: boolean, setFirst: boolean):void;
            public IsChildInView(obj: FairyGUI.GObject):boolean;
            public CancelDragging():void;
            public LockHeader(size: number):void;
            public LockFooter(size: number):void;
            public UpdateScrollBarVisible():void;
            
        }
        enum ChildrenRenderOrder { Ascent = 0, Descent = 1, Arch = 2 }
        class Transition extends System.Object {
            public invalidateBatchingEveryFrame: boolean;
            public name: string;
            public playing: boolean;
            public timeScale: number;
            public ignoreEngineTimeScale: boolean;
            public constructor(owner: FairyGUI.GComponent);
            public Play():void;
            public Play(onComplete: FairyGUI.PlayCompleteCallback):void;
            public Play(times: number, delay: number, onComplete: FairyGUI.PlayCompleteCallback):void;
            public Play(times: number, delay: number, startTime: number, endTime: number, onComplete: FairyGUI.PlayCompleteCallback):void;
            public PlayReverse():void;
            public PlayReverse(onComplete: FairyGUI.PlayCompleteCallback):void;
            public PlayReverse(times: number, delay: number, onComplete: FairyGUI.PlayCompleteCallback):void;
            public ChangePlayTimes(value: number):void;
            public SetAutoPlay(autoPlay: boolean, times: number, delay: number):void;
            public Stop():void;
            public Stop(setToComplete: boolean, processCallback: boolean):void;
            public SetPaused(paused: boolean):void;
            public Dispose():void;
            public SetValue(label: string, ...aParams: any[]):void;
            public SetHook(label: string, callback: FairyGUI.TransitionHook):void;
            public ClearHooks():void;
            public SetTarget(label: string, newTarget: FairyGUI.GObject):void;
            public SetDuration(label: string, value: number):void;
            public GetLabelTime(label: string):number;
            public OnTweenStart(tweener: FairyGUI.GTweener):void;
            public OnTweenUpdate(tweener: FairyGUI.GTweener):void;
            public OnTweenComplete(tweener: FairyGUI.GTweener):void;
            public Setup(buffer: FairyGUI.Utils.ByteBuffer):void;
            
        }
        enum ListSelectionMode { Single = 0, Multiple = 1, Multiple_SingleClick = 2, None = 3 }
        type ListItemRenderer = (index: number, item: FairyGUI.GObject) => void;
        var ListItemRenderer: {new (func: (index: number, item: FairyGUI.GObject) => void): ListItemRenderer;}
        type ListItemProvider = (index: number) => string;
        var ListItemProvider: {new (func: (index: number) => string): ListItemProvider;}
        enum ListLayoutType { SingleColumn = 0, SingleRow = 1, FlowHorizontal = 2, FlowVertical = 3, Pagination = 4 }
        class GObjectPool extends System.Object {
            public initCallback: FairyGUI.GObjectPool.InitCallbackDelegate;
            public count: number;
            public constructor(manager: UnityEngine.Transform);
            public Clear():void;
            public GetObject(url: string):FairyGUI.GObject;
            public ReturnObject(obj: FairyGUI.GObject):void;
            
        }
        class Window extends FairyGUI.GComponent {
            public bringToFontOnClick: boolean;
            public contentPane: FairyGUI.GComponent;
            public frame: FairyGUI.GComponent;
            public closeButton: FairyGUI.GObject;
            public dragArea: FairyGUI.GObject;
            public contentArea: FairyGUI.GObject;
            public modalWaitingPane: FairyGUI.GObject;
            public isShowing: boolean;
            public isTop: boolean;
            public modal: boolean;
            public modalWaiting: boolean;
            public constructor();
            public AddUISource(source: FairyGUI.IUISource):void;
            public Show():void;
            public ShowOn(r: FairyGUI.GRoot):void;
            public Hide():void;
            public HideImmediately():void;
            public CenterOn(r: FairyGUI.GRoot, restraint: boolean):void;
            public ToggleStatus():void;
            public BringToFront():void;
            public ShowModalWait():void;
            public ShowModalWait(requestingCmd: number):void;
            public CloseModalWait():boolean;
            public CloseModalWait(requestingCmd: number):boolean;
            public Init():void;
            
        }
        enum PopupDirection { Auto = 0, Up = 1, Down = 2 }
        class NAudioClip extends System.Object {
            
        }
        enum ButtonMode { Common = 0, Check = 1, Radio = 2 }
        enum ProgressTitleType { Percent = 0, ValueAndMax = 1, Value = 2, Max = 3 }
        class PopupMenu extends FairyGUI.EventDispatcher {
            public visibleItemCount: number;
            public hideOnClickItem: boolean;
            public autoSize: boolean;
            public onPopup: FairyGUI.EventListener;
            public onClose: FairyGUI.EventListener;
            public itemCount: number;
            public contentPane: FairyGUI.GComponent;
            public list: FairyGUI.GList;
            public constructor();
            public constructor(resourceURL: string);
            public AddItem(caption: string, callback: FairyGUI.EventCallback0):FairyGUI.GButton;
            public AddItem(caption: string, callback: FairyGUI.EventCallback1):FairyGUI.GButton;
            public AddItemAt(caption: string, index: number, callback: FairyGUI.EventCallback1):FairyGUI.GButton;
            public AddItemAt(caption: string, index: number, callback: FairyGUI.EventCallback0):FairyGUI.GButton;
            public AddSeperator():void;
            public AddSeperator(index: number):void;
            public GetItemName(index: number):string;
            public SetItemText(name: string, caption: string):void;
            public SetItemVisible(name: string, visible: boolean):void;
            public SetItemGrayed(name: string, grayed: boolean):void;
            public SetItemCheckable(name: string, checkable: boolean):void;
            public SetItemChecked(name: string, check: boolean):void;
            public IsItemChecked(name: string):boolean;
            public RemoveItem(name: string):void;
            public ClearItems():void;
            public Dispose():void;
            public Show():void;
            public Show(target: FairyGUI.GObject):void;
            public Show(target: FairyGUI.GObject, dir: FairyGUI.PopupDirection):void;
            public Show(target: FairyGUI.GObject, dir: FairyGUI.PopupDirection, parentMenu: FairyGUI.PopupMenu):void;
            public Hide():void;
            
        }
        class GScrollBar extends FairyGUI.GComponent {
            
        }
        type PlayCompleteCallback = () => void;
        var PlayCompleteCallback: {new (func: () => void): PlayCompleteCallback;}
        type TransitionHook = () => void;
        var TransitionHook: {new (func: () => void): TransitionHook;}
        class UIPackage extends System.Object {
            public static unloadBundleByFGUI: boolean;
            public static URL_PREFIX: string;
            public id: string;
            public name: string;
            public static branch: string;
            public assetPath: string;
            public customId: string;
            public resBundle: UnityEngine.AssetBundle;
            public dependencies: System.Array$1<System.Collections.Generic.Dictionary$2<string, string>>;
            public constructor();
            public static add_onReleaseResource(value: System.Action$1<FairyGUI.PackageItem>):void;
            public static remove_onReleaseResource(value: System.Action$1<FairyGUI.PackageItem>):void;
            public static GetVar(key: string):string;
            public static SetVar(key: string, value: string):void;
            public static GetById(id: string):FairyGUI.UIPackage;
            public static GetByName(name: string):FairyGUI.UIPackage;
            public static AddPackage(bundle: UnityEngine.AssetBundle):FairyGUI.UIPackage;
            public static AddPackage(desc: UnityEngine.AssetBundle, res: UnityEngine.AssetBundle):FairyGUI.UIPackage;
            public static AddPackage(desc: UnityEngine.AssetBundle, res: UnityEngine.AssetBundle, mainAssetName: string):FairyGUI.UIPackage;
            public static AddPackage(descFilePath: string):FairyGUI.UIPackage;
            public static AddPackage(assetPath: string, loadFunc: FairyGUI.UIPackage.LoadResource):FairyGUI.UIPackage;
            public static AddPackage(descData: System.Array$1<number>, assetNamePrefix: string, loadFunc: FairyGUI.UIPackage.LoadResource):FairyGUI.UIPackage;
            public static AddPackage(descData: System.Array$1<number>, assetNamePrefix: string, loadFunc: FairyGUI.UIPackage.LoadResourceAsync):FairyGUI.UIPackage;
            public static RemovePackage(packageIdOrName: string):void;
            public static RemoveAllPackages():void;
            public static GetPackages():System.Collections.Generic.List$1<FairyGUI.UIPackage>;
            public static CreateObject(pkgName: string, resName: string):FairyGUI.GObject;
            public static CreateObject(pkgName: string, resName: string, userClass: System.Type):FairyGUI.GObject;
            public static CreateObjectFromURL(url: string):FairyGUI.GObject;
            public static CreateObjectFromURL(url: string, userClass: System.Type):FairyGUI.GObject;
            public static CreateObjectAsync(pkgName: string, resName: string, callback: FairyGUI.UIPackage.CreateObjectCallback):void;
            public static CreateObjectFromURL(url: string, callback: FairyGUI.UIPackage.CreateObjectCallback):void;
            public static GetItemAsset(pkgName: string, resName: string):any;
            public static GetItemAssetByURL(url: string):any;
            public static GetItemURL(pkgName: string, resName: string):string;
            public static GetItemByURL(url: string):FairyGUI.PackageItem;
            public static NormalizeURL(url: string):string;
            public static SetStringsSource(source: FairyGUI.Utils.XML):void;
            public LoadAllAssets():void;
            public UnloadAssets():void;
            public ReloadAssets():void;
            public ReloadAssets(resBundle: UnityEngine.AssetBundle):void;
            public CreateObject(resName: string):FairyGUI.GObject;
            public CreateObject(resName: string, userClass: System.Type):FairyGUI.GObject;
            public CreateObjectAsync(resName: string, callback: FairyGUI.UIPackage.CreateObjectCallback):void;
            public GetItemAsset(resName: string):any;
            public GetItems():System.Collections.Generic.List$1<FairyGUI.PackageItem>;
            public GetItem(itemId: string):FairyGUI.PackageItem;
            public GetItemByName(itemName: string):FairyGUI.PackageItem;
            public GetItemAsset(item: FairyGUI.PackageItem):any;
            public SetItemAsset(item: FairyGUI.PackageItem, asset: any, destroyMethod: FairyGUI.DestroyMethod):void;
            
        }
        enum DestroyMethod { Destroy = 0, Unload = 1, None = 2, ReleaseTemp = 3, Custom = 4 }
        interface IUISource {
            
        }
        class Timers extends System.Object {
            public static repeat: number;
            public static time: number;
            public static catchCallbackExceptions: boolean;
            public static inst: FairyGUI.Timers;
            public constructor();
            public Add(interval: number, repeat: number, callback: FairyGUI.TimerCallback):void;
            public Add(interval: number, repeat: number, callback: FairyGUI.TimerCallback, callbackParam: any):void;
            public CallLater(callback: FairyGUI.TimerCallback):void;
            public CallLater(callback: FairyGUI.TimerCallback, callbackParam: any):void;
            public AddUpdate(callback: FairyGUI.TimerCallback):void;
            public AddUpdate(callback: FairyGUI.TimerCallback, callbackParam: any):void;
            public StartCoroutine(routine: System.Collections.IEnumerator):void;
            public Exists(callback: FairyGUI.TimerCallback):boolean;
            public Remove(callback: FairyGUI.TimerCallback):void;
            public Update():void;
            
        }
        type TimerCallback = (param: any) => void;
        var TimerCallback: {new (func: (param: any) => void): TimerCallback;}
        class GTween extends System.Object {
            public static catchCallbackExceptions: boolean;
            public constructor();
            public static To(startValue: number, endValue: number, duration: number):FairyGUI.GTweener;
            public static To(startValue: UnityEngine.Vector2, endValue: UnityEngine.Vector2, duration: number):FairyGUI.GTweener;
            public static To(startValue: UnityEngine.Vector3, endValue: UnityEngine.Vector3, duration: number):FairyGUI.GTweener;
            public static To(startValue: UnityEngine.Vector4, endValue: UnityEngine.Vector4, duration: number):FairyGUI.GTweener;
            public static To(startValue: UnityEngine.Color, endValue: UnityEngine.Color, duration: number):FairyGUI.GTweener;
            public static ToDouble(startValue: number, endValue: number, duration: number):FairyGUI.GTweener;
            public static DelayedCall(delay: number):FairyGUI.GTweener;
            public static Shake(startValue: UnityEngine.Vector3, amplitude: number, duration: number):FairyGUI.GTweener;
            public static IsTweening(target: any):boolean;
            public static IsTweening(target: any, propType: FairyGUI.TweenPropType):boolean;
            public static Kill(target: any):void;
            public static Kill(target: any, complete: boolean):void;
            public static Kill(target: any, propType: FairyGUI.TweenPropType, complete: boolean):void;
            public static GetTween(target: any):FairyGUI.GTweener;
            public static GetTween(target: any, propType: FairyGUI.TweenPropType):FairyGUI.GTweener;
            public static Clean():void;
            
        }
        enum TweenPropType { None = 0, X = 1, Y = 2, Z = 3, XY = 4, Position = 5, Width = 6, Height = 7, Size = 8, ScaleX = 9, ScaleY = 10, Scale = 11, Rotation = 12, RotationX = 13, RotationY = 14, Alpha = 15, Progress = 16 }
        enum EaseType { Linear = 0, SineIn = 1, SineOut = 2, SineInOut = 3, QuadIn = 4, QuadOut = 5, QuadInOut = 6, CubicIn = 7, CubicOut = 8, CubicInOut = 9, QuartIn = 10, QuartOut = 11, QuartInOut = 12, QuintIn = 13, QuintOut = 14, QuintInOut = 15, ExpoIn = 16, ExpoOut = 17, ExpoInOut = 18, CircIn = 19, CircOut = 20, CircInOut = 21, ElasticIn = 22, ElasticOut = 23, ElasticInOut = 24, BackIn = 25, BackOut = 26, BackInOut = 27, BounceIn = 28, BounceOut = 29, BounceInOut = 30, Custom = 31 }
        class CustomEase extends System.Object {
            
        }
        class GPath extends System.Object {
            
        }
        type GTweenCallback = () => void;
        var GTweenCallback: {new (func: () => void): GTweenCallback;}
        type GTweenCallback1 = (tweener: FairyGUI.GTweener) => void;
        var GTweenCallback1: {new (func: (tweener: FairyGUI.GTweener) => void): GTweenCallback1;}
        interface ITweenListener {
            
        }
        class TweenValue extends System.Object {
            public x: number;
            public y: number;
            public z: number;
            public w: number;
            public d: number;
            public vec2: UnityEngine.Vector2;
            public vec3: UnityEngine.Vector3;
            public vec4: UnityEngine.Vector4;
            public color: UnityEngine.Color;
            public constructor();
            public get_Item(index: number):number;
            public set_Item(index: number, value: number):void;
            public SetZero():void;
            
        }
        class UIObjectFactory extends System.Object {
            public constructor();
            public static SetPackageItemExtension(url: string, type: System.Type):void;
            public static SetPackageItemExtension(url: string, creator: FairyGUI.UIObjectFactory.GComponentCreator):void;
            public static SetLoaderExtension(type: System.Type):void;
            public static SetLoaderExtension(creator: FairyGUI.UIObjectFactory.GLoaderCreator):void;
            public static Clear():void;
            public static NewObject(pi: FairyGUI.PackageItem, userClass?: System.Type):FairyGUI.GObject;
            public static NewObject(type: FairyGUI.ObjectType):FairyGUI.GObject;
            
        }
        enum ObjectType { Image = 0, MovieClip = 1, Swf = 2, Graph = 3, Loader = 4, Group = 5, Text = 6, RichText = 7, InputText = 8, Component = 9, List = 10, Label = 11, Button = 12, ComboBox = 13, ProgressBar = 14, Slider = 15, ScrollBar = 16, Tree = 17, Loader3D = 18 }
        
    }
    namespace System {
        class Object {
            public constructor();
            public Equals(obj: any):boolean;
            public static Equals(objA: any, objB: any):boolean;
            public GetHashCode():number;
            public GetType():System.Type;
            public ToString():string;
            public static ReferenceEquals(objA: any, objB: any):boolean;
            
        }
        class String extends System.Object {
            
        }
        class Void extends System.ValueType {
            
        }
        class ValueType extends System.Object {
            
        }
        class Boolean extends System.ValueType {
            
        }
        type MulticastDelegate = (...args:any[]) => any;
        var MulticastDelegate: {new (func: (...args:any[]) => any): MulticastDelegate;}
        class Delegate extends System.Object {
            public Method: System.Reflection.MethodInfo;
            public Target: any;
            public static CreateDelegate(type: System.Type, firstArgument: any, method: System.Reflection.MethodInfo, throwOnBindFailure: boolean):Function;
            public static CreateDelegate(type: System.Type, firstArgument: any, method: System.Reflection.MethodInfo):Function;
            public static CreateDelegate(type: System.Type, method: System.Reflection.MethodInfo, throwOnBindFailure: boolean):Function;
            public static CreateDelegate(type: System.Type, method: System.Reflection.MethodInfo):Function;
            public static CreateDelegate(type: System.Type, target: any, method: string):Function;
            public static CreateDelegate(type: System.Type, target: System.Type, method: string, ignoreCase: boolean, throwOnBindFailure: boolean):Function;
            public static CreateDelegate(type: System.Type, target: System.Type, method: string):Function;
            public static CreateDelegate(type: System.Type, target: System.Type, method: string, ignoreCase: boolean):Function;
            public static CreateDelegate(type: System.Type, target: any, method: string, ignoreCase: boolean, throwOnBindFailure: boolean):Function;
            public static CreateDelegate(type: System.Type, target: any, method: string, ignoreCase: boolean):Function;
            public DynamicInvoke(...args: any[]):any;
            public Clone():any;
            public GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext):void;
            public GetInvocationList():System.Array$1<Function>;
            public static Combine(a: Function, b: Function):Function;
            public static Combine(...delegates: Function[]):Function;
            public static Remove(source: Function, value: Function):Function;
            public static RemoveAll(source: Function, value: Function):Function;
            public static op_Equality(d1: Function, d2: Function):boolean;
            public static op_Inequality(d1: Function, d2: Function):boolean;
            
        }
        class Single extends System.ValueType {
            
        }
        class Enum extends System.ValueType {
            
        }
        class Char extends System.ValueType {
            
        }
        class Int32 extends System.ValueType {
            
        }
        class UInt32 extends System.ValueType {
            
        }
        type Action = () => void;
        var Action: {new (func: () => void): Action;}
        class Nullable$1<T> extends System.ValueType {
            
        }
        class Array extends System.Object {
            
        }
        class Double extends System.ValueType {
            
        }
        type Action$1<T> = (obj: T) => void;
        class Type extends System.Reflection.MemberInfo {
            public static FilterAttribute: System.Reflection.MemberFilter;
            public static FilterName: System.Reflection.MemberFilter;
            public static FilterNameIgnoreCase: System.Reflection.MemberFilter;
            public static Missing: any;
            public static Delimiter: number;
            public static EmptyTypes: System.Array$1<System.Type>;
            public MemberType: System.Reflection.MemberTypes;
            public DeclaringType: System.Type;
            public DeclaringMethod: System.Reflection.MethodBase;
            public ReflectedType: System.Type;
            public StructLayoutAttribute: System.Runtime.InteropServices.StructLayoutAttribute;
            public GUID: System.Guid;
            public static DefaultBinder: System.Reflection.Binder;
            public Module: System.Reflection.Module;
            public Assembly: System.Reflection.Assembly;
            public TypeHandle: System.RuntimeTypeHandle;
            public FullName: string;
            public Namespace: string;
            public AssemblyQualifiedName: string;
            public BaseType: System.Type;
            public TypeInitializer: System.Reflection.ConstructorInfo;
            public IsNested: boolean;
            public Attributes: System.Reflection.TypeAttributes;
            public GenericParameterAttributes: System.Reflection.GenericParameterAttributes;
            public IsVisible: boolean;
            public IsNotPublic: boolean;
            public IsPublic: boolean;
            public IsNestedPublic: boolean;
            public IsNestedPrivate: boolean;
            public IsNestedFamily: boolean;
            public IsNestedAssembly: boolean;
            public IsNestedFamANDAssem: boolean;
            public IsNestedFamORAssem: boolean;
            public IsAutoLayout: boolean;
            public IsLayoutSequential: boolean;
            public IsExplicitLayout: boolean;
            public IsClass: boolean;
            public IsInterface: boolean;
            public IsValueType: boolean;
            public IsAbstract: boolean;
            public IsSealed: boolean;
            public IsEnum: boolean;
            public IsSpecialName: boolean;
            public IsImport: boolean;
            public IsSerializable: boolean;
            public IsAnsiClass: boolean;
            public IsUnicodeClass: boolean;
            public IsAutoClass: boolean;
            public IsArray: boolean;
            public IsGenericType: boolean;
            public IsGenericTypeDefinition: boolean;
            public IsConstructedGenericType: boolean;
            public IsGenericParameter: boolean;
            public GenericParameterPosition: number;
            public ContainsGenericParameters: boolean;
            public IsByRef: boolean;
            public IsPointer: boolean;
            public IsPrimitive: boolean;
            public IsCOMObject: boolean;
            public HasElementType: boolean;
            public IsContextful: boolean;
            public IsMarshalByRef: boolean;
            public GenericTypeArguments: System.Array$1<System.Type>;
            public IsSecurityCritical: boolean;
            public IsSecuritySafeCritical: boolean;
            public IsSecurityTransparent: boolean;
            public UnderlyingSystemType: System.Type;
            public static GetType(typeName: string, assemblyResolver: System.Func$2<System.Reflection.AssemblyName, System.Reflection.Assembly>, typeResolver: System.Func$4<System.Reflection.Assembly, string, boolean, System.Type>):System.Type;
            public static GetType(typeName: string, assemblyResolver: System.Func$2<System.Reflection.AssemblyName, System.Reflection.Assembly>, typeResolver: System.Func$4<System.Reflection.Assembly, string, boolean, System.Type>, throwOnError: boolean):System.Type;
            public static GetType(typeName: string, assemblyResolver: System.Func$2<System.Reflection.AssemblyName, System.Reflection.Assembly>, typeResolver: System.Func$4<System.Reflection.Assembly, string, boolean, System.Type>, throwOnError: boolean, ignoreCase: boolean):System.Type;
            public MakePointerType():System.Type;
            public MakeByRefType():System.Type;
            public MakeArrayType():System.Type;
            public MakeArrayType(rank: number):System.Type;
            public static GetTypeFromProgID(progID: string):System.Type;
            public static GetTypeFromProgID(progID: string, throwOnError: boolean):System.Type;
            public static GetTypeFromProgID(progID: string, server: string):System.Type;
            public static GetTypeFromProgID(progID: string, server: string, throwOnError: boolean):System.Type;
            public static GetTypeFromCLSID(clsid: System.Guid):System.Type;
            public static GetTypeFromCLSID(clsid: System.Guid, throwOnError: boolean):System.Type;
            public static GetTypeFromCLSID(clsid: System.Guid, server: string):System.Type;
            public static GetTypeFromCLSID(clsid: System.Guid, server: string, throwOnError: boolean):System.Type;
            public static GetTypeCode(type: System.Type):System.TypeCode;
            public InvokeMember(name: string, invokeAttr: System.Reflection.BindingFlags, binder: System.Reflection.Binder, target: any, args: System.Array$1<any>, modifiers: System.Array$1<System.Reflection.ParameterModifier>, culture: System.Globalization.CultureInfo, namedParameters: System.Array$1<string>):any;
            public InvokeMember(name: string, invokeAttr: System.Reflection.BindingFlags, binder: System.Reflection.Binder, target: any, args: System.Array$1<any>, culture: System.Globalization.CultureInfo):any;
            public InvokeMember(name: string, invokeAttr: System.Reflection.BindingFlags, binder: System.Reflection.Binder, target: any, args: System.Array$1<any>):any;
            public static GetTypeHandle(o: any):System.RuntimeTypeHandle;
            public GetArrayRank():number;
            public GetConstructor(bindingAttr: System.Reflection.BindingFlags, binder: System.Reflection.Binder, callConvention: System.Reflection.CallingConventions, types: System.Array$1<System.Type>, modifiers: System.Array$1<System.Reflection.ParameterModifier>):System.Reflection.ConstructorInfo;
            public GetConstructor(bindingAttr: System.Reflection.BindingFlags, binder: System.Reflection.Binder, types: System.Array$1<System.Type>, modifiers: System.Array$1<System.Reflection.ParameterModifier>):System.Reflection.ConstructorInfo;
            public GetConstructor(types: System.Array$1<System.Type>):System.Reflection.ConstructorInfo;
            public GetConstructors():System.Array$1<System.Reflection.ConstructorInfo>;
            public GetConstructors(bindingAttr: System.Reflection.BindingFlags):System.Array$1<System.Reflection.ConstructorInfo>;
            public GetMethod(name: string, bindingAttr: System.Reflection.BindingFlags, binder: System.Reflection.Binder, callConvention: System.Reflection.CallingConventions, types: System.Array$1<System.Type>, modifiers: System.Array$1<System.Reflection.ParameterModifier>):System.Reflection.MethodInfo;
            public GetMethod(name: string, bindingAttr: System.Reflection.BindingFlags, binder: System.Reflection.Binder, types: System.Array$1<System.Type>, modifiers: System.Array$1<System.Reflection.ParameterModifier>):System.Reflection.MethodInfo;
            public GetMethod(name: string, types: System.Array$1<System.Type>, modifiers: System.Array$1<System.Reflection.ParameterModifier>):System.Reflection.MethodInfo;
            public GetMethod(name: string, types: System.Array$1<System.Type>):System.Reflection.MethodInfo;
            public GetMethod(name: string, bindingAttr: System.Reflection.BindingFlags):System.Reflection.MethodInfo;
            public GetMethod(name: string):System.Reflection.MethodInfo;
            public GetMethods():System.Array$1<System.Reflection.MethodInfo>;
            public GetMethods(bindingAttr: System.Reflection.BindingFlags):System.Array$1<System.Reflection.MethodInfo>;
            public GetField(name: string, bindingAttr: System.Reflection.BindingFlags):System.Reflection.FieldInfo;
            public GetField(name: string):System.Reflection.FieldInfo;
            public GetFields():System.Array$1<System.Reflection.FieldInfo>;
            public GetFields(bindingAttr: System.Reflection.BindingFlags):System.Array$1<System.Reflection.FieldInfo>;
            public GetInterface(name: string):System.Type;
            public GetInterface(name: string, ignoreCase: boolean):System.Type;
            public GetInterfaces():System.Array$1<System.Type>;
            public FindInterfaces(filter: System.Reflection.TypeFilter, filterCriteria: any):System.Array$1<System.Type>;
            public GetEvent(name: string):System.Reflection.EventInfo;
            public GetEvent(name: string, bindingAttr: System.Reflection.BindingFlags):System.Reflection.EventInfo;
            public GetEvents():System.Array$1<System.Reflection.EventInfo>;
            public GetEvents(bindingAttr: System.Reflection.BindingFlags):System.Array$1<System.Reflection.EventInfo>;
            public GetProperty(name: string, bindingAttr: System.Reflection.BindingFlags, binder: System.Reflection.Binder, returnType: System.Type, types: System.Array$1<System.Type>, modifiers: System.Array$1<System.Reflection.ParameterModifier>):System.Reflection.PropertyInfo;
            public GetProperty(name: string, returnType: System.Type, types: System.Array$1<System.Type>, modifiers: System.Array$1<System.Reflection.ParameterModifier>):System.Reflection.PropertyInfo;
            public GetProperty(name: string, bindingAttr: System.Reflection.BindingFlags):System.Reflection.PropertyInfo;
            public GetProperty(name: string, returnType: System.Type, types: System.Array$1<System.Type>):System.Reflection.PropertyInfo;
            public GetProperty(name: string, types: System.Array$1<System.Type>):System.Reflection.PropertyInfo;
            public GetProperty(name: string, returnType: System.Type):System.Reflection.PropertyInfo;
            public GetProperty(name: string):System.Reflection.PropertyInfo;
            public GetProperties(bindingAttr: System.Reflection.BindingFlags):System.Array$1<System.Reflection.PropertyInfo>;
            public GetProperties():System.Array$1<System.Reflection.PropertyInfo>;
            public GetNestedTypes():System.Array$1<System.Type>;
            public GetNestedTypes(bindingAttr: System.Reflection.BindingFlags):System.Array$1<System.Type>;
            public GetNestedType(name: string):System.Type;
            public GetNestedType(name: string, bindingAttr: System.Reflection.BindingFlags):System.Type;
            public GetMember(name: string):System.Array$1<System.Reflection.MemberInfo>;
            public GetMember(name: string, bindingAttr: System.Reflection.BindingFlags):System.Array$1<System.Reflection.MemberInfo>;
            public GetMember(name: string, type: System.Reflection.MemberTypes, bindingAttr: System.Reflection.BindingFlags):System.Array$1<System.Reflection.MemberInfo>;
            public GetMembers():System.Array$1<System.Reflection.MemberInfo>;
            public GetMembers(bindingAttr: System.Reflection.BindingFlags):System.Array$1<System.Reflection.MemberInfo>;
            public GetDefaultMembers():System.Array$1<System.Reflection.MemberInfo>;
            public FindMembers(memberType: System.Reflection.MemberTypes, bindingAttr: System.Reflection.BindingFlags, filter: System.Reflection.MemberFilter, filterCriteria: any):System.Array$1<System.Reflection.MemberInfo>;
            public GetGenericParameterConstraints():System.Array$1<System.Type>;
            public MakeGenericType(...typeArguments: System.Type[]):System.Type;
            public GetElementType():System.Type;
            public GetGenericArguments():System.Array$1<System.Type>;
            public GetGenericTypeDefinition():System.Type;
            public GetEnumNames():System.Array$1<string>;
            public GetEnumValues():System.Array;
            public GetEnumUnderlyingType():System.Type;
            public IsEnumDefined(value: any):boolean;
            public GetEnumName(value: any):string;
            public IsSubclassOf(c: System.Type):boolean;
            public IsInstanceOfType(o: any):boolean;
            public IsAssignableFrom(c: System.Type):boolean;
            public IsEquivalentTo(other: System.Type):boolean;
            public static GetTypeArray(args: System.Array$1<any>):System.Array$1<System.Type>;
            public Equals(o: any):boolean;
            public Equals(o: System.Type):boolean;
            public static op_Equality(left: System.Type, right: System.Type):boolean;
            public static op_Inequality(left: System.Type, right: System.Type):boolean;
            public GetInterfaceMap(interfaceType: System.Type):System.Reflection.InterfaceMapping;
            public GetType():System.Type;
            public static GetType(typeName: string):System.Type;
            public static GetType(typeName: string, throwOnError: boolean):System.Type;
            public static GetType(typeName: string, throwOnError: boolean, ignoreCase: boolean):System.Type;
            public static ReflectionOnlyGetType(typeName: string, throwIfNotFound: boolean, ignoreCase: boolean):System.Type;
            public static GetTypeFromHandle(handle: System.RuntimeTypeHandle):System.Type;
            public GetType():System.Type;
            
        }
        class Byte extends System.ValueType {
            
        }
        interface IAsyncResult {
            
        }
        type AsyncCallback = (ar: System.IAsyncResult) => void;
        var AsyncCallback: {new (func: (ar: System.IAsyncResult) => void): AsyncCallback;}
        class IntPtr extends System.ValueType {
            
        }
        class Exception extends System.Object {
            
        }
        type Converter$2<TInput,TOutput> = (input: TInput) => TOutput;
        type Predicate$1<T> = (obj: T) => boolean;
        type Comparison$1<T> = (x: T, y: T) => number;
        class UInt64 extends System.ValueType {
            
        }
        type Func$2<T,TResult> = (arg: T) => TResult;
        type Func$4<T1,T2,T3,TResult> = (arg1: T1, arg2: T2, arg3: T3) => TResult;
        class Attribute extends System.Object {
            
        }
        class Guid extends System.ValueType {
            
        }
        enum TypeCode { Empty = 0, Object = 1, DBNull = 2, Boolean = 3, Char = 4, SByte = 5, Byte = 6, Int16 = 7, UInt16 = 8, Int32 = 9, UInt32 = 10, Int64 = 11, UInt64 = 12, Single = 13, Double = 14, Decimal = 15, DateTime = 16, String = 18 }
        class RuntimeTypeHandle extends System.ValueType {
            
        }
        type Func$1<TResult> = () => TResult;
        class Int64 extends System.ValueType {
            
        }
        type Action$2<T1,T2> = (arg1: T1, arg2: T2) => void;
        
    }
    namespace UnityEngine {
        enum KeyCode { None = 0, Backspace = 8, Delete = 127, Tab = 9, Clear = 12, Return = 13, Pause = 19, Escape = 27, Space = 32, Keypad0 = 256, Keypad1 = 257, Keypad2 = 258, Keypad3 = 259, Keypad4 = 260, Keypad5 = 261, Keypad6 = 262, Keypad7 = 263, Keypad8 = 264, Keypad9 = 265, KeypadPeriod = 266, KeypadDivide = 267, KeypadMultiply = 268, KeypadMinus = 269, KeypadPlus = 270, KeypadEnter = 271, KeypadEquals = 272, UpArrow = 273, DownArrow = 274, RightArrow = 275, LeftArrow = 276, Insert = 277, Home = 278, End = 279, PageUp = 280, PageDown = 281, F1 = 282, F2 = 283, F3 = 284, F4 = 285, F5 = 286, F6 = 287, F7 = 288, F8 = 289, F9 = 290, F10 = 291, F11 = 292, F12 = 293, F13 = 294, F14 = 295, F15 = 296, Alpha0 = 48, Alpha1 = 49, Alpha2 = 50, Alpha3 = 51, Alpha4 = 52, Alpha5 = 53, Alpha6 = 54, Alpha7 = 55, Alpha8 = 56, Alpha9 = 57, Exclaim = 33, DoubleQuote = 34, Hash = 35, Dollar = 36, Percent = 37, Ampersand = 38, Quote = 39, LeftParen = 40, RightParen = 41, Asterisk = 42, Plus = 43, Comma = 44, Minus = 45, Period = 46, Slash = 47, Colon = 58, Semicolon = 59, Less = 60, Equals = 61, Greater = 62, Question = 63, At = 64, LeftBracket = 91, Backslash = 92, RightBracket = 93, Caret = 94, Underscore = 95, BackQuote = 96, A = 97, B = 98, C = 99, D = 100, E = 101, F = 102, G = 103, H = 104, I = 105, J = 106, K = 107, L = 108, M = 109, N = 110, O = 111, P = 112, Q = 113, R = 114, S = 115, T = 116, U = 117, V = 118, W = 119, X = 120, Y = 121, Z = 122, LeftCurlyBracket = 123, Pipe = 124, RightCurlyBracket = 125, Tilde = 126, Numlock = 300, CapsLock = 301, ScrollLock = 302, RightShift = 303, LeftShift = 304, RightControl = 305, LeftControl = 306, RightAlt = 307, LeftAlt = 308, LeftCommand = 310, LeftApple = 310, LeftWindows = 311, RightCommand = 309, RightApple = 309, RightWindows = 312, AltGr = 313, Help = 315, Print = 316, SysReq = 317, Break = 318, Menu = 319, Mouse0 = 323, Mouse1 = 324, Mouse2 = 325, Mouse3 = 326, Mouse4 = 327, Mouse5 = 328, Mouse6 = 329, JoystickButton0 = 330, JoystickButton1 = 331, JoystickButton2 = 332, JoystickButton3 = 333, JoystickButton4 = 334, JoystickButton5 = 335, JoystickButton6 = 336, JoystickButton7 = 337, JoystickButton8 = 338, JoystickButton9 = 339, JoystickButton10 = 340, JoystickButton11 = 341, JoystickButton12 = 342, JoystickButton13 = 343, JoystickButton14 = 344, JoystickButton15 = 345, JoystickButton16 = 346, JoystickButton17 = 347, JoystickButton18 = 348, JoystickButton19 = 349, Joystick1Button0 = 350, Joystick1Button1 = 351, Joystick1Button2 = 352, Joystick1Button3 = 353, Joystick1Button4 = 354, Joystick1Button5 = 355, Joystick1Button6 = 356, Joystick1Button7 = 357, Joystick1Button8 = 358, Joystick1Button9 = 359, Joystick1Button10 = 360, Joystick1Button11 = 361, Joystick1Button12 = 362, Joystick1Button13 = 363, Joystick1Button14 = 364, Joystick1Button15 = 365, Joystick1Button16 = 366, Joystick1Button17 = 367, Joystick1Button18 = 368, Joystick1Button19 = 369, Joystick2Button0 = 370, Joystick2Button1 = 371, Joystick2Button2 = 372, Joystick2Button3 = 373, Joystick2Button4 = 374, Joystick2Button5 = 375, Joystick2Button6 = 376, Joystick2Button7 = 377, Joystick2Button8 = 378, Joystick2Button9 = 379, Joystick2Button10 = 380, Joystick2Button11 = 381, Joystick2Button12 = 382, Joystick2Button13 = 383, Joystick2Button14 = 384, Joystick2Button15 = 385, Joystick2Button16 = 386, Joystick2Button17 = 387, Joystick2Button18 = 388, Joystick2Button19 = 389, Joystick3Button0 = 390, Joystick3Button1 = 391, Joystick3Button2 = 392, Joystick3Button3 = 393, Joystick3Button4 = 394, Joystick3Button5 = 395, Joystick3Button6 = 396, Joystick3Button7 = 397, Joystick3Button8 = 398, Joystick3Button9 = 399, Joystick3Button10 = 400, Joystick3Button11 = 401, Joystick3Button12 = 402, Joystick3Button13 = 403, Joystick3Button14 = 404, Joystick3Button15 = 405, Joystick3Button16 = 406, Joystick3Button17 = 407, Joystick3Button18 = 408, Joystick3Button19 = 409, Joystick4Button0 = 410, Joystick4Button1 = 411, Joystick4Button2 = 412, Joystick4Button3 = 413, Joystick4Button4 = 414, Joystick4Button5 = 415, Joystick4Button6 = 416, Joystick4Button7 = 417, Joystick4Button8 = 418, Joystick4Button9 = 419, Joystick4Button10 = 420, Joystick4Button11 = 421, Joystick4Button12 = 422, Joystick4Button13 = 423, Joystick4Button14 = 424, Joystick4Button15 = 425, Joystick4Button16 = 426, Joystick4Button17 = 427, Joystick4Button18 = 428, Joystick4Button19 = 429, Joystick5Button0 = 430, Joystick5Button1 = 431, Joystick5Button2 = 432, Joystick5Button3 = 433, Joystick5Button4 = 434, Joystick5Button5 = 435, Joystick5Button6 = 436, Joystick5Button7 = 437, Joystick5Button8 = 438, Joystick5Button9 = 439, Joystick5Button10 = 440, Joystick5Button11 = 441, Joystick5Button12 = 442, Joystick5Button13 = 443, Joystick5Button14 = 444, Joystick5Button15 = 445, Joystick5Button16 = 446, Joystick5Button17 = 447, Joystick5Button18 = 448, Joystick5Button19 = 449, Joystick6Button0 = 450, Joystick6Button1 = 451, Joystick6Button2 = 452, Joystick6Button3 = 453, Joystick6Button4 = 454, Joystick6Button5 = 455, Joystick6Button6 = 456, Joystick6Button7 = 457, Joystick6Button8 = 458, Joystick6Button9 = 459, Joystick6Button10 = 460, Joystick6Button11 = 461, Joystick6Button12 = 462, Joystick6Button13 = 463, Joystick6Button14 = 464, Joystick6Button15 = 465, Joystick6Button16 = 466, Joystick6Button17 = 467, Joystick6Button18 = 468, Joystick6Button19 = 469, Joystick7Button0 = 470, Joystick7Button1 = 471, Joystick7Button2 = 472, Joystick7Button3 = 473, Joystick7Button4 = 474, Joystick7Button5 = 475, Joystick7Button6 = 476, Joystick7Button7 = 477, Joystick7Button8 = 478, Joystick7Button9 = 479, Joystick7Button10 = 480, Joystick7Button11 = 481, Joystick7Button12 = 482, Joystick7Button13 = 483, Joystick7Button14 = 484, Joystick7Button15 = 485, Joystick7Button16 = 486, Joystick7Button17 = 487, Joystick7Button18 = 488, Joystick7Button19 = 489, Joystick8Button0 = 490, Joystick8Button1 = 491, Joystick8Button2 = 492, Joystick8Button3 = 493, Joystick8Button4 = 494, Joystick8Button5 = 495, Joystick8Button6 = 496, Joystick8Button7 = 497, Joystick8Button8 = 498, Joystick8Button9 = 499, Joystick8Button10 = 500, Joystick8Button11 = 501, Joystick8Button12 = 502, Joystick8Button13 = 503, Joystick8Button14 = 504, Joystick8Button15 = 505, Joystick8Button16 = 506, Joystick8Button17 = 507, Joystick8Button18 = 508, Joystick8Button19 = 509 }
        enum EventModifiers { None = 0, Shift = 1, Control = 2, Alt = 4, Command = 8, Numeric = 16, CapsLock = 32, FunctionKey = 64 }
        class Vector2 extends System.ValueType {
            
        }
        class GameObject extends UnityEngine.Object {
            public transform: UnityEngine.Transform;
            public layer: number;
            public activeSelf: boolean;
            public activeInHierarchy: boolean;
            public isStatic: boolean;
            public tag: string;
            public scene: UnityEngine.SceneManagement.Scene;
            public sceneCullingMask: bigint;
            public gameObject: UnityEngine.GameObject;
            public constructor(name: string);
            public constructor();
            public constructor(name: string, ...components: System.Type[]);
            public static CreatePrimitive(type: UnityEngine.PrimitiveType):UnityEngine.GameObject;
            public GetComponent(type: System.Type):UnityEngine.Component;
            public GetComponent(type: string):UnityEngine.Component;
            public GetComponentInChildren(type: System.Type, includeInactive: boolean):UnityEngine.Component;
            public GetComponentInChildren(type: System.Type):UnityEngine.Component;
            public GetComponentInParent(type: System.Type):UnityEngine.Component;
            public GetComponents(type: System.Type):System.Array$1<UnityEngine.Component>;
            public GetComponents(type: System.Type, results: System.Collections.Generic.List$1<UnityEngine.Component>):void;
            public GetComponentsInChildren(type: System.Type):System.Array$1<UnityEngine.Component>;
            public GetComponentsInChildren(type: System.Type, includeInactive: boolean):System.Array$1<UnityEngine.Component>;
            public GetComponentsInParent(type: System.Type):System.Array$1<UnityEngine.Component>;
            public GetComponentsInParent(type: System.Type, includeInactive: boolean):System.Array$1<UnityEngine.Component>;
            public TryGetComponent(type: System.Type, component: $Ref<UnityEngine.Component>):boolean;
            public static FindWithTag(tag: string):UnityEngine.GameObject;
            public SendMessageUpwards(methodName: string, options: UnityEngine.SendMessageOptions):void;
            public SendMessage(methodName: string, options: UnityEngine.SendMessageOptions):void;
            public BroadcastMessage(methodName: string, options: UnityEngine.SendMessageOptions):void;
            public AddComponent(componentType: System.Type):UnityEngine.Component;
            public SetActive(value: boolean):void;
            public CompareTag(tag: string):boolean;
            public static FindGameObjectWithTag(tag: string):UnityEngine.GameObject;
            public static FindGameObjectsWithTag(tag: string):System.Array$1<UnityEngine.GameObject>;
            public SendMessageUpwards(methodName: string, value: any, options: UnityEngine.SendMessageOptions):void;
            public SendMessageUpwards(methodName: string, value: any):void;
            public SendMessageUpwards(methodName: string):void;
            public SendMessage(methodName: string, value: any, options: UnityEngine.SendMessageOptions):void;
            public SendMessage(methodName: string, value: any):void;
            public SendMessage(methodName: string):void;
            public BroadcastMessage(methodName: string, parameter: any, options: UnityEngine.SendMessageOptions):void;
            public BroadcastMessage(methodName: string, parameter: any):void;
            public BroadcastMessage(methodName: string):void;
            public static Find(name: string):UnityEngine.GameObject;
            
        }
        class Object extends System.Object {
            public name: string;
            public hideFlags: UnityEngine.HideFlags;
            public constructor();
            public GetInstanceID():number;
            public static op_Implicit(exists: UnityEngine.Object):boolean;
            public static Instantiate(original: UnityEngine.Object, position: UnityEngine.Vector3, rotation: UnityEngine.Quaternion):UnityEngine.Object;
            public static Instantiate(original: UnityEngine.Object, position: UnityEngine.Vector3, rotation: UnityEngine.Quaternion, parent: UnityEngine.Transform):UnityEngine.Object;
            public static Instantiate(original: UnityEngine.Object):UnityEngine.Object;
            public static Instantiate(original: UnityEngine.Object, parent: UnityEngine.Transform):UnityEngine.Object;
            public static Instantiate(original: UnityEngine.Object, parent: UnityEngine.Transform, instantiateInWorldSpace: boolean):UnityEngine.Object;
            public static Instantiate(original: UnityEngine.Object):UnityEngine.Object;
            public static Instantiate(original: UnityEngine.Object, position: UnityEngine.Vector3, rotation: UnityEngine.Quaternion):UnityEngine.Object;
            public static Instantiate(original: UnityEngine.Object, position: UnityEngine.Vector3, rotation: UnityEngine.Quaternion, parent: UnityEngine.Transform):UnityEngine.Object;
            public static Instantiate(original: UnityEngine.Object, parent: UnityEngine.Transform):UnityEngine.Object;
            public static Instantiate(original: UnityEngine.Object, parent: UnityEngine.Transform, worldPositionStays: boolean):UnityEngine.Object;
            public static Destroy(obj: UnityEngine.Object, t: number):void;
            public static Destroy(obj: UnityEngine.Object):void;
            public static DestroyImmediate(obj: UnityEngine.Object, allowDestroyingAssets: boolean):void;
            public static DestroyImmediate(obj: UnityEngine.Object):void;
            public static FindObjectsOfType(type: System.Type):System.Array$1<UnityEngine.Object>;
            public static DontDestroyOnLoad(target: UnityEngine.Object):void;
            public static FindObjectOfType(type: System.Type):UnityEngine.Object;
            public static op_Equality(x: UnityEngine.Object, y: UnityEngine.Object):boolean;
            public static op_Inequality(x: UnityEngine.Object, y: UnityEngine.Object):boolean;
            
        }
        class Transform extends UnityEngine.Component {
            public position: UnityEngine.Vector3;
            public localPosition: UnityEngine.Vector3;
            public eulerAngles: UnityEngine.Vector3;
            public localEulerAngles: UnityEngine.Vector3;
            public right: UnityEngine.Vector3;
            public up: UnityEngine.Vector3;
            public forward: UnityEngine.Vector3;
            public rotation: UnityEngine.Quaternion;
            public localRotation: UnityEngine.Quaternion;
            public localScale: UnityEngine.Vector3;
            public parent: UnityEngine.Transform;
            public worldToLocalMatrix: UnityEngine.Matrix4x4;
            public localToWorldMatrix: UnityEngine.Matrix4x4;
            public root: UnityEngine.Transform;
            public childCount: number;
            public lossyScale: UnityEngine.Vector3;
            public hasChanged: boolean;
            public hierarchyCapacity: number;
            public hierarchyCount: number;
            public SetParent(p: UnityEngine.Transform):void;
            public SetParent(parent: UnityEngine.Transform, worldPositionStays: boolean):void;
            public SetPositionAndRotation(position: UnityEngine.Vector3, rotation: UnityEngine.Quaternion):void;
            public Translate(translation: UnityEngine.Vector3, relativeTo: UnityEngine.Space):void;
            public Translate(translation: UnityEngine.Vector3):void;
            public Translate(x: number, y: number, z: number, relativeTo: UnityEngine.Space):void;
            public Translate(x: number, y: number, z: number):void;
            public Translate(translation: UnityEngine.Vector3, relativeTo: UnityEngine.Transform):void;
            public Translate(x: number, y: number, z: number, relativeTo: UnityEngine.Transform):void;
            public Rotate(eulers: UnityEngine.Vector3, relativeTo: UnityEngine.Space):void;
            public Rotate(eulers: UnityEngine.Vector3):void;
            public Rotate(xAngle: number, yAngle: number, zAngle: number, relativeTo: UnityEngine.Space):void;
            public Rotate(xAngle: number, yAngle: number, zAngle: number):void;
            public Rotate(axis: UnityEngine.Vector3, angle: number, relativeTo: UnityEngine.Space):void;
            public Rotate(axis: UnityEngine.Vector3, angle: number):void;
            public RotateAround(point: UnityEngine.Vector3, axis: UnityEngine.Vector3, angle: number):void;
            public LookAt(target: UnityEngine.Transform, worldUp: UnityEngine.Vector3):void;
            public LookAt(target: UnityEngine.Transform):void;
            public LookAt(worldPosition: UnityEngine.Vector3, worldUp: UnityEngine.Vector3):void;
            public LookAt(worldPosition: UnityEngine.Vector3):void;
            public TransformDirection(direction: UnityEngine.Vector3):UnityEngine.Vector3;
            public TransformDirection(x: number, y: number, z: number):UnityEngine.Vector3;
            public InverseTransformDirection(direction: UnityEngine.Vector3):UnityEngine.Vector3;
            public InverseTransformDirection(x: number, y: number, z: number):UnityEngine.Vector3;
            public TransformVector(vector: UnityEngine.Vector3):UnityEngine.Vector3;
            public TransformVector(x: number, y: number, z: number):UnityEngine.Vector3;
            public InverseTransformVector(vector: UnityEngine.Vector3):UnityEngine.Vector3;
            public InverseTransformVector(x: number, y: number, z: number):UnityEngine.Vector3;
            public TransformPoint(position: UnityEngine.Vector3):UnityEngine.Vector3;
            public TransformPoint(x: number, y: number, z: number):UnityEngine.Vector3;
            public InverseTransformPoint(position: UnityEngine.Vector3):UnityEngine.Vector3;
            public InverseTransformPoint(x: number, y: number, z: number):UnityEngine.Vector3;
            public DetachChildren():void;
            public SetAsFirstSibling():void;
            public SetAsLastSibling():void;
            public SetSiblingIndex(index: number):void;
            public GetSiblingIndex():number;
            public Find(n: string):UnityEngine.Transform;
            public IsChildOf(parent: UnityEngine.Transform):boolean;
            public GetEnumerator():System.Collections.IEnumerator;
            public GetChild(index: number):UnityEngine.Transform;
            
        }
        class Component extends UnityEngine.Object {
            public transform: UnityEngine.Transform;
            public gameObject: UnityEngine.GameObject;
            public tag: string;
            public constructor();
            public GetComponent(type: System.Type):UnityEngine.Component;
            public TryGetComponent(type: System.Type, component: $Ref<UnityEngine.Component>):boolean;
            public GetComponent(type: string):UnityEngine.Component;
            public GetComponentInChildren(t: System.Type, includeInactive: boolean):UnityEngine.Component;
            public GetComponentInChildren(t: System.Type):UnityEngine.Component;
            public GetComponentsInChildren(t: System.Type, includeInactive: boolean):System.Array$1<UnityEngine.Component>;
            public GetComponentsInChildren(t: System.Type):System.Array$1<UnityEngine.Component>;
            public GetComponentInParent(t: System.Type):UnityEngine.Component;
            public GetComponentsInParent(t: System.Type, includeInactive: boolean):System.Array$1<UnityEngine.Component>;
            public GetComponentsInParent(t: System.Type):System.Array$1<UnityEngine.Component>;
            public GetComponents(type: System.Type):System.Array$1<UnityEngine.Component>;
            public GetComponents(type: System.Type, results: System.Collections.Generic.List$1<UnityEngine.Component>):void;
            public CompareTag(tag: string):boolean;
            public SendMessageUpwards(methodName: string, value: any, options: UnityEngine.SendMessageOptions):void;
            public SendMessageUpwards(methodName: string, value: any):void;
            public SendMessageUpwards(methodName: string):void;
            public SendMessageUpwards(methodName: string, options: UnityEngine.SendMessageOptions):void;
            public SendMessage(methodName: string, value: any):void;
            public SendMessage(methodName: string):void;
            public SendMessage(methodName: string, value: any, options: UnityEngine.SendMessageOptions):void;
            public SendMessage(methodName: string, options: UnityEngine.SendMessageOptions):void;
            public BroadcastMessage(methodName: string, parameter: any, options: UnityEngine.SendMessageOptions):void;
            public BroadcastMessage(methodName: string, parameter: any):void;
            public BroadcastMessage(methodName: string):void;
            public BroadcastMessage(methodName: string, options: UnityEngine.SendMessageOptions):void;
            
        }
        class Vector3 extends System.ValueType {
            public static kEpsilon: number;
            public static kEpsilonNormalSqrt: number;
            public x: number;
            public y: number;
            public z: number;
            public normalized: UnityEngine.Vector3;
            public magnitude: number;
            public sqrMagnitude: number;
            public static zero: UnityEngine.Vector3;
            public static one: UnityEngine.Vector3;
            public static forward: UnityEngine.Vector3;
            public static back: UnityEngine.Vector3;
            public static up: UnityEngine.Vector3;
            public static down: UnityEngine.Vector3;
            public static left: UnityEngine.Vector3;
            public static right: UnityEngine.Vector3;
            public static positiveInfinity: UnityEngine.Vector3;
            public static negativeInfinity: UnityEngine.Vector3;
            public constructor(x: number, y: number, z: number);
            public constructor(x: number, y: number);
            public static Slerp(a: UnityEngine.Vector3, b: UnityEngine.Vector3, t: number):UnityEngine.Vector3;
            public static SlerpUnclamped(a: UnityEngine.Vector3, b: UnityEngine.Vector3, t: number):UnityEngine.Vector3;
            public static OrthoNormalize(normal: $Ref<UnityEngine.Vector3>, tangent: $Ref<UnityEngine.Vector3>):void;
            public static OrthoNormalize(normal: $Ref<UnityEngine.Vector3>, tangent: $Ref<UnityEngine.Vector3>, binormal: $Ref<UnityEngine.Vector3>):void;
            public static RotateTowards(current: UnityEngine.Vector3, target: UnityEngine.Vector3, maxRadiansDelta: number, maxMagnitudeDelta: number):UnityEngine.Vector3;
            public static Lerp(a: UnityEngine.Vector3, b: UnityEngine.Vector3, t: number):UnityEngine.Vector3;
            public static LerpUnclamped(a: UnityEngine.Vector3, b: UnityEngine.Vector3, t: number):UnityEngine.Vector3;
            public static MoveTowards(current: UnityEngine.Vector3, target: UnityEngine.Vector3, maxDistanceDelta: number):UnityEngine.Vector3;
            public static SmoothDamp(current: UnityEngine.Vector3, target: UnityEngine.Vector3, currentVelocity: $Ref<UnityEngine.Vector3>, smoothTime: number, maxSpeed: number):UnityEngine.Vector3;
            public static SmoothDamp(current: UnityEngine.Vector3, target: UnityEngine.Vector3, currentVelocity: $Ref<UnityEngine.Vector3>, smoothTime: number):UnityEngine.Vector3;
            public static SmoothDamp(current: UnityEngine.Vector3, target: UnityEngine.Vector3, currentVelocity: $Ref<UnityEngine.Vector3>, smoothTime: number, maxSpeed: number, deltaTime: number):UnityEngine.Vector3;
            public get_Item(index: number):number;
            public set_Item(index: number, value: number):void;
            public Set(newX: number, newY: number, newZ: number):void;
            public static Scale(a: UnityEngine.Vector3, b: UnityEngine.Vector3):UnityEngine.Vector3;
            public Scale(scale: UnityEngine.Vector3):void;
            public static Cross(lhs: UnityEngine.Vector3, rhs: UnityEngine.Vector3):UnityEngine.Vector3;
            public Equals(other: any):boolean;
            public Equals(other: UnityEngine.Vector3):boolean;
            public static Reflect(inDirection: UnityEngine.Vector3, inNormal: UnityEngine.Vector3):UnityEngine.Vector3;
            public static Normalize(value: UnityEngine.Vector3):UnityEngine.Vector3;
            public Normalize():void;
            public static Dot(lhs: UnityEngine.Vector3, rhs: UnityEngine.Vector3):number;
            public static Project(vector: UnityEngine.Vector3, onNormal: UnityEngine.Vector3):UnityEngine.Vector3;
            public static ProjectOnPlane(vector: UnityEngine.Vector3, planeNormal: UnityEngine.Vector3):UnityEngine.Vector3;
            public static Angle(from: UnityEngine.Vector3, to: UnityEngine.Vector3):number;
            public static SignedAngle(from: UnityEngine.Vector3, to: UnityEngine.Vector3, axis: UnityEngine.Vector3):number;
            public static Distance(a: UnityEngine.Vector3, b: UnityEngine.Vector3):number;
            public static ClampMagnitude(vector: UnityEngine.Vector3, maxLength: number):UnityEngine.Vector3;
            public static Magnitude(vector: UnityEngine.Vector3):number;
            public static SqrMagnitude(vector: UnityEngine.Vector3):number;
            public static Min(lhs: UnityEngine.Vector3, rhs: UnityEngine.Vector3):UnityEngine.Vector3;
            public static Max(lhs: UnityEngine.Vector3, rhs: UnityEngine.Vector3):UnityEngine.Vector3;
            public static op_Addition(a: UnityEngine.Vector3, b: UnityEngine.Vector3):UnityEngine.Vector3;
            public static op_Subtraction(a: UnityEngine.Vector3, b: UnityEngine.Vector3):UnityEngine.Vector3;
            public static op_UnaryNegation(a: UnityEngine.Vector3):UnityEngine.Vector3;
            public static op_Multiply(a: UnityEngine.Vector3, d: number):UnityEngine.Vector3;
            public static op_Multiply(d: number, a: UnityEngine.Vector3):UnityEngine.Vector3;
            public static op_Division(a: UnityEngine.Vector3, d: number):UnityEngine.Vector3;
            public static op_Equality(lhs: UnityEngine.Vector3, rhs: UnityEngine.Vector3):boolean;
            public static op_Inequality(lhs: UnityEngine.Vector3, rhs: UnityEngine.Vector3):boolean;
            public ToString():string;
            public ToString(format: string):string;
            
        }
        class Material extends UnityEngine.Object {
            
        }
        class Texture2D extends UnityEngine.Texture {
            
        }
        class Texture extends UnityEngine.Object {
            
        }
        class Rect extends System.ValueType {
            
        }
        enum RenderMode { ScreenSpaceOverlay = 0, ScreenSpaceCamera = 1, WorldSpace = 2 }
        class Camera extends UnityEngine.Behaviour {
            
        }
        class Behaviour extends UnityEngine.Component {
            public enabled: boolean;
            public isActiveAndEnabled: boolean;
            public constructor();
            
        }
        class Vector4 extends System.ValueType {
            
        }
        class AudioClip extends UnityEngine.Object {
            
        }
        class RaycastHit extends System.ValueType {
            
        }
        class Color extends System.ValueType {
            
        }
        class Color32 extends System.ValueType {
            
        }
        class AssetBundle extends UnityEngine.Object {
            
        }
        class Debug extends System.Object {
            public static unityLogger: UnityEngine.ILogger;
            public static developerConsoleVisible: boolean;
            public static isDebugBuild: boolean;
            public constructor();
            public static DrawLine(start: UnityEngine.Vector3, end: UnityEngine.Vector3, color: UnityEngine.Color, duration: number):void;
            public static DrawLine(start: UnityEngine.Vector3, end: UnityEngine.Vector3, color: UnityEngine.Color):void;
            public static DrawLine(start: UnityEngine.Vector3, end: UnityEngine.Vector3):void;
            public static DrawLine(start: UnityEngine.Vector3, end: UnityEngine.Vector3, color: UnityEngine.Color, duration: number, depthTest: boolean):void;
            public static DrawRay(start: UnityEngine.Vector3, dir: UnityEngine.Vector3, color: UnityEngine.Color, duration: number):void;
            public static DrawRay(start: UnityEngine.Vector3, dir: UnityEngine.Vector3, color: UnityEngine.Color):void;
            public static DrawRay(start: UnityEngine.Vector3, dir: UnityEngine.Vector3):void;
            public static DrawRay(start: UnityEngine.Vector3, dir: UnityEngine.Vector3, color: UnityEngine.Color, duration: number, depthTest: boolean):void;
            public static Break():void;
            public static DebugBreak():void;
            public static Log(message: any):void;
            public static Log(message: any, context: UnityEngine.Object):void;
            public static LogFormat(format: string, ...args: any[]):void;
            public static LogFormat(context: UnityEngine.Object, format: string, ...args: any[]):void;
            public static LogFormat(logType: UnityEngine.LogType, logOptions: UnityEngine.LogOption, context: UnityEngine.Object, format: string, ...args: any[]):void;
            public static LogError(message: any):void;
            public static LogError(message: any, context: UnityEngine.Object):void;
            public static LogErrorFormat(format: string, ...args: any[]):void;
            public static LogErrorFormat(context: UnityEngine.Object, format: string, ...args: any[]):void;
            public static ClearDeveloperConsole():void;
            public static LogException(exception: System.Exception):void;
            public static LogException(exception: System.Exception, context: UnityEngine.Object):void;
            public static LogWarning(message: any):void;
            public static LogWarning(message: any, context: UnityEngine.Object):void;
            public static LogWarningFormat(format: string, ...args: any[]):void;
            public static LogWarningFormat(context: UnityEngine.Object, format: string, ...args: any[]):void;
            public static Assert(condition: boolean):void;
            public static Assert(condition: boolean, context: UnityEngine.Object):void;
            public static Assert(condition: boolean, message: any):void;
            public static Assert(condition: boolean, message: string):void;
            public static Assert(condition: boolean, message: any, context: UnityEngine.Object):void;
            public static Assert(condition: boolean, message: string, context: UnityEngine.Object):void;
            public static AssertFormat(condition: boolean, format: string, ...args: any[]):void;
            public static AssertFormat(condition: boolean, context: UnityEngine.Object, format: string, ...args: any[]):void;
            public static LogAssertion(message: any):void;
            public static LogAssertion(message: any, context: UnityEngine.Object):void;
            public static LogAssertionFormat(format: string, ...args: any[]):void;
            public static LogAssertionFormat(context: UnityEngine.Object, format: string, ...args: any[]):void;
            
        }
        interface ILogger {
            
        }
        enum LogType { Error = 0, Assert = 1, Warning = 2, Log = 3, Exception = 4 }
        enum LogOption { None = 0, NoStacktrace = 1 }
        class Time extends System.Object {
            public static time: number;
            public static timeSinceLevelLoad: number;
            public static deltaTime: number;
            public static fixedTime: number;
            public static unscaledTime: number;
            public static fixedUnscaledTime: number;
            public static unscaledDeltaTime: number;
            public static fixedUnscaledDeltaTime: number;
            public static fixedDeltaTime: number;
            public static maximumDeltaTime: number;
            public static smoothDeltaTime: number;
            public static maximumParticleDeltaTime: number;
            public static timeScale: number;
            public static frameCount: number;
            public static renderedFrameCount: number;
            public static realtimeSinceStartup: number;
            public static captureDeltaTime: number;
            public static captureFramerate: number;
            public static inFixedTimeStep: boolean;
            public constructor();
            
        }
        class Quaternion extends System.ValueType {
            
        }
        class Matrix4x4 extends System.ValueType {
            
        }
        enum Space { World = 0, Self = 1 }
        enum SendMessageOptions { RequireReceiver = 0, DontRequireReceiver = 1 }
        enum PrimitiveType { Sphere = 0, Capsule = 1, Cylinder = 2, Cube = 3, Plane = 4, Quad = 5 }
        enum HideFlags { None = 0, HideInHierarchy = 1, HideInInspector = 2, DontSaveInEditor = 4, NotEditable = 8, DontSaveInBuild = 16, DontUnloadUnusedAsset = 32, DontSave = 52, HideAndDontSave = 61 }
        class ParticleSystem extends UnityEngine.Component {
            public isPlaying: boolean;
            public isEmitting: boolean;
            public isStopped: boolean;
            public isPaused: boolean;
            public particleCount: number;
            public time: number;
            public randomSeed: number;
            public useAutoRandomSeed: boolean;
            public proceduralSimulationSupported: boolean;
            public main: UnityEngine.ParticleSystem.MainModule;
            public emission: UnityEngine.ParticleSystem.EmissionModule;
            public shape: UnityEngine.ParticleSystem.ShapeModule;
            public velocityOverLifetime: UnityEngine.ParticleSystem.VelocityOverLifetimeModule;
            public limitVelocityOverLifetime: UnityEngine.ParticleSystem.LimitVelocityOverLifetimeModule;
            public inheritVelocity: UnityEngine.ParticleSystem.InheritVelocityModule;
            public forceOverLifetime: UnityEngine.ParticleSystem.ForceOverLifetimeModule;
            public colorOverLifetime: UnityEngine.ParticleSystem.ColorOverLifetimeModule;
            public colorBySpeed: UnityEngine.ParticleSystem.ColorBySpeedModule;
            public sizeOverLifetime: UnityEngine.ParticleSystem.SizeOverLifetimeModule;
            public sizeBySpeed: UnityEngine.ParticleSystem.SizeBySpeedModule;
            public rotationOverLifetime: UnityEngine.ParticleSystem.RotationOverLifetimeModule;
            public rotationBySpeed: UnityEngine.ParticleSystem.RotationBySpeedModule;
            public externalForces: UnityEngine.ParticleSystem.ExternalForcesModule;
            public noise: UnityEngine.ParticleSystem.NoiseModule;
            public collision: UnityEngine.ParticleSystem.CollisionModule;
            public trigger: UnityEngine.ParticleSystem.TriggerModule;
            public subEmitters: UnityEngine.ParticleSystem.SubEmittersModule;
            public textureSheetAnimation: UnityEngine.ParticleSystem.TextureSheetAnimationModule;
            public lights: UnityEngine.ParticleSystem.LightsModule;
            public trails: UnityEngine.ParticleSystem.TrailModule;
            public customData: UnityEngine.ParticleSystem.CustomDataModule;
            public constructor();
            public SetParticles(particles: System.Array$1<UnityEngine.ParticleSystem.Particle>, size: number, offset: number):void;
            public SetParticles(particles: System.Array$1<UnityEngine.ParticleSystem.Particle>, size: number):void;
            public SetParticles(particles: System.Array$1<UnityEngine.ParticleSystem.Particle>):void;
            public SetParticles(particles: Unity.Collections.NativeArray$1<UnityEngine.ParticleSystem.Particle>, size: number, offset: number):void;
            public SetParticles(particles: Unity.Collections.NativeArray$1<UnityEngine.ParticleSystem.Particle>, size: number):void;
            public SetParticles(particles: Unity.Collections.NativeArray$1<UnityEngine.ParticleSystem.Particle>):void;
            public GetParticles(particles: System.Array$1<UnityEngine.ParticleSystem.Particle>, size: number, offset: number):number;
            public GetParticles(particles: System.Array$1<UnityEngine.ParticleSystem.Particle>, size: number):number;
            public GetParticles(particles: System.Array$1<UnityEngine.ParticleSystem.Particle>):number;
            public GetParticles(particles: Unity.Collections.NativeArray$1<UnityEngine.ParticleSystem.Particle>, size: number, offset: number):number;
            public GetParticles(particles: Unity.Collections.NativeArray$1<UnityEngine.ParticleSystem.Particle>, size: number):number;
            public GetParticles(particles: Unity.Collections.NativeArray$1<UnityEngine.ParticleSystem.Particle>):number;
            public SetCustomParticleData(customData: System.Collections.Generic.List$1<UnityEngine.Vector4>, streamIndex: UnityEngine.ParticleSystemCustomData):void;
            public GetCustomParticleData(customData: System.Collections.Generic.List$1<UnityEngine.Vector4>, streamIndex: UnityEngine.ParticleSystemCustomData):number;
            public GetPlaybackState():UnityEngine.ParticleSystem.PlaybackState;
            public SetPlaybackState(playbackState: UnityEngine.ParticleSystem.PlaybackState):void;
            public GetTrails():UnityEngine.ParticleSystem.Trails;
            public SetTrails(trailData: UnityEngine.ParticleSystem.Trails):void;
            public Simulate(t: number, withChildren: boolean, restart: boolean, fixedTimeStep: boolean):void;
            public Simulate(t: number, withChildren: boolean, restart: boolean):void;
            public Simulate(t: number, withChildren: boolean):void;
            public Simulate(t: number):void;
            public Play(withChildren: boolean):void;
            public Play():void;
            public Pause(withChildren: boolean):void;
            public Pause():void;
            public Stop(withChildren: boolean, stopBehavior: UnityEngine.ParticleSystemStopBehavior):void;
            public Stop(withChildren: boolean):void;
            public Stop():void;
            public Clear(withChildren: boolean):void;
            public Clear():void;
            public IsAlive(withChildren: boolean):boolean;
            public IsAlive():boolean;
            public Emit(count: number):void;
            public Emit(emitParams: UnityEngine.ParticleSystem.EmitParams, count: number):void;
            public TriggerSubEmitter(subEmitterIndex: number):void;
            public TriggerSubEmitter(subEmitterIndex: number, particle: $Ref<UnityEngine.ParticleSystem.Particle>):void;
            public TriggerSubEmitter(subEmitterIndex: number, particles: System.Collections.Generic.List$1<UnityEngine.ParticleSystem.Particle>):void;
            public static ResetPreMappedBufferMemory():void;
            
        }
        enum ParticleSystemSimulationSpace { Local = 0, World = 1, Custom = 2 }
        enum ParticleSystemScalingMode { Hierarchy = 0, Local = 1, Shape = 2 }
        enum ParticleSystemCustomData { Custom1 = 0, Custom2 = 1 }
        enum ParticleSystemStopBehavior { StopEmittingAndClear = 0, StopEmitting = 1 }
        class Canvas extends UnityEngine.Behaviour {
            public renderMode: UnityEngine.RenderMode;
            public isRootCanvas: boolean;
            public pixelRect: UnityEngine.Rect;
            public scaleFactor: number;
            public referencePixelsPerUnit: number;
            public overridePixelPerfect: boolean;
            public pixelPerfect: boolean;
            public planeDistance: number;
            public renderOrder: number;
            public overrideSorting: boolean;
            public sortingOrder: number;
            public targetDisplay: number;
            public sortingLayerID: number;
            public cachedSortingLayerValue: number;
            public additionalShaderChannels: UnityEngine.AdditionalCanvasShaderChannels;
            public sortingLayerName: string;
            public rootCanvas: UnityEngine.Canvas;
            public worldCamera: UnityEngine.Camera;
            public normalizedSortingGridSize: number;
            public constructor();
            public static add_willRenderCanvases(value: UnityEngine.Canvas.WillRenderCanvases):void;
            public static remove_willRenderCanvases(value: UnityEngine.Canvas.WillRenderCanvases):void;
            public static GetDefaultCanvasMaterial():UnityEngine.Material;
            public static GetETC1SupportedCanvasMaterial():UnityEngine.Material;
            public static ForceUpdateCanvases():void;
            
        }
        enum AdditionalCanvasShaderChannels { None = 0, TexCoord1 = 1, TexCoord2 = 2, TexCoord3 = 4, Normal = 8, Tangent = 16 }
        class MonoBehaviour extends UnityEngine.Behaviour {
            public useGUILayout: boolean;
            public constructor();
            public IsInvoking():boolean;
            public CancelInvoke():void;
            public Invoke(methodName: string, time: number):void;
            public InvokeRepeating(methodName: string, time: number, repeatRate: number):void;
            public CancelInvoke(methodName: string):void;
            public IsInvoking(methodName: string):boolean;
            public StartCoroutine(methodName: string):UnityEngine.Coroutine;
            public StartCoroutine(methodName: string, value: any):UnityEngine.Coroutine;
            public StartCoroutine(routine: System.Collections.IEnumerator):UnityEngine.Coroutine;
            public StopCoroutine(routine: System.Collections.IEnumerator):void;
            public StopCoroutine(routine: UnityEngine.Coroutine):void;
            public StopCoroutine(methodName: string):void;
            public StopAllCoroutines():void;
            public static print(message: any):void;
            
        }
        class Coroutine extends UnityEngine.YieldInstruction {
            
        }
        class YieldInstruction extends System.Object {
            
        }
        class Animator extends UnityEngine.Behaviour {
            
        }
        class TouchScreenKeyboard extends System.Object {
            
        }
        enum TouchScreenKeyboardType { Default = 0, ASCIICapable = 1, NumbersAndPunctuation = 2, URL = 3, NumberPad = 4, PhonePad = 5, NamePhonePad = 6, EmailAddress = 7, NintendoNetworkAccount = 8, Social = 9, Search = 10, DecimalPad = 11 }
        class Event extends System.Object {
            
        }
        class Application extends System.Object {
            public static isPlaying: boolean;
            public static isFocused: boolean;
            public static buildGUID: string;
            public static runInBackground: boolean;
            public static isBatchMode: boolean;
            public static dataPath: string;
            public static streamingAssetsPath: string;
            public static persistentDataPath: string;
            public static temporaryCachePath: string;
            public static absoluteURL: string;
            public static unityVersion: string;
            public static version: string;
            public static installerName: string;
            public static identifier: string;
            public static installMode: UnityEngine.ApplicationInstallMode;
            public static sandboxType: UnityEngine.ApplicationSandboxType;
            public static productName: string;
            public static companyName: string;
            public static cloudProjectId: string;
            public static targetFrameRate: number;
            public static consoleLogPath: string;
            public static backgroundLoadingPriority: UnityEngine.ThreadPriority;
            public static genuine: boolean;
            public static genuineCheckAvailable: boolean;
            public static platform: UnityEngine.RuntimePlatform;
            public static isMobilePlatform: boolean;
            public static isConsolePlatform: boolean;
            public static systemLanguage: UnityEngine.SystemLanguage;
            public static internetReachability: UnityEngine.NetworkReachability;
            public static isEditor: boolean;
            public constructor();
            public static Quit(exitCode: number):void;
            public static Quit():void;
            public static Unload():void;
            public static CanStreamedLevelBeLoaded(levelIndex: number):boolean;
            public static CanStreamedLevelBeLoaded(levelName: string):boolean;
            public static IsPlaying(obj: UnityEngine.Object):boolean;
            public static GetBuildTags():System.Array$1<string>;
            public static SetBuildTags(buildTags: System.Array$1<string>):void;
            public static HasProLicense():boolean;
            public static RequestAdvertisingIdentifierAsync(delegateMethod: UnityEngine.Application.AdvertisingIdentifierCallback):boolean;
            public static OpenURL(url: string):void;
            public static GetStackTraceLogType(logType: UnityEngine.LogType):UnityEngine.StackTraceLogType;
            public static SetStackTraceLogType(logType: UnityEngine.LogType, stackTraceType: UnityEngine.StackTraceLogType):void;
            public static RequestUserAuthorization(mode: UnityEngine.UserAuthorization):UnityEngine.AsyncOperation;
            public static HasUserAuthorization(mode: UnityEngine.UserAuthorization):boolean;
            public static add_lowMemory(value: UnityEngine.Application.LowMemoryCallback):void;
            public static remove_lowMemory(value: UnityEngine.Application.LowMemoryCallback):void;
            public static add_logMessageReceived(value: UnityEngine.Application.LogCallback):void;
            public static remove_logMessageReceived(value: UnityEngine.Application.LogCallback):void;
            public static add_logMessageReceivedThreaded(value: UnityEngine.Application.LogCallback):void;
            public static remove_logMessageReceivedThreaded(value: UnityEngine.Application.LogCallback):void;
            public static add_onBeforeRender(value: UnityEngine.Events.UnityAction):void;
            public static remove_onBeforeRender(value: UnityEngine.Events.UnityAction):void;
            public static add_focusChanged(value: System.Action$1<boolean>):void;
            public static remove_focusChanged(value: System.Action$1<boolean>):void;
            public static add_deepLinkActivated(value: System.Action$1<string>):void;
            public static remove_deepLinkActivated(value: System.Action$1<string>):void;
            public static add_wantsToQuit(value: System.Func$1<boolean>):void;
            public static remove_wantsToQuit(value: System.Func$1<boolean>):void;
            public static add_quitting(value: System.Action):void;
            public static remove_quitting(value: System.Action):void;
            
        }
        enum ApplicationInstallMode { Unknown = 0, Store = 1, DeveloperBuild = 2, Adhoc = 3, Enterprise = 4, Editor = 5 }
        enum ApplicationSandboxType { Unknown = 0, NotSandboxed = 1, Sandboxed = 2, SandboxBroken = 3 }
        enum StackTraceLogType { None = 0, ScriptOnly = 1, Full = 2 }
        enum ThreadPriority { Low = 0, BelowNormal = 1, Normal = 2, High = 4 }
        class AsyncOperation extends UnityEngine.YieldInstruction {
            public isDone: boolean;
            public progress: number;
            public priority: number;
            public allowSceneActivation: boolean;
            public constructor();
            public add_completed(value: System.Action$1<UnityEngine.AsyncOperation>):void;
            public remove_completed(value: System.Action$1<UnityEngine.AsyncOperation>):void;
            
        }
        enum UserAuthorization { WebCam = 1, Microphone = 2 }
        enum RuntimePlatform { OSXEditor = 0, OSXPlayer = 1, WindowsPlayer = 2, OSXWebPlayer = 3, OSXDashboardPlayer = 4, WindowsWebPlayer = 5, WindowsEditor = 7, IPhonePlayer = 8, XBOX360 = 10, PS3 = 9, Android = 11, NaCl = 12, FlashPlayer = 15, LinuxPlayer = 13, LinuxEditor = 16, WebGLPlayer = 17, MetroPlayerX86 = 18, WSAPlayerX86 = 18, MetroPlayerX64 = 19, WSAPlayerX64 = 19, MetroPlayerARM = 20, WSAPlayerARM = 20, WP8Player = 21, BB10Player = 22, BlackBerryPlayer = 22, TizenPlayer = 23, PSP2 = 24, PS4 = 25, PSM = 26, XboxOne = 27, SamsungTVPlayer = 28, WiiU = 30, tvOS = 31, Switch = 32, Lumin = 33, Stadia = 34, CloudRendering = 35 }
        enum SystemLanguage { Afrikaans = 0, Arabic = 1, Basque = 2, Belarusian = 3, Bulgarian = 4, Catalan = 5, Chinese = 6, Czech = 7, Danish = 8, Dutch = 9, English = 10, Estonian = 11, Faroese = 12, Finnish = 13, French = 14, German = 15, Greek = 16, Hebrew = 17, Hugarian = 18, Icelandic = 19, Indonesian = 20, Italian = 21, Japanese = 22, Korean = 23, Latvian = 24, Lithuanian = 25, Norwegian = 26, Polish = 27, Portuguese = 28, Romanian = 29, Russian = 30, SerboCroatian = 31, Slovak = 32, Slovenian = 33, Spanish = 34, Swedish = 35, Thai = 36, Turkish = 37, Ukrainian = 38, Vietnamese = 39, ChineseSimplified = 40, ChineseTraditional = 41, Unknown = 42, Hungarian = 18 }
        enum NetworkReachability { NotReachable = 0, ReachableViaCarrierDataNetwork = 1, ReachableViaLocalAreaNetwork = 2 }
        class TextAsset extends UnityEngine.Object {
            public text: string;
            public bytes: System.Array$1<number>;
            public constructor();
            public constructor(text: string);
            
        }
        class Sprite extends UnityEngine.Object {
            
        }
        
    }
    namespace System.Collections.Generic {
        interface IList$1<T> {
            
        }
        interface IEnumerator$1<T> {
            
        }
        class Dictionary$2<TKey,TValue> extends System.Object {
            
        }
        class List$1<T> extends System.Object {
            public Capacity: number;
            public Count: number;
            public constructor();
            public constructor(capacity: number);
            public constructor(collection: System.Collections.Generic.IEnumerable$1<T>);
            public get_Item(index: number):T;
            public set_Item(index: number, value: T):void;
            public Add(item: T):void;
            public AddRange(collection: System.Collections.Generic.IEnumerable$1<T>):void;
            public AsReadOnly():System.Collections.ObjectModel.ReadOnlyCollection$1<T>;
            public BinarySearch(index: number, count: number, item: T, comparer: System.Collections.Generic.IComparer$1<T>):number;
            public BinarySearch(item: T):number;
            public BinarySearch(item: T, comparer: System.Collections.Generic.IComparer$1<T>):number;
            public Clear():void;
            public Contains(item: T):boolean;
            public CopyTo(array: System.Array$1<T>):void;
            public CopyTo(index: number, array: System.Array$1<T>, arrayIndex: number, count: number):void;
            public CopyTo(array: System.Array$1<T>, arrayIndex: number):void;
            public Exists(match: System.Predicate$1<T>):boolean;
            public Find(match: System.Predicate$1<T>):T;
            public FindAll(match: System.Predicate$1<T>):System.Collections.Generic.List$1<T>;
            public FindIndex(match: System.Predicate$1<T>):number;
            public FindIndex(startIndex: number, match: System.Predicate$1<T>):number;
            public FindIndex(startIndex: number, count: number, match: System.Predicate$1<T>):number;
            public FindLast(match: System.Predicate$1<T>):T;
            public FindLastIndex(match: System.Predicate$1<T>):number;
            public FindLastIndex(startIndex: number, match: System.Predicate$1<T>):number;
            public FindLastIndex(startIndex: number, count: number, match: System.Predicate$1<T>):number;
            public ForEach(action: System.Action$1<T>):void;
            public GetEnumerator():System.Collections.Generic.List$1.Enumerator<T>;
            public GetRange(index: number, count: number):System.Collections.Generic.List$1<T>;
            public IndexOf(item: T):number;
            public IndexOf(item: T, index: number):number;
            public IndexOf(item: T, index: number, count: number):number;
            public Insert(index: number, item: T):void;
            public InsertRange(index: number, collection: System.Collections.Generic.IEnumerable$1<T>):void;
            public LastIndexOf(item: T):number;
            public LastIndexOf(item: T, index: number):number;
            public LastIndexOf(item: T, index: number, count: number):number;
            public Remove(item: T):boolean;
            public RemoveAll(match: System.Predicate$1<T>):number;
            public RemoveAt(index: number):void;
            public RemoveRange(index: number, count: number):void;
            public Reverse():void;
            public Reverse(index: number, count: number):void;
            public Sort():void;
            public Sort(comparer: System.Collections.Generic.IComparer$1<T>):void;
            public Sort(index: number, count: number, comparer: System.Collections.Generic.IComparer$1<T>):void;
            public Sort(comparison: System.Comparison$1<T>):void;
            public ToArray():System.Array$1<T>;
            public TrimExcess():void;
            public TrueForAll(match: System.Predicate$1<T>):boolean;
            
        }
        interface IEnumerable$1<T> {
            
        }
        interface IComparer$1<T> {
            
        }
        
    }
    namespace FairyGUI.Utils {
        class ByteBuffer extends System.Object {
            
        }
        class XML extends System.Object {
            
        }
        
    }
    namespace FairyGUI.TextFormat {
        enum SpecialStyle { None = 0, Superscript = 1, Subscript = 2 }
        
    }
    namespace FairyGUI.UIContentScaler {
        enum ScreenMatchMode { MatchWidthOrHeight = 0, MatchWidth = 1, MatchHeight = 2 }
        
    }
    namespace FairyGUI.UIPackage {
        type LoadResource = (name: string, extension: string, type: System.Type, destroyMethod: $Ref<FairyGUI.DestroyMethod>) => any;
        var LoadResource: {new (func: (name: string, extension: string, type: System.Type, destroyMethod: $Ref<FairyGUI.DestroyMethod>) => any): LoadResource;}
        type LoadResourceAsync = (name: string, extension: string, type: System.Type, item: FairyGUI.PackageItem) => void;
        var LoadResourceAsync: {new (func: (name: string, extension: string, type: System.Type, item: FairyGUI.PackageItem) => void): LoadResourceAsync;}
        type CreateObjectCallback = (result: FairyGUI.GObject) => void;
        var CreateObjectCallback: {new (func: (result: FairyGUI.GObject) => void): CreateObjectCallback;}
        
    }
    namespace System.Reflection {
        class MemberInfo extends System.Object {
            
        }
        class MethodInfo extends System.Reflection.MethodBase {
            
        }
        class MethodBase extends System.Reflection.MemberInfo {
            
        }
        type MemberFilter = (m: System.Reflection.MemberInfo, filterCriteria: any) => boolean;
        var MemberFilter: {new (func: (m: System.Reflection.MemberInfo, filterCriteria: any) => boolean): MemberFilter;}
        enum MemberTypes { Constructor = 1, Event = 2, Field = 4, Method = 8, Property = 16, TypeInfo = 32, Custom = 64, NestedType = 128, All = 191 }
        class AssemblyName extends System.Object {
            
        }
        class Assembly extends System.Object {
            
        }
        class Binder extends System.Object {
            
        }
        enum BindingFlags { Default = 0, IgnoreCase = 1, DeclaredOnly = 2, Instance = 4, Static = 8, Public = 16, NonPublic = 32, FlattenHierarchy = 64, InvokeMethod = 256, CreateInstance = 512, GetField = 1024, SetField = 2048, GetProperty = 4096, SetProperty = 8192, PutDispProperty = 16384, PutRefDispProperty = 32768, ExactBinding = 65536, SuppressChangeType = 131072, OptionalParamBinding = 262144, IgnoreReturn = 16777216 }
        class ParameterModifier extends System.ValueType {
            
        }
        class Module extends System.Object {
            
        }
        class ConstructorInfo extends System.Reflection.MethodBase {
            
        }
        enum CallingConventions { Standard = 1, VarArgs = 2, Any = 3, HasThis = 32, ExplicitThis = 64 }
        class FieldInfo extends System.Reflection.MemberInfo {
            
        }
        type TypeFilter = (m: System.Type, filterCriteria: any) => boolean;
        var TypeFilter: {new (func: (m: System.Type, filterCriteria: any) => boolean): TypeFilter;}
        class EventInfo extends System.Reflection.MemberInfo {
            
        }
        class PropertyInfo extends System.Reflection.MemberInfo {
            
        }
        enum TypeAttributes { VisibilityMask = 7, NotPublic = 0, Public = 1, NestedPublic = 2, NestedPrivate = 3, NestedFamily = 4, NestedAssembly = 5, NestedFamANDAssem = 6, NestedFamORAssem = 7, LayoutMask = 24, AutoLayout = 0, SequentialLayout = 8, ExplicitLayout = 16, ClassSemanticsMask = 32, Class = 0, Interface = 32, Abstract = 128, Sealed = 256, SpecialName = 1024, Import = 4096, Serializable = 8192, WindowsRuntime = 16384, StringFormatMask = 196608, AnsiClass = 0, UnicodeClass = 65536, AutoClass = 131072, CustomFormatClass = 196608, CustomFormatMask = 12582912, BeforeFieldInit = 1048576, ReservedMask = 264192, RTSpecialName = 2048, HasSecurity = 262144 }
        enum GenericParameterAttributes { None = 0, VarianceMask = 3, Covariant = 1, Contravariant = 2, SpecialConstraintMask = 28, ReferenceTypeConstraint = 4, NotNullableValueTypeConstraint = 8, DefaultConstructorConstraint = 16 }
        class InterfaceMapping extends System.ValueType {
            
        }
        
    }
    namespace FairyGUI.GObjectPool {
        type InitCallbackDelegate = (obj: FairyGUI.GObject) => void;
        var InitCallbackDelegate: {new (func: (obj: FairyGUI.GObject) => void): InitCallbackDelegate;}
        
    }
    namespace System.Collections {
        interface IEnumerator {
            
        }
        
    }
    namespace FairyGUI.UIObjectFactory {
        type GComponentCreator = () => FairyGUI.GComponent;
        var GComponentCreator: {new (func: () => FairyGUI.GComponent): GComponentCreator;}
        type GLoaderCreator = () => FairyGUI.GLoader;
        var GLoaderCreator: {new (func: () => FairyGUI.GLoader): GLoaderCreator;}
        
    }
    namespace System.Collections.ObjectModel {
        class ReadOnlyCollection$1<T> extends System.Object {
            
        }
        
    }
    namespace System.Collections.Generic.List$1 {
        class Enumerator<T> extends System.ValueType {
            
        }
        
    }
    namespace UnityEngine.SceneManagement {
        class Scene extends System.ValueType {
            public handle: number;
            public path: string;
            public name: string;
            public isLoaded: boolean;
            public buildIndex: number;
            public isDirty: boolean;
            public rootCount: number;
            public isSubScene: boolean;
            public IsValid():boolean;
            public GetRootGameObjects():System.Array$1<UnityEngine.GameObject>;
            public GetRootGameObjects(rootGameObjects: System.Collections.Generic.List$1<UnityEngine.GameObject>):void;
            public static op_Equality(lhs: UnityEngine.SceneManagement.Scene, rhs: UnityEngine.SceneManagement.Scene):boolean;
            public static op_Inequality(lhs: UnityEngine.SceneManagement.Scene, rhs: UnityEngine.SceneManagement.Scene):boolean;
            
        }
        class SceneManager extends System.Object {
            public static sceneCount: number;
            public static sceneCountInBuildSettings: number;
            public constructor();
            public static GetActiveScene():UnityEngine.SceneManagement.Scene;
            public static SetActiveScene(scene: UnityEngine.SceneManagement.Scene):boolean;
            public static GetSceneByPath(scenePath: string):UnityEngine.SceneManagement.Scene;
            public static GetSceneByName(name: string):UnityEngine.SceneManagement.Scene;
            public static GetSceneByBuildIndex(buildIndex: number):UnityEngine.SceneManagement.Scene;
            public static GetSceneAt(index: number):UnityEngine.SceneManagement.Scene;
            public static CreateScene(sceneName: string, parameters: UnityEngine.SceneManagement.CreateSceneParameters):UnityEngine.SceneManagement.Scene;
            public static MergeScenes(sourceScene: UnityEngine.SceneManagement.Scene, destinationScene: UnityEngine.SceneManagement.Scene):void;
            public static MoveGameObjectToScene(go: UnityEngine.GameObject, scene: UnityEngine.SceneManagement.Scene):void;
            public static add_sceneLoaded(value: UnityEngine.Events.UnityAction$2<UnityEngine.SceneManagement.Scene, UnityEngine.SceneManagement.LoadSceneMode>):void;
            public static remove_sceneLoaded(value: UnityEngine.Events.UnityAction$2<UnityEngine.SceneManagement.Scene, UnityEngine.SceneManagement.LoadSceneMode>):void;
            public static add_sceneUnloaded(value: UnityEngine.Events.UnityAction$1<UnityEngine.SceneManagement.Scene>):void;
            public static remove_sceneUnloaded(value: UnityEngine.Events.UnityAction$1<UnityEngine.SceneManagement.Scene>):void;
            public static add_activeSceneChanged(value: UnityEngine.Events.UnityAction$2<UnityEngine.SceneManagement.Scene, UnityEngine.SceneManagement.Scene>):void;
            public static remove_activeSceneChanged(value: UnityEngine.Events.UnityAction$2<UnityEngine.SceneManagement.Scene, UnityEngine.SceneManagement.Scene>):void;
            public static CreateScene(sceneName: string):UnityEngine.SceneManagement.Scene;
            public static LoadScene(sceneName: string, mode: UnityEngine.SceneManagement.LoadSceneMode):void;
            public static LoadScene(sceneName: string):void;
            public static LoadScene(sceneName: string, parameters: UnityEngine.SceneManagement.LoadSceneParameters):UnityEngine.SceneManagement.Scene;
            public static LoadScene(sceneBuildIndex: number, mode: UnityEngine.SceneManagement.LoadSceneMode):void;
            public static LoadScene(sceneBuildIndex: number):void;
            public static LoadScene(sceneBuildIndex: number, parameters: UnityEngine.SceneManagement.LoadSceneParameters):UnityEngine.SceneManagement.Scene;
            public static LoadSceneAsync(sceneBuildIndex: number, mode: UnityEngine.SceneManagement.LoadSceneMode):UnityEngine.AsyncOperation;
            public static LoadSceneAsync(sceneBuildIndex: number):UnityEngine.AsyncOperation;
            public static LoadSceneAsync(sceneBuildIndex: number, parameters: UnityEngine.SceneManagement.LoadSceneParameters):UnityEngine.AsyncOperation;
            public static LoadSceneAsync(sceneName: string, mode: UnityEngine.SceneManagement.LoadSceneMode):UnityEngine.AsyncOperation;
            public static LoadSceneAsync(sceneName: string):UnityEngine.AsyncOperation;
            public static LoadSceneAsync(sceneName: string, parameters: UnityEngine.SceneManagement.LoadSceneParameters):UnityEngine.AsyncOperation;
            public static UnloadSceneAsync(sceneBuildIndex: number):UnityEngine.AsyncOperation;
            public static UnloadSceneAsync(sceneName: string):UnityEngine.AsyncOperation;
            public static UnloadSceneAsync(scene: UnityEngine.SceneManagement.Scene):UnityEngine.AsyncOperation;
            public static UnloadSceneAsync(sceneBuildIndex: number, options: UnityEngine.SceneManagement.UnloadSceneOptions):UnityEngine.AsyncOperation;
            public static UnloadSceneAsync(sceneName: string, options: UnityEngine.SceneManagement.UnloadSceneOptions):UnityEngine.AsyncOperation;
            public static UnloadSceneAsync(scene: UnityEngine.SceneManagement.Scene, options: UnityEngine.SceneManagement.UnloadSceneOptions):UnityEngine.AsyncOperation;
            
        }
        class CreateSceneParameters extends System.ValueType {
            
        }
        enum LoadSceneMode { Single = 0, Additive = 1 }
        class LoadSceneParameters extends System.ValueType {
            
        }
        enum UnloadSceneOptions { None = 0, UnloadAllEmbeddedSceneObjects = 1 }
        
    }
    namespace System.Runtime.Serialization {
        class SerializationInfo extends System.Object {
            
        }
        class StreamingContext extends System.ValueType {
            
        }
        
    }
    namespace System.Runtime.InteropServices {
        class StructLayoutAttribute extends System.Attribute {
            
        }
        
    }
    namespace System.Globalization {
        class CultureInfo extends System.Object {
            
        }
        
    }
    namespace UnityEngine.ParticleSystem {
        class Particle extends System.ValueType {
            
        }
        class PlaybackState extends System.ValueType {
            
        }
        class Trails extends System.ValueType {
            
        }
        class EmitParams extends System.ValueType {
            
        }
        class MainModule extends System.ValueType {
            
        }
        class EmissionModule extends System.ValueType {
            
        }
        class ShapeModule extends System.ValueType {
            
        }
        class VelocityOverLifetimeModule extends System.ValueType {
            
        }
        class LimitVelocityOverLifetimeModule extends System.ValueType {
            
        }
        class InheritVelocityModule extends System.ValueType {
            
        }
        class ForceOverLifetimeModule extends System.ValueType {
            
        }
        class ColorOverLifetimeModule extends System.ValueType {
            
        }
        class ColorBySpeedModule extends System.ValueType {
            
        }
        class SizeOverLifetimeModule extends System.ValueType {
            
        }
        class SizeBySpeedModule extends System.ValueType {
            
        }
        class RotationOverLifetimeModule extends System.ValueType {
            
        }
        class RotationBySpeedModule extends System.ValueType {
            
        }
        class ExternalForcesModule extends System.ValueType {
            
        }
        class NoiseModule extends System.ValueType {
            
        }
        class CollisionModule extends System.ValueType {
            
        }
        class TriggerModule extends System.ValueType {
            
        }
        class SubEmittersModule extends System.ValueType {
            
        }
        class TextureSheetAnimationModule extends System.ValueType {
            
        }
        class LightsModule extends System.ValueType {
            
        }
        class TrailModule extends System.ValueType {
            
        }
        class CustomDataModule extends System.ValueType {
            
        }
        
    }
    namespace Unity.Collections {
        class NativeArray$1<T> extends System.ValueType {
            
        }
        
    }
    namespace UnityEngine.Canvas {
        type WillRenderCanvases = () => void;
        var WillRenderCanvases: {new (func: () => void): WillRenderCanvases;}
        
    }
    namespace UnityEngine.EventSystems {
        class UIBehaviour extends UnityEngine.MonoBehaviour {
            public IsActive():boolean;
            public IsDestroyed():boolean;
            
        }
        class AxisEventData extends UnityEngine.EventSystems.BaseEventData {
            
        }
        class BaseEventData extends UnityEngine.EventSystems.AbstractEventData {
            
        }
        class AbstractEventData extends System.Object {
            
        }
        class PointerEventData extends UnityEngine.EventSystems.BaseEventData {
            
        }
        
    }
    namespace UnityEngine.UI {
        class Selectable extends UnityEngine.EventSystems.UIBehaviour {
            public static allSelectablesArray: System.Array$1<UnityEngine.UI.Selectable>;
            public static allSelectableCount: number;
            public navigation: UnityEngine.UI.Navigation;
            public transition: UnityEngine.UI.Selectable.Transition;
            public colors: UnityEngine.UI.ColorBlock;
            public spriteState: UnityEngine.UI.SpriteState;
            public animationTriggers: UnityEngine.UI.AnimationTriggers;
            public targetGraphic: UnityEngine.UI.Graphic;
            public interactable: boolean;
            public image: UnityEngine.UI.Image;
            public animator: UnityEngine.Animator;
            public static AllSelectablesNoAlloc(selectables: System.Array$1<UnityEngine.UI.Selectable>):number;
            public IsInteractable():boolean;
            public FindSelectable(dir: UnityEngine.Vector3):UnityEngine.UI.Selectable;
            public FindSelectableOnLeft():UnityEngine.UI.Selectable;
            public FindSelectableOnRight():UnityEngine.UI.Selectable;
            public FindSelectableOnUp():UnityEngine.UI.Selectable;
            public FindSelectableOnDown():UnityEngine.UI.Selectable;
            public OnMove(eventData: UnityEngine.EventSystems.AxisEventData):void;
            public OnPointerDown(eventData: UnityEngine.EventSystems.PointerEventData):void;
            public OnPointerUp(eventData: UnityEngine.EventSystems.PointerEventData):void;
            public OnPointerEnter(eventData: UnityEngine.EventSystems.PointerEventData):void;
            public OnPointerExit(eventData: UnityEngine.EventSystems.PointerEventData):void;
            public OnSelect(eventData: UnityEngine.EventSystems.BaseEventData):void;
            public OnDeselect(eventData: UnityEngine.EventSystems.BaseEventData):void;
            public Select():void;
            
        }
        class Navigation extends System.ValueType {
            
        }
        class ColorBlock extends System.ValueType {
            
        }
        class SpriteState extends System.ValueType {
            
        }
        class AnimationTriggers extends System.Object {
            
        }
        class Graphic extends UnityEngine.EventSystems.UIBehaviour {
            
        }
        class Image extends UnityEngine.UI.MaskableGraphic {
            
        }
        class MaskableGraphic extends UnityEngine.UI.Graphic {
            
        }
        class Button extends UnityEngine.UI.Selectable {
            public onClick: UnityEngine.UI.Button.ButtonClickedEvent;
            public OnPointerClick(eventData: UnityEngine.EventSystems.PointerEventData):void;
            public OnSubmit(eventData: UnityEngine.EventSystems.BaseEventData):void;
            
        }
        class InputField extends UnityEngine.UI.Selectable {
            public shouldHideMobileInput: boolean;
            public text: string;
            public isFocused: boolean;
            public caretBlinkRate: number;
            public caretWidth: number;
            public textComponent: UnityEngine.UI.Text;
            public placeholder: UnityEngine.UI.Graphic;
            public caretColor: UnityEngine.Color;
            public customCaretColor: boolean;
            public selectionColor: UnityEngine.Color;
            public onEndEdit: UnityEngine.UI.InputField.SubmitEvent;
            public onValueChanged: UnityEngine.UI.InputField.OnChangeEvent;
            public onValidateInput: UnityEngine.UI.InputField.OnValidateInput;
            public characterLimit: number;
            public contentType: UnityEngine.UI.InputField.ContentType;
            public lineType: UnityEngine.UI.InputField.LineType;
            public inputType: UnityEngine.UI.InputField.InputType;
            public touchScreenKeyboard: UnityEngine.TouchScreenKeyboard;
            public keyboardType: UnityEngine.TouchScreenKeyboardType;
            public characterValidation: UnityEngine.UI.InputField.CharacterValidation;
            public readOnly: boolean;
            public multiLine: boolean;
            public asteriskChar: number;
            public wasCanceled: boolean;
            public caretPosition: number;
            public selectionAnchorPosition: number;
            public selectionFocusPosition: number;
            public minWidth: number;
            public preferredWidth: number;
            public flexibleWidth: number;
            public minHeight: number;
            public preferredHeight: number;
            public flexibleHeight: number;
            public layoutPriority: number;
            public SetTextWithoutNotify(input: string):void;
            public MoveTextEnd(shift: boolean):void;
            public MoveTextStart(shift: boolean):void;
            public OnBeginDrag(eventData: UnityEngine.EventSystems.PointerEventData):void;
            public OnDrag(eventData: UnityEngine.EventSystems.PointerEventData):void;
            public OnEndDrag(eventData: UnityEngine.EventSystems.PointerEventData):void;
            public ProcessEvent(e: UnityEngine.Event):void;
            public OnUpdateSelected(eventData: UnityEngine.EventSystems.BaseEventData):void;
            public ForceLabelUpdate():void;
            public Rebuild(update: UnityEngine.UI.CanvasUpdate):void;
            public LayoutComplete():void;
            public GraphicUpdateComplete():void;
            public ActivateInputField():void;
            public OnPointerClick(eventData: UnityEngine.EventSystems.PointerEventData):void;
            public DeactivateInputField():void;
            public OnSubmit(eventData: UnityEngine.EventSystems.BaseEventData):void;
            public CalculateLayoutInputHorizontal():void;
            public CalculateLayoutInputVertical():void;
            
        }
        class Text extends UnityEngine.UI.MaskableGraphic {
            
        }
        enum CanvasUpdate { Prelayout = 0, Layout = 1, PostLayout = 2, PreRender = 3, LatePreRender = 4, MaxUpdateValue = 5 }
        class Toggle extends UnityEngine.UI.Selectable {
            public toggleTransition: UnityEngine.UI.Toggle.ToggleTransition;
            public graphic: UnityEngine.UI.Graphic;
            public onValueChanged: UnityEngine.UI.Toggle.ToggleEvent;
            public group: UnityEngine.UI.ToggleGroup;
            public isOn: boolean;
            public Rebuild(executing: UnityEngine.UI.CanvasUpdate):void;
            public LayoutComplete():void;
            public GraphicUpdateComplete():void;
            public SetIsOnWithoutNotify(value: boolean):void;
            public OnPointerClick(eventData: UnityEngine.EventSystems.PointerEventData):void;
            public OnSubmit(eventData: UnityEngine.EventSystems.BaseEventData):void;
            
        }
        class ToggleGroup extends UnityEngine.EventSystems.UIBehaviour {
            
        }
        
    }
    namespace UnityEngine.UI.Selectable {
        enum Transition { None = 0, ColorTint = 1, SpriteSwap = 2, Animation = 3 }
        
    }
    namespace UnityEngine.UI.Button {
        class ButtonClickedEvent extends UnityEngine.Events.UnityEvent {
            public constructor();
            
        }
        
    }
    namespace UnityEngine.Events {
        class UnityEvent extends UnityEngine.Events.UnityEventBase {
            public constructor();
            public AddListener(call: UnityEngine.Events.UnityAction):void;
            public RemoveListener(call: UnityEngine.Events.UnityAction):void;
            public Invoke():void;
            
        }
        class UnityEventBase extends System.Object {
            
        }
        type UnityAction = () => void;
        var UnityAction: {new (func: () => void): UnityAction;}
        class UnityEvent$1<T0> extends UnityEngine.Events.UnityEventBase {
            public AddListener(call: UnityEngine.Events.UnityAction$1<T0>):void;
            public RemoveListener(call: UnityEngine.Events.UnityAction$1<T0>):void;
            public Invoke(arg0: T0):void;
            
        }
        type UnityAction$1<T0> = (arg0: T0) => void;
        type UnityAction$2<T0,T1> = (arg0: T0, arg1: T1) => void;
        
    }
    namespace UnityEngine.UI.InputField {
        class SubmitEvent extends UnityEngine.Events.UnityEvent$1<string> {
            
        }
        class OnChangeEvent extends UnityEngine.Events.UnityEvent$1<string> {
            
        }
        type OnValidateInput = (text: string, charIndex: number, addedChar: number) => number;
        var OnValidateInput: {new (func: (text: string, charIndex: number, addedChar: number) => number): OnValidateInput;}
        enum ContentType { Standard = 0, Autocorrected = 1, IntegerNumber = 2, DecimalNumber = 3, Alphanumeric = 4, Name = 5, EmailAddress = 6, Password = 7, Pin = 8, Custom = 9 }
        enum LineType { SingleLine = 0, MultiLineSubmit = 1, MultiLineNewline = 2 }
        enum InputType { Standard = 0, AutoCorrect = 1, Password = 2 }
        enum CharacterValidation { None = 0, Integer = 1, Decimal = 2, Alphanumeric = 3, Name = 4, EmailAddress = 5 }
        
    }
    namespace UnityEngine.UI.Toggle {
        enum ToggleTransition { None = 0, Fade = 1 }
        class ToggleEvent extends UnityEngine.Events.UnityEvent$1<boolean> {
            public constructor();
            
        }
        
    }
    namespace UnityEngine.Application {
        type AdvertisingIdentifierCallback = (advertisingId: string, trackingEnabled: boolean, errorMsg: string) => void;
        var AdvertisingIdentifierCallback: {new (func: (advertisingId: string, trackingEnabled: boolean, errorMsg: string) => void): AdvertisingIdentifierCallback;}
        type LowMemoryCallback = () => void;
        var LowMemoryCallback: {new (func: () => void): LowMemoryCallback;}
        type LogCallback = (condition: string, stackTrace: string, type: UnityEngine.LogType) => void;
        var LogCallback: {new (func: (condition: string, stackTrace: string, type: UnityEngine.LogType) => void): LogCallback;}
        
    }
    namespace NiceTS {
        class TService extends MonoSingleton$1<NiceTS.TService> {
            public MemoryStreamManager: Microsoft.IO.RecyclableMemoryStreamManager;
            public needStartSendChannel: System.Collections.Generic.List$1<bigint>;
            public constructor();
            public GetChannel():NiceTS.TChannel;
            public MarkNeedStartSend(id: bigint):void;
            public Remove(id: bigint):void;
            public Update():void;
            
        }
        class ResourceManager extends System.Object {
            public static OnFBLoadedHandle: System.Action$2<string, System.Array$1<number>>;
            public constructor();
            public static init():void;
            public static ReleaseFGUIPackage(packageName: string):void;
            public static LoadFairyGUIPackage(address: string, packageName: string):System.Threading.Tasks.Task;
            public static PreadloadFB(fbLabel: string):System.Threading.Tasks.Task$1<boolean>;
            public static PreloadJS(jsLabel: string):System.Threading.Tasks.Task$1<boolean>;
            public static LoadPrefab(address: string):System.Threading.Tasks.Task$1<UnityEngine.GameObject>;
            public static LoadTextAsset(address: string):System.Threading.Tasks.Task$1<UnityEngine.TextAsset>;
            public static LoadTextBytes(address: string):System.Threading.Tasks.Task$1<ArrayBuffer>;
            public static LoadSprite(address: string):System.Threading.Tasks.Task$1<UnityEngine.Sprite>;
            public static ReleaseAddressGO(go: UnityEngine.Object):void;
            
        }
        class TChannel extends System.Object {
            public errorCallback: NiceTS.ErrorCallback;
            public readCallback: NiceTS.ReadCallback;
            public Service: NiceTS.TService;
            public Id: bigint;
            public IsSending: boolean;
            public Error: number;
            public RemoteAddress: string;
            public constructor(service: NiceTS.TService);
            public Connect(address: string):void;
            public Send(ab: ArrayBuffer):void;
            public StartSend():void;
            public SendAsync(buffer: System.Array$1<number>, offset: number, count: number):void;
            public StartRecv():void;
            public RecvAsync(buffer: System.Array$1<number>, offset: number, count: number):void;
            public Dispose():void;
            
        }
        type ErrorCallback = (channel: NiceTS.TChannel, code: number) => void;
        var ErrorCallback: {new (func: (channel: NiceTS.TChannel, code: number) => void): ErrorCallback;}
        type ReadCallback = (arrayBuffer: ArrayBuffer) => void;
        var ReadCallback: {new (func: (arrayBuffer: ArrayBuffer) => void): ReadCallback;}
        
    }
    
        class MonoSingleton$1<T> extends UnityEngine.MonoBehaviour {
            public static Instance: T;
            public Startup():void;
            public DestroySelf():void;
            public Dispose():void;
            
        }
        class Logger extends System.Object {
            public static clientVerstion: string;
            public static loginUid: string;
            public static localIP: string;
            public static platName: string;
            public static sceneName: string;
            public static DEBUG_BUILD_VER: string;
            public static platChannel: string;
            public static useTime: bigint;
            public static useMemory: string;
            public constructor();
            public static Log(s: string, ...p: any[]):void;
            public static Log(o: any):void;
            public static LogToMainThread(s: string, ...p: any[]):void;
            public static Assert(condition: boolean, s: string, ...p: any[]):void;
            public static LogError(s: string, ...p: any[]):void;
            public static LogErrorToMainThread(s: string, ...p: any[]):void;
            public static LogStackTrace(str: string):void;
            public static CheckReportError():void;
            public static Watch():void;
            
        }
        class JsManager extends MonoSingleton$1<JsManager> {
            public jscache: System.Collections.Generic.Dictionary$2<string, string>;
            public JsOnApplicationQuit: System.Action;
            public JsOnDispose: System.Action;
            public constructor();
            public GetJsEnv():Puerts.JsEnv;
            public StartGame():void;
            public Restart():void;
            public Dispose():void;
            
        }
        class GameLaunch extends MonoSingleton$1<GameLaunch> {
            public launchPage: LaunchPage;
            public constructor();
            public JsLuanchFinish():void;
            
        }
        class LaunchPage extends FairyGUI.GComponent {
            
        }
        
    
    namespace System.Threading.Tasks {
        class Task extends System.Object {
            
        }
        class Task$1<TResult> extends System.Threading.Tasks.Task {
            
        }
        
    }
    namespace Puerts {
        class ArrayBuffer extends System.Object {
            
        }
        class JsEnv extends System.Object {
            
        }
        
    }
    namespace Microsoft.IO {
        class RecyclableMemoryStreamManager extends System.Object {
            
        }
        
    }
    
}