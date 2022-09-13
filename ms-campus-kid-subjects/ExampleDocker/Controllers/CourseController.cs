using DataBase;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ExampleDocker.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CourseController : ControllerBase
    {
        private SubjectsContext _context;
        public CourseController(SubjectsContext context)
        {
            _context = context;
        }
        [HttpGet]
        public IEnumerable<Course> Get() => _context.courses.ToList();
        [HttpGet("{id}")]
        public async Task<ActionResult<Course>> getCourseById(string id)
        {
            var courseItem = await _context.courses.FindAsync(id);
            if (courseItem == null)
            {
                return NotFound();
            }
            return courseItem;
        }
        [HttpPost]
        [Route("Save")]
        public async Task<ActionResult<Course>> saveCourse(Course course)
        {

            _context.courses.Add(course);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(getCourseById), new { id = course.id_course }, course);
        }
        [HttpGet]
        [Route("Search")]
        public async Task<IEnumerable<Course>> courseSearch(string query)
        {
            IQueryable<Course> courseList = _context.courses;

            if (!String.IsNullOrEmpty(query)){
                courseList = courseList.Where(e => e.course_name.Contains(query));
            }
            return await courseList.ToListAsync();
        }
    }
}
