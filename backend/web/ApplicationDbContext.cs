using Microsoft.EntityFrameworkCore;
using web.Models;

namespace web
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<People> Peoples { get; set; }
        private readonly IConfiguration _configuration;

        public ApplicationDbContext(IConfiguration configuration)
        {
            _configuration = configuration;
        }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseNpgsql(_configuration.GetConnectionString("DefaultConnection"));
        }
        
    }
}