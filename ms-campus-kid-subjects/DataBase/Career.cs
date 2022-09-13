using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataBase
{
    public class Career
    {
        [Key]
        public string id_career { get; set; }
        public string career_name { get; set; }
        public string id_faculty { get; set; }
        [ForeignKey("id_faculty")]
        public virtual Faculty faculty { get; set; }

    }
}
