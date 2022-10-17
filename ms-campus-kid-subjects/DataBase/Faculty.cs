using Microsoft.EntityFrameworkCore;
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
    [Index(nameof(Faculty.code), IsUnique = true)]
    public class Faculty
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id { get; set; }
        [Column(TypeName = "varchar(32)")]
        public string name { get; set; }
        [Column(TypeName = "varchar(16)")]
        public string code { get; set; }
        public virtual ICollection<Course> courses { get; set;}
        public virtual ICollection<Career> careers { get; set; }
        public int siteId { get; set; }
        [ForeignKey("siteId")]
        public virtual Site site { get; set; }
    }
}
