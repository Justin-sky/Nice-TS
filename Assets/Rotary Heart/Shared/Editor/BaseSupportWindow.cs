using UnityEngine;
using UnityEditor;

namespace RotaryHeart.Lib
{
    public class BaseSupportWindow : EditorWindow
    {
        int m_toolBarIndex;

        GUIContent m_assetName;
        GUIContent m_support;
        GUIContent m_contact;
        GUIContent m_review;

        GUIStyle m_labelStyle;
        GUIStyle m_publisherNameStyle;
        GUIStyle m_toolBarStyle;
        GUIStyle m_greyText;
        GUIStyle m_reviewBanner;
        GUIStyle m_versionLabel;

        protected virtual string AssetName
        {
            get { return null; }
        }
        protected virtual string SupportForum
        {
            get { return null; }
        }
        protected virtual string StoreLink
        {
            get { return null; }
        }
        protected virtual string Version
        {
            get { return null; }
        }

        protected static void ShowWindow <T> () where T : BaseSupportWindow
        {
            T myWindow = CreateInstance<T>();
            myWindow.ShowUtility();
            myWindow.titleContent = new GUIContent("About");
            myWindow.LoadStyles();
        }

        void LoadStyles()
        {
            string color = "#AAAAAA";

            if (!EditorGUIUtility.isProSkin)
            {
                color = "#353535";
            }

            m_assetName = IconContent("<size=20><b><color=" + color + "> " + AssetName + "</color></b></size>", "", "");
            m_support = IconContent("<size=12><b> Support</b></size>\n <size=9>Get help and talk \n with others.</size>", "_Help", "");
            m_contact = IconContent("<size=12><b> Contact</b></size>\n <size=9>Reach out and \n get help.</size>", "console.infoicon", "");
            m_review = IconContent("<size=11><color=white> Please consider leaving a review.</color></size>", "Favorite Icon", "");

            m_labelStyle = new GUIStyle(EditorStyles.label);
            m_labelStyle.richText = true;

            m_publisherNameStyle = new GUIStyle()
            {
                alignment = TextAnchor.MiddleLeft,
                richText = true
            };
            m_toolBarStyle = new GUIStyle("LargeButtonMid")
            {
                alignment = TextAnchor.MiddleLeft,
                richText = true
            };
            m_greyText = new GUIStyle(EditorStyles.centeredGreyMiniLabel)
            {
                alignment = TextAnchor.MiddleLeft
            };
            m_reviewBanner = new GUIStyle("TL SelectionButton")
            {
                alignment = TextAnchor.MiddleCenter,
                richText = true
            };
            m_versionLabel = new GUIStyle(EditorStyles.centeredGreyMiniLabel)
            {
                alignment = TextAnchor.MiddleRight,
            };
        }

        void OnGUI()
        {
            maxSize = minSize = new Vector2(350, 350);

            EditorGUILayout.Space();
            GUILayout.Label(m_assetName, m_publisherNameStyle);
            EditorGUILayout.Space();

            GUIContent[] toolbarOptions = new GUIContent[2];
            toolbarOptions[0] = m_support;
            toolbarOptions[1] = m_contact;

            m_toolBarIndex = GUILayout.Toolbar(m_toolBarIndex, toolbarOptions, m_toolBarStyle, GUILayout.Height(50));

            EditorGUILayout.Space();

            switch (m_toolBarIndex)
            {
                case 0:
                    EditorGUILayout.LabelField("Talk with others.", m_greyText);

                    if (GUILayout.Button("Support Forum"))
                        Application.OpenURL(SupportForum);

                    EditorGUILayout.Space();

                    EditorGUILayout.LabelField("Detailed code documentation.", m_greyText);
                    
                    if (GUILayout.Button("Wiki"))
                        Application.OpenURL("https://www.rotaryheart.com/Wiki.html");

                    break;

                case 1:
                    EditorGUILayout.LabelField("Get in touch.", m_greyText);
                    
                    if (GUILayout.Button("Email"))
                        Application.OpenURL("mailto:ma.rotaryheart@gmail.com?");

                    EditorGUILayout.Space();

                    if (GUILayout.Button("Contact Form"))
                        Application.OpenURL("https://www.rotaryheart.com/Contact.html");

                    break;
            }

            GUILayout.FlexibleSpace();
            
            EditorGUILayout.LabelField(new GUIContent("Version " + Version), m_versionLabel);
            
            EditorGUILayout.Space();
            
            if (GUILayout.Button(m_review, m_reviewBanner, GUILayout.Height(30)))
                Application.OpenURL(StoreLink);
        }

        static GUIContent IconContent(string text, string icon, string tooltip)
        {
            GUIContent content;

            if (string.IsNullOrEmpty(icon))
            {
                content = new GUIContent();
            }
            else
            {
                content = EditorGUIUtility.IconContent(icon);
            }

            content.text = text;
            content.tooltip = tooltip;
            return content;
        }

    }
}