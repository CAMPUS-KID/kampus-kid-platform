using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataBase
{
    public class Faculty
    {
        [Key]
        public string id_faculty { get; set; }
        public string id_site { get; set; }
        public string faculty_name { get; set; }
        public virtual ICollection<Course> courses { get; set;}
        public virtual ICollection<Career> careers { get; set; }
        [ForeignKey("id_site")]
        public virtual Site Site { get; set; }
    }
}
