using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NiceTS;

public class TestP
{
   
}


public class TestC 
{
    public delegate TestP PCreator();
    public static PCreator pCreator;  //PCreator


    public static TestP _P; 

    public static TestP getObj()
    {
        if (_P == null)
        {
            UnityEngine.Debug.LogWarning("null.....");
            _P = pCreator();
        }
        else
        {
            
        }
        UnityEngine.Debug.LogWarning(_P);

        return _P;
    }

    public static void SetPackageItemExtension(PCreator creator)
    {
        pCreator = creator;

    }
}

