using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NiceTS
{
    public class ErrorCode
    {
        public const int ERR_SocketConnSucc = 100000;

        public const int ERR_PeerDisconnect  = 102008;
        public const int ERR_SocketCantSend  = 102009;
        public const int ERR_SocketError     = 102010;
        public const int ERR_SocketConnError = 102011;

    }
}
