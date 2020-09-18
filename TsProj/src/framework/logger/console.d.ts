/**
 * The Console API provides functionality to allow developers to perform debugging tasks, such as logging messages or the values of variables at set points in your code, or timing how long an operation takes to complete.
 */
//@ts-ignore
declare const console: {
	/**
	 * Outputs a message to the console. The message may be a single string (with optional substitution values), or it may be any one or more JavaScript objects.
	 * @param message A list of JavaScript objects to output. The string representations of each of these objects are appended together in the order listed and output.
	 */
	log(...message): void;

	/**
	 * Outputs a warning message to the console.
	 * @param message  list of JavaScript objects to output. The string representations of each of these objects are appended together in the order listed and output.
	 */
	warn(...message): void;

	/**
	 * Outputs an error message to the console.
	 * @param message A list of JavaScript objects to output. The string representations of each of these objects are appended together in the order listed and output.
	 */
	error(...message): void;

	/** Outputs a stack trace to the console.
	 * @param message A list of JavaScript objects to output. The string representations of each of these objects are appended together in the order listed and output.
	*/
	trace(...message): void;

	/** Log JavaScript Objects as JSON format */
	LOG_OBJECT_TO_JSON: boolean;
}