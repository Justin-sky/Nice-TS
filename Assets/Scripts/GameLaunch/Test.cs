using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NiceTS;

public class P
{
    public void TestP()
    {
        Log.Debug( LogGroups.Console, "TestＰ");
    }
}

public class Test:P
{
    public int a = 100;

    internal static Test _inst;
    public static Test inst
    {
        get
        {
            if (_inst == null)
            {
                _inst = new Test();
            }

            return _inst;
        }
       
    }

    public long testLong()
    {
        return -5544070116807168770;
    }

}