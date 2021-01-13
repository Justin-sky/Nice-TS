using UnityEditor;

namespace RotaryHeart.Lib.SerializableDictionary
{
    public class SupportWindow : BaseSupportWindow
    {
        const string SUPPORT_FORUM = "https://forum.unity.com/threads/released-serializable-dictionary.518178/";
        const string STORE_LINK = "https://assetstore.unity.com/packages/tools/utilities/serialized-dictionary-110992";
        const string ASSET_NAME = "Serializable Dictionary Lite";
        const string VERSION = "2.6.9.4";

        protected override string SupportForum
        {
            get { return SUPPORT_FORUM; }
        }
        protected override string StoreLink
        {
            get { return STORE_LINK; }
        }
        protected override string AssetName
        {
            get { return ASSET_NAME; }
        }
        protected override string Version
        {
            get { return VERSION; }
        }

        [MenuItem("Tools/Rotary Heart/Serializable Dictionary/About")]
        public static void ShowWindow()
        {
            ShowWindow<SupportWindow>();
        }
    }
}