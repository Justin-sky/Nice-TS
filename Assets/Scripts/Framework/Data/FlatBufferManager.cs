using NiceTS;
using System.Collections.Generic;
using UnityEngine;

namespace fb
{
    public class FlatBufferManager:MonoSingleton<FlatBufferManager>
    {
        private Dictionary<string, FlatBuffers.ByteBuffer> cacheSkills = new Dictionary<string, FlatBuffers.ByteBuffer>();

        private List<string> skillfbs = new List<string> {
          "skillconfig",
          "heroconfig",
          "unitconfig"
        };

        public void ClearSkillCache()
        {
            cacheSkills.Clear();
        }

        public void  AddSkillCache(TextAsset txt)
        {

            if (skillfbs.Contains(txt.name))
            {
                cacheSkills.Add(txt.name, new FlatBuffers.ByteBuffer(txt.bytes));
            }
        }


        public FlatBuffers.ByteBuffer GetSkillData(string key)
        {
            FlatBuffers.ByteBuffer skillPB;

            if (cacheSkills.TryGetValue(key, out skillPB))
            {
                return skillPB;
            }
            else
            {
                Log.Error(LogGroups.Engine, $"Not Found in cache, Skill FB : {key} ");
                return null;
            }
        }

        
    }
}
