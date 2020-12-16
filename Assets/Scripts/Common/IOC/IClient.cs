using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NiceTS
{
	public interface IClient
	{
		void NewProviderAvailable(IProvider newProvider);

		void ProviderRemoved(IProvider removeProvider);

		void NewProviderFullyInstalled(IProvider newProvider);
	}
}
