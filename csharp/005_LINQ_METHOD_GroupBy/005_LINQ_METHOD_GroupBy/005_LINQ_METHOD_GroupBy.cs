using System;
using System.Collections.Generic;
using System.Linq;

namespace _005_LINQ_METHOD_GroupBy
{
    class Program
    {
        static void Main(string[] args)
        {
            //データ挿入
            Prefectures[] ItemArray;
            ItemArray = new Prefectures[6];

            ItemArray[0] = new Prefectures();
            ItemArray[0].Id = 1001;
            ItemArray[0].Name = "OIKAWA";
            ItemArray[0].calcVal = 100;
            ItemArray[0].roleName = "AAA";

            ItemArray[1] = new Prefectures();
            ItemArray[1].Id = 1002;
            ItemArray[1].Name = "UCHINO";
            ItemArray[1].calcVal = 200;
            ItemArray[1].roleName = "AAA";

            ItemArray[2] = new Prefectures();
            ItemArray[2].Id = 1003;
            ItemArray[2].Name = "NOYAMA";
            ItemArray[2].calcVal = 300;
            ItemArray[2].roleName = "BBB";

            ItemArray[3] = new Prefectures();
            ItemArray[3].Id = 1001;
            ItemArray[3].Name = "HARADA";
            ItemArray[3].calcVal = 400;
            ItemArray[3].roleName = "BBB";

            ItemArray[4] = new Prefectures();
            ItemArray[4].Id = 1002;
            ItemArray[4].Name = "KOMEYAMA";
            ItemArray[4].calcVal = 500;
            ItemArray[4].roleName = "CCC";

            ItemArray[5] = new Prefectures();
            ItemArray[5].Id = 1003;
            ItemArray[5].Name = "KOMEYAMA";
            ItemArray[5].calcVal = 600;
            ItemArray[5].roleName = "CCC";

            //roleNameグループ毎に平均値を取得(GroupBy)
            IEnumerable<IGrouping<string, Prefectures>> query2 = ItemArray.GroupBy(o => o.roleName);

            //コンソール結果出力
            foreach (IGrouping<string, Prefectures> group in query2)
            {
                int total = 0;
                foreach (Prefectures item in group)
                {
                    total += item.calcVal;
                }
                Console.WriteLine("Category=" + group.Key + " Average=" + (total / group.Count()));
            }
        }
    }
}
