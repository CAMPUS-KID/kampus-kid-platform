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
    [Index(nameof(Site.name),nameof(Site.code), IsUnique = true)]
    public class Site
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id { get; set; }
        [Column(TypeName ="varchar(32)")]
        public string name { get; set; }
        [Column(TypeName = "varchar(16)")]
        public string code { get; set; }
        public virtual ICollection<Faculty> faculties { get; set; }
    }
}
