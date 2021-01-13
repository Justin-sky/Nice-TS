using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UnityEngine;

namespace NiceTS
{
    public class LocalizedTextKeyAttribute:PropertyAttribute
    {
        public bool ShowKeyField
        {
            get;
            private set;
        }

        public LocalizedTextKeyAttribute(bool showKeyField = false)
        {
            ShowKeyField = showKeyField;
        }
    }
}
