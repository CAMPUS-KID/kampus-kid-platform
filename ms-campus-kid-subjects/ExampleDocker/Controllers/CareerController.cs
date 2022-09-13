using DataBase;
using Microsoft.AspNetCore.Mvc;

namespace ExampleDocker.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CareerController : ControllerBase
    {
        private SubjectsContext _context;
        public CareerController(SubjectsContext context)
        {
            _context = context;
        }
        [HttpGet]
        public IEnumerable<Career> Get() => _context.careers.ToList();
    }
}
