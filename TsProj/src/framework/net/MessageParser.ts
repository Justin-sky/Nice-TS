
export class MessageParser{


    public static encodeInt(n:number):Uint8Array{

        let buffer:Uint8Array = new Uint8Array(4);
        buffer[0] = n >>> 24;
        buffer[1] = n >>> 16;
        buffer[2] = n >>> 8;
        buffer[3] = n & 0xff;

        return buffer
    }

    public static decodeInt(buffer:Uint8Array):number{
        
        let n = buffer[0] << 24 | buffer[1] << 16 | buffer[2] << 8 | buffer[3];

        return n;
    }


    public static encodeShort(n:number):Uint8Array{

        let buffer : Uint8Array = new Uint8Array(2);
        buffer[0] = n >>> 8;
        buffer[1] = n & 0xff;

        return buffer;
    }


    public static decodeShort(buffer:Uint8Array):number{

        let n = buffer[0] << 8 | buffer[1];

        return n;
    }


    public static encodeByte(n:number):Uint8Array{

        let buffer : Uint8Array = new Uint8Array(1)
        buffer[0] = n & 0xff;

        return buffer;
    }

    public static decodeByte(buffer:Uint8Array):number{

        let n = buffer[0];

        return n;
    }



}