import { UnityEngine } from 'csharp';
enum LogType {
	Error = 0,
	Assert = 1,
	Warning = 2,
	Log = 3,
	Exception = 4
}

let unity_log_target = null;

function print(type: LogType, showStack : boolean, ...args) {
	let message = '';
	for (let i = 0; i < args.length; i++) {
		const element = args[i];
		if (typeof element === 'object' && console.LOG_OBJECT_TO_JSON) {
			message += JSON.stringify(element);
		} else {
			message += element;
		}
		if (i < args.length - 1) {
			message += ' ';
		}
	}

	if (showStack || UnityEngine.Application.isEditor) {
		var stacks = new Error().stack.split('\n');
		for (let i = 3; i < stacks.length; i++) {
			const line = stacks[i];
			message += '\n';
			message += line;
		}
	}

	if (!unity_log_target) {
		unity_log_target = new UnityEngine.Object();
	}
	//if(GameConfig.debug)
	//Logger.Log(`${msg}`);

	UnityEngine.Debug.LogFormat(type, UnityEngine.LogOption.NoStacktrace, unity_log_target, message);
}

let globalConsole = (globalThis as unknown)['console'];
Object.defineProperty(globalConsole, 'log',  { value: (...args) => print(LogType.Log, false, args), enumerable: true, configurable: true});
Object.defineProperty(globalConsole, 'info', { value: (...args) => print(LogType.Log, true, args), enumerable: true, configurable: true});
Object.defineProperty(globalConsole, 'trace', { value: (...args) => print(LogType.Log, true, args), enumerable: true, configurable: true});
Object.defineProperty(globalConsole, 'warn', { value: (...args) => print(LogType.Warning, true, args), enumerable: true, configurable: true});
Object.defineProperty(globalConsole, 'error', { value: (...args) => print(LogType.Error, true, args), enumerable: true, configurable: true});
Object.defineProperty(globalConsole, 'LOG_OBJECT_TO_JSON', { value: false, enumerable: true, configurable: true, writable: true});