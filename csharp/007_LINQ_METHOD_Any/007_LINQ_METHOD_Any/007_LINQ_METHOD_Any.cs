using System;
using System.Collections.Generic;
using System.Linq;
using static _007_LINQ_METHOD_Any.commonSysCls;

namespace _007_LINQ_METHOD_Any
{
    public static class persBaseCls
    {
        static void Main(string[] args)
        {
            List<persCls> persInfoA = new List<persCls>()
            {
                new persCls {Id = 1001, Name = "OIKAWA", calcVal = 100, roleName = "AAA"},
                new persCls {Id = 1002, Name = "UCHINO", calcVal = 200, roleName = "AAA"},
                new persCls {Id = 1003, Name = "NOYAMA", calcVal = 300, roleName = "BBB"},
                new persCls {Id = 1004, Name = "HARADA", calcVal = 400, roleName = "BBB"},
                new persCls {Id = 1005, Name = "KOMEYAMA", calcVal = 500, roleName = "CCC"},
                new persCls {Id = 1006, Name = "KOMEYAMA", calcVal = 600, roleName = "CCC"}
            };

            List<persCls> persInfoB = new List<persCls>()
            {

            };

            bool resultA = persInfoA.Any();
            bool resultB = persInfoB.Any();

            //単独内容検索
            var query = persInfoA.SingleOrDefault(s => s.Id == 1002);

            //LINQメソッド式、Any、コンソール結果出力
            System.Console.WriteLine("{0} : {1:g}", query.Name, query.calcVal);
            System.Console.WriteLine("persInfoAの要素有無:{0}", resultA);
            System.Console.WriteLine("persInfoBの要素有無:{0}", resultB);
        }
    }
}
