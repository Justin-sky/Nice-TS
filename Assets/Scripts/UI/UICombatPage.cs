using FairyGUI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UnityEngine;

namespace NiceTS
{
    public sealed  class UICombatPage:MonoBehaviour
    {
        private GComponent _mainView;
        private GTextField g_runcost_txt;
        private GComponent g_handComp;

        private List<UICard> card_list = new List<UICard>();

        private async void Start()
        {
            ////==== 初始化card 扩展
            UIObjectFactory.SetPackageItemExtension(UICard.URL, typeof(UICard));

           ////=====================


            _mainView = this.GetComponent<UIPanel>().ui;
            if (_mainView != null)
            {
                g_runcost_txt = _mainView.GetChild("run_cost_txt").asTextField;
                g_handComp = _mainView.GetChild("handcardComp").asCom;
                
            }

            //test
            this.AddHandCard();
        }


        int _touchCardIndex = -1;
        GObject _lastTouchedCard = null;
        public void OnTouchBegin(EventContext context)
        {
            if(_touchCardIndex != -1)
            {
                ResetCardIndex(_lastTouchedCard);
            }

            var sender = (GObject)context.sender;
            _lastTouchedCard = sender;
            sender.SetScale(1, 1);

            _touchCardIndex = g_handComp.GetChildIndex(sender);
            g_handComp.SetChildIndex(sender, 99);
        }
        public void OnTouchEnd(EventContext context)
        {
            var sender = (GObject)context.sender;
            ResetCardIndex(sender);
        }

        private void ResetCardIndex(GObject sender)
        {
            sender.SetScale(.7f, .7f);

            g_handComp.SetChildIndex(sender, _touchCardIndex);
            _touchCardIndex = -1;
            _lastTouchedCard = null;
        }

        private void OnDragEnd(EventContext context)
        {
            Debug.Log(context.data);
            
        }


        private void OnDragStart(EventContext context)
        {
            context.PreventDefault();

            DragDropManager.inst.StartDrag(null, "ui://w69vialgw6jkb", "test", (int)context.data);
            DragDropManager.inst.dragAgent.onDragEnd.Add(OnDragEnd);
        }

        public void AddHandCard()
        {
            for(int i=0; i<4; i++)
            {
                var card = UICard.CreateInstance();
                card.SetScale(0.7f, 0.7f);
                card.SetPivot(0.5f, 1);
                card.onTouchBegin.Add(this.OnTouchBegin);
                card.onTouchEnd.Add(this.OnTouchEnd);

                card.draggable = true;
                card.onDragStart.Add(OnDragStart);

                g_handComp.AddChild(card);
            }

            this.FanHand();
        }

        public void FanHand()
        {
            // -(x/(0.5 *len - 1) -1)^2 + 1
            Func<float, int, float> yPosFn = (x, len) => Mathf.Pow(1 - x / (0.5f * (len - 1)) , 2f) ;
            // (x/0.5 - 1)^3
            Func<float, int, float> rotationFn = (x, len) => ((2 * x) / (len - 1)) - 1;
            float ySpacing = 20;
            float maxTilt = 10f;

            float handWidth = 600;
            float cardWidth = 380*0.7f;
            float xOffset = (g_handComp.width - handWidth - cardWidth)/2;

            var hands = g_handComp.GetChildren();
            Vector3 pos;
            Vector3 rotation;

            if (hands.Length == 1)
            {
                pos = Vector3.zero;
                rotation = Vector3.zero;

                hands[0].SetXY(pos.x + xOffset, pos.y);
                hands[0].rotation = rotation.z;
            }
            else
            {
                for (int i = 0; i < hands.Length; i++)
                {
                    pos = new Vector3(
                         ((float)i / (hands.Length)) * handWidth,
                         yPosFn(i, hands.Length) * ySpacing,
                         -i);
                    rotation = new Vector3(0, 0, rotationFn(i, hands.Length) * maxTilt);
                    hands[i].SetXY(pos.x + xOffset, pos.y);
                    hands[i].rotation = rotation.z;
                }
            }
            

        }

    }
}
