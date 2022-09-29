using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataBase
{
    public class Faculty
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id_Faculty { get; set; }
        [Column(TypeName = "varchar(32)")]
        public string Faculty_Name { get; set; }
        [Column(TypeName = "varchar(16)")]
        public string Faculty_Code { get; set; }
        public virtual ICollection<Course> courses { get; set;}
        public virtual ICollection<Career> careers { get; set; }
        public int Id_Site { get; set; }
        [ForeignKey("Id_Site")]
        public virtual Site Site { get; set; }
    }
}
