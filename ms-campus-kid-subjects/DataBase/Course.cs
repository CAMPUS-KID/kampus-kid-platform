using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataBase
{
    public class Course
    {
        [Key]
        public string id_course { get; set; }
        public string course_name { get; set; }
        public string course_description { get; set; }
        public string id_faculty { get; set; }
        [ForeignKey("id_faculty")]
        public virtual Faculty Faculty { get; set; }

    }
}
