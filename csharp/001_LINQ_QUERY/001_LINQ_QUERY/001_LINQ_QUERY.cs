using System;
using System.Linq;

namespace _001_LINQ_QUERY
{
    class Program
    {
        static void Main(string[] args)
        {
            //県名の配列
            string[] prefs = { "福岡", "神奈川", "東京", "大阪", "鹿児島" };

            //県名の長さが3文字のものを選択し、ソートし、"県"を末尾に付加するLINQクエリ式
            var query = from s in prefs where s.Length == 3 orderby s select s + "県";

            //カンマを挟んで結果を出力、出力結果は、鹿児島県、神奈川県を出力
            Console.WriteLine(string.Join(",", query));
        }
    }
}
