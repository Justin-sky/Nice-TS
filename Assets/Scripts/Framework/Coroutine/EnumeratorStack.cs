using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;
using UnityEngine;

namespace NiceTS
{
	public sealed class EnumeratorStack
	{
		private sealed class CoroutineWasPopped
		{
		}

		private const int InitialDefaultCapacity = 20;

		private Stack<IEnumerator> _couroutineStack = new Stack<IEnumerator>(20);

		private StringBuilder _toString = new StringBuilder();

		private static CoroutineWasPopped _coroutineWasPoppedResult = new CoroutineWasPopped();

		private volatile bool stopRunning;

		public int Count
		{
			get
			{
				return _couroutineStack.Count;
			}
		}

		public void Reset()
		{
			stopRunning = false;
			_couroutineStack.Clear();
		}

		public void Push(IEnumerator coroutine)
		{
			_couroutineStack.Push(coroutine);
		}

		public object RunOnce()
		{
			if (_couroutineStack.Count > 0)
			{
				return Advance();
			}
			return null;
		}

		public void Run()
		{
			while (_couroutineStack.Count > 0)
			{
				Advance();
			}
		}

		public void Stop()
		{
			stopRunning = true;
		}

		private object Advance()
		{
			bool num = _couroutineStack.Peek().MoveNext();
			BreakZeroFrame breakZeroFrame = _couroutineStack.Peek().Current as BreakZeroFrame;
			if (!num || breakZeroFrame != null)
			{
				_couroutineStack.Pop();
				if (breakZeroFrame != null)
				{
					return breakZeroFrame;
				}
				return _coroutineWasPoppedResult;
			}
			if (_couroutineStack.Count == 0 || stopRunning)
			{
				Reset();
				return null;
			}
			object current = _couroutineStack.Peek().Current;
			if (IsChildCoroutine(current))
			{
				_couroutineStack.Push(current as IEnumerator);
			}
			return current;
		}

		public static bool IsChildCoroutine(object coroutineReturnValue)
		{
			if (coroutineReturnValue is IEnumerator)
			{
				return !(coroutineReturnValue is CustomYieldInstruction);
			}
			return false;
		}

		public static bool WasChildCoroutinePopped(object coroutineReturnValue)
		{
			return coroutineReturnValue is CoroutineWasPopped;
		}

		public string PrintStack(string delimeter)
		{
			_toString.Clear();
			foreach (IEnumerator item in _couroutineStack)
			{
				if (_toString.Length > 0)
				{
					_toString.Append(delimeter);
				}
				_toString.Append((item != null) ? item.GetType().FullName : null);
			}
			return _toString.ToString();
		}

		public override string ToString()
		{
			return PrintStack(Environment.NewLine);
		}
	}
}
