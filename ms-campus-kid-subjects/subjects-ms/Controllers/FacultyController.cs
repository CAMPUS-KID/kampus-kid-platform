using DataBase;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ExampleDocker.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FacultyController : ControllerBase
    {
        private SubjectsContext _context;

        public FacultyController(SubjectsContext context)
        {
            _context = context;
        }
        [HttpGet]
        public IEnumerable<Faculty> Get() => _context.faculties.ToList();
    }
}
