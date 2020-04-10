using System;
using System.Collections.Generic;
using System.Linq;

namespace _003_LINQ_METHOD_CLASS_ALLAY
{
    class Program
    {
        static void Main(string[] args)
        {
            //県名の配列
            string[] prefs = { "福岡", "神奈川", "東京", "大阪", "鹿児島" };

            //県名の長さが3文字のものを選択し、ソートし、"県"を末尾に付加するLINQメソッド式
            var query = prefs.Where(s => s.Length == 3).OrderBy(s => s).Select(s => s + "県");

            //カンマを挟んで結果を出力、出力結果は、鹿児島県、神奈川県を出力
            Console.Write("【001_LINQ_メソッド式:string配列使用】\n");
            Console.WriteLine(string.Join(",", query));
            Console.Write("\n");

            //データ挿入
            Prefectures[] ItemArray;
            ItemArray = new Prefectures[5];

            ItemArray[0] = new Prefectures();
            ItemArray[0].Id = 1001;
            ItemArray[0].Name = "福岡";
            ItemArray[0].calcVal = 100;

            ItemArray[1] = new Prefectures();
            ItemArray[1].Id = 1002;
            ItemArray[1].Name = "神奈川";
            ItemArray[1].calcVal = 200;

            ItemArray[2] = new Prefectures();
            ItemArray[2].Id = 1003;
            ItemArray[2].Name = "東京";
            ItemArray[2].calcVal = 300;

            ItemArray[3] = new Prefectures();
            ItemArray[3].Id = 1004;
            ItemArray[3].Name = "大阪";
            ItemArray[3].calcVal = 400;

            ItemArray[4] = new Prefectures();
            ItemArray[4].Id = 1005;
            ItemArray[4].Name = "宮城";
            ItemArray[4].calcVal = 500;

            //Idの値が1003未満のものを抽出
            //IEnumerable<Prefectures> query2 = from s in ItemArray where s.Id < 1003 select s;
            IEnumerable<Prefectures> query2 = ItemArray.Where(s => s.Id < 1003).Select(s => s);

            //コンソール結果出力
            Console.Write("【002_LINQ_メソッド式:Class配列使用】\n");
            foreach(Prefectures n in query2)
            {
                Console.Write("{0} : {1:g}\r\n", n.Name, n.calcVal);
            }

        }
    }
}
