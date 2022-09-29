using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataBase
{
    public class Site
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id_Site { get; set; }
        [Column(TypeName ="varchar(32)")]
        public string Site_Name { get; set; }
        [Column(TypeName = "varchar(16)")]
        public string Site_Code { get; set; }
        public virtual ICollection<Faculty> faculties { get; set; }
    }
}
