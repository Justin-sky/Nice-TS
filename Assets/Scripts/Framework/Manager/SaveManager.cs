using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UnityEngine;

namespace NiceTS
{
    public sealed class SaveManager : MonoBehaviour, IProvider, IClient
    {
        private bool _previewMode;
		private LogLevel _logLevel;

		public bool PreviewMode
		{
			get
			{
				return _previewMode;
			}
			set
			{
				if (_previewMode != value)
				{
					if (value)
					{
						_logLevel = Log.LogLevel;
						Log.LogLevel = LogLevel.ErrorsOnly;
					}
					else
					{
						Log.LogLevel = _logLevel;
					}
				}
				_previewMode = value;
			}
		}


		public void NewProviderAvailable(IProvider newProvider)
        {
            throw new NotImplementedException();
        }

        public void NewProviderFullyInstalled(IProvider newProvider)
        {
            throw new NotImplementedException();
        }

        public void ProviderRemoved(IProvider removeProvider)
        {
            throw new NotImplementedException();
        }
    }
}
