import { NiceET } from "./OuterMessage";
export class DecodeMsg{
	public rpcId:number;
	public msgObj:any;
}
export class Opcode{
	public static C2M_TESTREQUEST:number = 101;
	public static M2C_TESTRESPONSE:number = 102;
	public static ACTOR_TRANSFERREQUEST:number = 103;
	public static ACTOR_TRANSFERRESPONSE:number = 104;
	public static C2G_ENTERMAP:number = 105;
	public static G2C_ENTERMAP:number = 106;
	public static UNITINFO:number = 107;
	public static M2C_CREATEUNITS:number = 108;
	public static FRAME_CLICKMAP:number = 109;
	public static M2C_PATHFINDINGRESULT:number = 110;
	public static C2R_PING:number = 111;
	public static R2C_PING:number = 112;
	public static G2C_TEST:number = 113;
	public static C2M_RELOAD:number = 114;
	public static M2C_RELOAD:number = 115;
	public static C2R_LOGIN:number = 116;
	public static R2C_LOGIN:number = 117;
	public static C2G_LOGINGATE:number = 118;
	public static G2C_LOGINGATE:number = 119;
	public static G2C_TESTHOTFIXMESSAGE:number = 120;
	public static C2M_TESTACTORREQUEST:number = 121;
	public static M2C_TESTACTORRESPONSE:number = 122;
	public static PLAYERINFO:number = 123;
	public static C2G_PLAYERINFO:number = 124;
	public static G2C_PLAYERINFO:number = 125;
	public static map = {
		101 : NiceET.C2M_TestRequest.decode,
		102 : NiceET.M2C_TestResponse.decode,
		103 : NiceET.Actor_TransferRequest.decode,
		104 : NiceET.Actor_TransferResponse.decode,
		105 : NiceET.C2G_EnterMap.decode,
		106 : NiceET.G2C_EnterMap.decode,
		107 : NiceET.UnitInfo.decode,
		108 : NiceET.M2C_CreateUnits.decode,
		109 : NiceET.Frame_ClickMap.decode,
		110 : NiceET.M2C_PathfindingResult.decode,
		111 : NiceET.C2R_Ping.decode,
		112 : NiceET.R2C_Ping.decode,
		113 : NiceET.G2C_Test.decode,
		114 : NiceET.C2M_Reload.decode,
		115 : NiceET.M2C_Reload.decode,
		116 : NiceET.C2R_Login.decode,
		117 : NiceET.R2C_Login.decode,
		118 : NiceET.C2G_LoginGate.decode,
		119 : NiceET.G2C_LoginGate.decode,
		120 : NiceET.G2C_TestHotfixMessage.decode,
		121 : NiceET.C2M_TestActorRequest.decode,
		122 : NiceET.M2C_TestActorResponse.decode,
		123 : NiceET.PlayerInfo.decode,
		124 : NiceET.C2G_PlayerInfo.decode,
		125 : NiceET.G2C_PlayerInfo.decode,
	}
	public static decode(opcode:number, msg:Uint8Array):DecodeMsg {
		let msgObj = this.map[opcode](msg);
		let decodeMsg = new DecodeMsg();
		decodeMsg.rpcId = msgObj.RpcId;
		decodeMsg.msgObj = msgObj;
		return decodeMsg;
	}
}
