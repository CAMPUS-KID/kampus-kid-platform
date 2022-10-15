using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataBase
{
    [Index(nameof(Course.code), IsUnique = true)]
    public class Course
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id { get; set; }
        [Column(TypeName = "varchar(64)")]
        public string name { get; set; }
        [Column(TypeName = "varchar(256)")]
        public string description { get; set; }
        [Column(TypeName = "varchar(16)")]
        public string code { get; set; }
        public int facultyId { get; set; }
        [ForeignKey("facultyId")]
        public virtual Faculty faculty { get; set; }

    }
}
