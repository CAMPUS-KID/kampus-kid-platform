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
        public int Id_Career { get; set; }
        [Column(TypeName = "varchar(64)")]
        public string Career_Name { get; set; }
        public int Id_Faculty { get; set; }
        [ForeignKey("Id_Faculty")]
        public virtual Faculty Faculty { get; set; }

    }
}
