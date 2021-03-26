export type Constructor<T> = new (...args: any[]) => T;
export type LinearEnum = { Count: number, [index: number]: string};