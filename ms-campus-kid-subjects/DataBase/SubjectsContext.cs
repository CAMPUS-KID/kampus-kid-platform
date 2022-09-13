using Microsoft.EntityFrameworkCore;

namespace DataBase
{
    public class SubjectsContext : DbContext
    {
        public SubjectsContext(DbContextOptions<SubjectsContext> options)
            : base(options)
        {

        }
        public DbSet<Faculty> faculties { get; set; }
        public DbSet<Site> sites { get; set; }
        public DbSet<Course> courses { get; set; } 
        public DbSet<Career> careers { get; set; }
        protected override void OnModelCreating(ModelBuilder modelbuilder)
        {
            modelbuilder.Entity<Faculty>().ToTable("Faculty");
            modelbuilder.Entity<Site>().ToTable("Site");
            modelbuilder.Entity<Course>().ToTable("Course");
            modelbuilder.Entity<Career>().ToTable("Career");
        }


    }
}