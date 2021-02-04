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
		1000 : {"decode":nice_ts.C2R_Login.decode,"encode":nice_ts.C2R_Login.encode},
		1001 : {"decode":nice_ts.R2C_Login.decode,"encode":nice_ts.R2C_Login.encode},
		1002 : {"decode":nice_ts.C2G_LoginGate.decode,"encode":nice_ts.C2G_LoginGate.encode},
		1003 : {"decode":nice_ts.G2C_LoginGate.decode,"encode":nice_ts.G2C_LoginGate.encode},

		2001 : {"decode":nice_ts.C2GS_Test.decode,"encode":nice_ts.C2GS_Test.encode},
		2002 : {"decode":nice_ts.GS2C_Test.decode,"encode":nice_ts.GS2C_Test.encode}
	}
	public static decode(opcode:number, msg:Uint8Array):DecodeMsg {
		let msgObj = this.map[opcode]["decode"](msg);
		let decodeMsg = new DecodeMsg();
		decodeMsg.rpcId = msgObj.RpcId;
		decodeMsg.msgObj = msgObj;
		return decodeMsg;
	}
	public static encode(opcode:number, msg:Uint8Array){
		let buf = this.map[opcode]["encode"](msg).finish();
		return buf
	}



}
