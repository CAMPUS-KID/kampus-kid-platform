using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataBase
{
    public class CourseUpdateInput
    {
        public int id { get; set; }
        public string name { get; set; }
        public string description { get; set; }
        public string code { get; set; }
        public int facultyId { get; set; }
    }
}
