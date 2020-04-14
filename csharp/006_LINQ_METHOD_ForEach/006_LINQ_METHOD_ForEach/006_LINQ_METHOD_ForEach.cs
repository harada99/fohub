using System;
using System.Collections.Generic;
using System.Linq;
using static _006_LINQ_METHOD_ForEach.commonSysCls;

namespace _006_LINQ_METHOD_ForEach
{
    class persBaseCls
    {
        static void Main(string[] args)
        {
            List<persCls> persInfo = new List<persCls>()
            {
                new persCls {Id = 1001, Name = "OIKAWA", calcVal = 100, roleName = "AAA"},
                new persCls {Id = 1002, Name = "UCHINO", calcVal = 200, roleName = "AAA"},
                new persCls {Id = 1003, Name = "NOYAMA", calcVal = 300, roleName = "BBB"},
                new persCls {Id = 1004, Name = "HARADA", calcVal = 400, roleName = "BBB"},
                new persCls {Id = 1005, Name = "KOMEYAMA", calcVal = 500, roleName = "CCC"},
                new persCls {Id = 1006, Name = "KOMEYAMA", calcVal = 600, roleName = "CCC"}
            };

            //LINQメソッド式、ForEach、コンソール結果出力
            persInfo.ForEach(o => Console.WriteLine($"Id={o.Id}, Name={o.Name}, calcVal={o.calcVal}, roleName={o.roleName}"));
        }
    }
}
