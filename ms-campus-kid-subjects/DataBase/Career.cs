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
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int idCareer { get; set; }
        [Column(TypeName = "varchar(64)")]
        public string name { get; set; }
        public int idFaculty { get; set; }
        [ForeignKey("idFaculty")]
        public virtual Faculty faculty { get; set; }

    }
}
