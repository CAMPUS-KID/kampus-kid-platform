using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataBase
{
    public class Site
    {
        [Key]
        public string id_site { get; set; }
        public string site_name { get; set; }
        public virtual ICollection<Faculty> faculties { get; set; }
    }
}
