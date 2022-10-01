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
        public int idFaculty { get; set; }
        [Column(TypeName = "varchar(32)")]
        public string name { get; set; }
        [Column(TypeName = "varchar(16)")]
        public string code { get; set; }
        public virtual ICollection<Course> courses { get; set;}
        public virtual ICollection<Career> careers { get; set; }
        public int idSite { get; set; }
        [ForeignKey("idSite")]
        public virtual Site site { get; set; }
    }
}
