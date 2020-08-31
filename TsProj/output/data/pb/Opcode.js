"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const OuterMessage_1 = require("./OuterMessage");
class Opcode {
}
Opcode.C2M_TESTREQUEST = 101;
Opcode.M2C_TESTRESPONSE = 102;
Opcode.ACTOR_TRANSFERREQUEST = 103;
Opcode.ACTOR_TRANSFERRESPONSE = 104;
Opcode.C2G_ENTERMAP = 105;
Opcode.G2C_ENTERMAP = 106;
Opcode.UNITINFO = 107;
Opcode.M2C_CREATEUNITS = 108;
Opcode.FRAME_CLICKMAP = 109;
Opcode.M2C_PATHFINDINGRESULT = 110;
Opcode.C2R_PING = 111;
Opcode.R2C_PING = 112;
Opcode.G2C_TEST = 113;
Opcode.C2M_RELOAD = 114;
Opcode.M2C_RELOAD = 115;
Opcode.C2R_LOGIN = 116;
Opcode.R2C_LOGIN = 117;
Opcode.C2G_LOGINGATE = 118;
Opcode.G2C_LOGINGATE = 119;
Opcode.G2C_TESTHOTFIXMESSAGE = 120;
Opcode.C2M_TESTACTORREQUEST = 121;
Opcode.M2C_TESTACTORRESPONSE = 122;
Opcode.PLAYERINFO = 123;
Opcode.C2G_PLAYERINFO = 124;
Opcode.G2C_PLAYERINFO = 125;
Opcode.map = {
    101: OuterMessage_1.NiceET.C2M_TestRequest.decode,
    102: OuterMessage_1.NiceET.M2C_TestResponse.decode,
    103: OuterMessage_1.NiceET.Actor_TransferRequest.decode,
    104: OuterMessage_1.NiceET.Actor_TransferResponse.decode,
    105: OuterMessage_1.NiceET.C2G_EnterMap.decode,
    106: OuterMessage_1.NiceET.G2C_EnterMap.decode,
    107: OuterMessage_1.NiceET.UnitInfo.decode,
    108: OuterMessage_1.NiceET.M2C_CreateUnits.decode,
    109: OuterMessage_1.NiceET.Frame_ClickMap.decode,
    110: OuterMessage_1.NiceET.M2C_PathfindingResult.decode,
    111: OuterMessage_1.NiceET.C2R_Ping.decode,
    112: OuterMessage_1.NiceET.R2C_Ping.decode,
    113: OuterMessage_1.NiceET.G2C_Test.decode,
    114: OuterMessage_1.NiceET.C2M_Reload.decode,
    115: OuterMessage_1.NiceET.M2C_Reload.decode,
    116: OuterMessage_1.NiceET.C2R_Login.decode,
    117: OuterMessage_1.NiceET.R2C_Login.decode,
    118: OuterMessage_1.NiceET.C2G_LoginGate.decode,
    119: OuterMessage_1.NiceET.G2C_LoginGate.decode,
    120: OuterMessage_1.NiceET.G2C_TestHotfixMessage.decode,
    121: OuterMessage_1.NiceET.C2M_TestActorRequest.decode,
    122: OuterMessage_1.NiceET.M2C_TestActorResponse.decode,
    123: OuterMessage_1.NiceET.PlayerInfo.decode,
    124: OuterMessage_1.NiceET.C2G_PlayerInfo.decode,
    125: OuterMessage_1.NiceET.G2C_PlayerInfo.decode,
};
exports.Opcode = Opcode;
//# sourceMappingURL=Opcode.js.map