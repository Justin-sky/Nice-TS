using UnityEditor;

namespace RotaryHeart.Lib.SerializableDictionary
{
    public sealed class Constants
    {
        private const bool DEF_SHOW_PAGES = false;
        private const bool DEF_SHOW_SIZE = true;
        private const int DEF_PAGE_COUNT = 15;

        private const string ID_SHOW_PAGES = "RHSD_ShowPages";
        private const string ID_SHOW_SIZE = "RHSD_ShowSize";
        private const string ID_PAGE_COUNT = "RHSD_PageCount";

        public static bool ShowPages
        {
            get
            {
                return EditorPrefs.GetBool(ID_SHOW_PAGES, DEF_SHOW_PAGES);
            }
            set
            {
                EditorPrefs.SetBool(ID_SHOW_PAGES, value);
            }
        }
        public static bool ShowSize
        {
            get
            {
                return EditorPrefs.GetBool(ID_SHOW_SIZE, DEF_SHOW_SIZE);
            }
            set
            {
                EditorPrefs.SetBool(ID_SHOW_SIZE, value);
            }
        }
        public static int PageCount
        {
            get
            {
                return EditorPrefs.GetInt(ID_PAGE_COUNT, DEF_PAGE_COUNT);
            }
            set
            {
                EditorPrefs.SetInt(ID_PAGE_COUNT, value);
            }
        }

        public static void RestoreDefaults()
        {
            ShowPages = DEF_SHOW_PAGES;
            ShowSize = DEF_SHOW_SIZE;
            PageCount = DEF_PAGE_COUNT;
        }
    }
}