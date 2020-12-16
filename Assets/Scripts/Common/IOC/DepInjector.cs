using System.Collections.Generic;
using System.Text;
using System.Threading;

namespace NiceTS
{
	public static class DepInjector
	{
		private static volatile List<IProvider> providers = new List<IProvider>();

		private static volatile List<IClient> clients = new List<IClient>();

		private static StringBuilder stringBuilder = new StringBuilder(2048);

		private static int? mainThreadId;

		public static int ProviderCount
		{
			get
			{
				List<IProvider> list = providers;
				if (list == null)
				{
					return -1;
				}
				return list.Count;
			}
		}

		public static int ClientCount
		{
			get
			{
				List<IClient> list = clients;
				if (list == null)
				{
					return -1;
				}
				return list.Count;
			}
		}

		public static string ListProviders()
		{
			AssertCalledFromMainThread();
			stringBuilder.Clear();
			stringBuilder.Append(string.Format("{0} ", ProviderCount));
			for (int i = 0; i < providers.Count; i++)
			{
				stringBuilder.Append(string.Format("[{0}]", providers[i]));
				if (i != providers.Count - 1)
				{
					stringBuilder.Append(" ");
				}
			}
			return stringBuilder.ToString();
		}

		public static string ListClients()
		{
			AssertCalledFromMainThread();
			stringBuilder.Clear();
			stringBuilder.Append(string.Format("{0} ", ClientCount));
			for (int i = 0; i < clients.Count; i++)
			{
				stringBuilder.Append(string.Format("[{0}]", clients[i]));
				if (i != clients.Count - 1)
				{
					stringBuilder.Append(" ");
				}
			}
			return stringBuilder.ToString();
		}

		public static void AddProvider(IProvider addProvider)
		{
			AssertCalledFromMainThread();
			if (addProvider != null && !providers.Contains(addProvider))
			{
				foreach (IClient client in clients)
				{
					client.NewProviderAvailable(addProvider);
				}
				if (addProvider is IClient)
				{
					AddClient(addProvider as IClient);
				}
				foreach (IClient client2 in clients)
				{
					client2.NewProviderFullyInstalled(addProvider);
				}
				providers.Add(addProvider);
			}
		}

		public static void AddClient(IClient addClient)
		{
			AssertCalledFromMainThread();
			if (addClient != null && !clients.Contains(addClient))
			{
				foreach (IProvider provider in providers)
				{
					addClient.NewProviderAvailable(provider);
					addClient.NewProviderFullyInstalled(provider);
				}
				clients.Add(addClient);
			}
		}

		public static void RemoveProvider(IProvider removeProvider)
		{
			AssertCalledFromMainThread();
			if (providers.Contains(removeProvider))
			{
				foreach (IClient client in clients)
				{
					if (client != removeProvider)
					{
						client.ProviderRemoved(removeProvider);
					}
				}
				providers.Remove(removeProvider);
			}
		}

		public static void RemoveClient(IClient client)
		{
			AssertCalledFromMainThread();
			if (clients.Contains(client))
			{
				clients.Remove(client);
			}
		}

		public static void Remove<T>(T o) where T : IProvider, IClient
		{
			if (o != null)
			{
				RemoveProvider(o);
			}
			if (o != null)
			{
				RemoveClient(o);
			}
		}

		public static bool MapProvider<T>(IProvider provider, ref T existingValue)
		{
			if (provider is T)
			{
				existingValue = (T)provider;
				return true;
			}
			return false;
		}

		public static bool UnmapProvider<T>(IProvider provider, ref T existingValue)
		{
			if (provider is T)
			{
				existingValue = default(T);
				return true;
			}
			return false;
		}

		private static void AssertCalledFromMainThread()
		{
			mainThreadId = (mainThreadId ?? Thread.CurrentThread.ManagedThreadId);
			if (Thread.CurrentThread.ManagedThreadId != mainThreadId.Value)
			{
				Log.Error(LogGroups.Engine, "DepInjector method being called from outside the main thread.");
			}
		}
	}
}
