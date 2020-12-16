using System;
using System.Collections.Generic;

namespace NiceTS
{
    public interface IBaseSignal
	{
		void Dispatch(object[] args);

		void AddListener(Action<IBaseSignal, object[]> callback);

		void AddOnce(Action<IBaseSignal, object[]> callback);

		void RemoveListener(Action<IBaseSignal, object[]> callback);

		void RemoveAllListeners();

		List<Type> GetTypes();


	}

}
