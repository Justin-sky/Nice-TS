using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NiceTS
{
	public interface IDataView<T> : IDataViewBase
	{
		void Set(T data, int index);
	}
	public interface IDataView<T, U> : IDataViewBase
	{
		void Set(T data, U helper, int index);
	}

}
