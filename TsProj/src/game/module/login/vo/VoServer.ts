


export class VoServerItem{

    public areaId:number;
    public serverId:number;
    public serverName:string;
    public serverStatus:number;
}

export  class VoServer{

    public serverMap: Map<number, Array<VoServerItem>> = new Map<number, Array<VoServerItem>>();
    public areaMap:Map<number,string> = new Map<number, string>();
}