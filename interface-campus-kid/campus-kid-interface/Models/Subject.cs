using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace campus.Models
{
    public class Subject
    {
        public int id { get; }
        public string name { get; set; }
        public string description { get; set; }
        public string code { get; set; }
    }
}