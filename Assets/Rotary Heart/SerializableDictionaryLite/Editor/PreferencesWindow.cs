using UnityEditor;
using UnityEngine;

namespace RotaryHeart.Lib.SerializableDictionary
{
    public class PreferencesWindow
    {
        #region GUIContent
        static readonly GUIContent gui_pagesTitle = new GUIContent("Pages", "Section that has all the pages settings for the drawer");
        static readonly GUIContent gui_showPages = new GUIContent("Show Pages", "Should the drawer be divided in pages?");
        static readonly GUIContent gui_showSizes = new GUIContent("Show Sizes", "Should the dictionary show the size on the title bar?");
        static readonly GUIContent gui_pageCount = new GUIContent("Page Count", "How many elements per page are going to be drawn");
        #endregion

        // Have we loaded the prefs yet
        private static bool prefsLoaded = false;

        //Default values
        private static bool showPages;
        private static bool showSize;
        private static int pageCount;

#if UNITY_2018_3_OR_NEWER
        private class MyPrefSettingsProvider : SettingsProvider
        {
            public MyPrefSettingsProvider(string path, SettingsScope scopes = SettingsScope.Project)
            : base(path, scopes)
            { }

            public override void OnGUI(string searchContext)
            {
                PreferencesGUI();
            }
        }

        [SettingsProvider]
        static SettingsProvider MyNewPrefCode()
        {
            return new MyPrefSettingsProvider("Preferences/RHSD");
        }
#else
        // Add preferences section named "My Preferences" to the Preferences Window
        [PreferenceItem("RHSD")]
#endif
        public static void PreferencesGUI()
        {
            if (!prefsLoaded)
            {
                showPages = Constants.ShowPages;
                showSize = Constants.ShowSize;
                pageCount = Constants.PageCount;

                prefsLoaded = true;
            }

            EditorGUILayout.LabelField(gui_pagesTitle, EditorStyles.boldLabel);
            EditorGUILayout.Space();

            showSize = EditorGUILayout.Toggle(gui_showSizes, showSize);
            showPages = EditorGUILayout.Toggle(gui_showPages, showPages);

            GUI.enabled = showPages;

            pageCount = Mathf.Clamp(EditorGUILayout.IntField(gui_pageCount, pageCount), 5, int.MaxValue);

            GUI.enabled = true;

            if (GUI.changed)
            {
                Constants.ShowPages = showPages;
                Constants.ShowSize = showSize;
                Constants.PageCount = pageCount;
            }

            GUILayout.FlexibleSpace();

            if (GUILayout.Button("Restore Default"))
            {
                Constants.RestoreDefaults();

                prefsLoaded = false;
            }
        }
    }
}