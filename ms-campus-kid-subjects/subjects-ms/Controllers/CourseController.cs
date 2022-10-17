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
        public async Task<ActionResult<Course>> saveCourse(CourseInput course)
        {   
            Course course1 = new Course();
            course1.description = course.description;
            course1.name = course.name;
            course1.code = course.code;
            course1.facultyId = course.facultyId;
            _context.courses.Add(course1);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(getCourseById), new { id = course.name }, course);
        }
        [HttpPut]
        public async Task<ActionResult<Course>> updateCourse(CourseUpdateInput course)
        {
            var id = course.id;
            var courseItem = await _context.courses.FindAsync(id);
            if (courseItem == null)
            {
                return NotFound();
            }
            courseItem.name = course.name;
            courseItem.description = course.description;
            courseItem.code = course.code;
            courseItem.facultyId = course.facultyId;
            try
            {
                await _context.SaveChangesAsync();
            }
            catch(DbUpdateConcurrencyException) 
            {
                return NotFound();   
            }
            return Ok(courseItem);

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
            return  Ok(item.id+" deleted");
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
