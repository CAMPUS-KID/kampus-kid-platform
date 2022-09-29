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
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id_Course { get; set; }
        [Column(TypeName = "varchar(64)")]
        public string Course_Name { get; set; }
        [Column(TypeName = "varchar(256)")]
        public string Course_Description { get; set; }
        [Column(TypeName = "varchar(16)")]
        public string Course_Code { get; set; }
        public int Id_Faculty { get; set; }
        [ForeignKey("Id_Faculty")]
        public virtual Faculty Faculty { get; set; }

    }
}
