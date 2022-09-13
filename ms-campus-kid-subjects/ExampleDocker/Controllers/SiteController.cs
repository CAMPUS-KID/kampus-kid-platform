using DataBase;
using Microsoft.AspNetCore.Mvc;

namespace ExampleDocker.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SiteController : ControllerBase
    {
       private SubjectsContext _context;
       public SiteController(SubjectsContext context)
        {
            _context = context;
        }
        [HttpGet]
        public IEnumerable<Site> Get() => _context.sites.ToList();
    }
}
