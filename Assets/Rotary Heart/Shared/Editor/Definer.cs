using System.Collections.Generic;
using UnityEditor;

namespace RotaryHeart.Lib
{

    public static class Definer
    {

        public static void ApplyDefines(List<string> defines)
        {
            if (defines == null || defines.Count == 0)
                return;

            string availableDefines = PlayerSettings.GetScriptingDefineSymbolsForGroup(EditorUserBuildSettings.selectedBuildTargetGroup);
            List<string> definesSplit = new List<string>(availableDefines.Split(';'));

            foreach (string define in defines)
                if (!definesSplit.Contains(define))
                    definesSplit.Add(define);

            _ApplyDefine(string.Join(";", definesSplit.ToArray()));
        }

        public static void RemoveDefines(List<string> defines)
        {
            if (defines == null || defines.Count == 0)
                return;

            string availableDefines = PlayerSettings.GetScriptingDefineSymbolsForGroup(EditorUserBuildSettings.selectedBuildTargetGroup);
            List<string> definesSplit = new List<string>(availableDefines.Split(';'));

            foreach (string define in defines)
                definesSplit.Remove(define);

            _ApplyDefine(string.Join(";", definesSplit.ToArray()));
        }

        static void _ApplyDefine(string define)
        {
            if (string.IsNullOrEmpty(define))
                return;

            PlayerSettings.SetScriptingDefineSymbolsForGroup(EditorUserBuildSettings.selectedBuildTargetGroup, define);
        }
    }
    
}
