using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NiceTS;
using Puerts;

public class TestP
{
   
}


public class TestC 
{
    public static JSObject jsObject;


    public static JSObject getObj()
    {

        return jsObject;
    }

    public static void SetPackageItemExtension(JSObject creator)
    {
        jsObject = creator;

    }
}

