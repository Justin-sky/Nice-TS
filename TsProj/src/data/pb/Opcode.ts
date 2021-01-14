import { nice_ts } from "./gen/pb";
export class DecodeMsg{
	public rpcId:number;
	public msgObj:any;
}
export class Opcode{
	public static MSG_C2R_Login:number = 1000;
	public static MSG_R2C_Login:number = 1001;
	public static MSG_C2G_LoginGate:number = 1002;
	public static MSG_G2C_LoginGate:number = 1003;

	public static MSG_C2GS_Test:number = 2001;
	public static MSG_GS2C_Test:number = 2002;

	public static map = {
		1000 : nice_ts.C2R_Login.decode,
		1001 : nice_ts.R2C_Login.decode,
		1002 : nice_ts.C2G_LoginGate.decode,
		1003 : nice_ts.G2C_LoginGate.decode,

		2001 : nice_ts.C2GS_Test.decode,
		2002 : nice_ts.GS2C_Test.decode,
	}
	public static decode(opcode:number, msg:Uint8Array):DecodeMsg {
		let msgObj = this.map[opcode](msg);
		let decodeMsg = new DecodeMsg();
		decodeMsg.rpcId = msgObj.RpcId;
		decodeMsg.msgObj = msgObj;
		return decodeMsg;
	}
}
