using DataBase;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
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
        public IEnumerable<Course> get() => _context.courses.ToList();
        [HttpGet("{id}")]
        public async Task<ActionResult<Course>> getCourseById(int id)
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

            return CreatedAtAction(nameof(getCourseById), new { id = course.idCourse }, course);
        }
        [HttpPut("{id}")]
        public async Task<ActionResult<Course>> updateCourse(int id, Course course)
        {
            if(id != course.idCourse)
            {
                return BadRequest();
            }
            _context.Entry(course).State = EntityState.Modified;
            try
            {
                await _context.SaveChangesAsync();
            }
            catch(DbUpdateConcurrencyException)
            {
                if (!(_context.courses.Any(e => e.idCourse == id))) {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            return NoContent();
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> deleteCourse(int id)
        {
            var item = await _context.courses.FindAsync(id);
            if(item == null)
            {
                return NotFound();
            }

            _context.courses.Remove(item);
            await _context.SaveChangesAsync();
            return NoContent();
        }
        [HttpGet]
        [Route("Search")]
        public async Task<IEnumerable<Course>> courseSearch(string query)
        {
            IQueryable<Course> courseList = _context.courses;

            if (!String.IsNullOrEmpty(query)){
                courseList = courseList.Where(e => e.name.Contains(query) || e.code.Contains(query) || e.description.Contains(query));
            }
            return await courseList.ToListAsync();
        }
    }
}
