using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using web.Models;

namespace web.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PeopleController : ControllerBase
    {
        private readonly ApplicationDbContext _dbContext;

        public PeopleController(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<People>>> GetPeoples()
        {
            var peoples = await _dbContext.Peoples.ToListAsync();
            return Ok(peoples);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<People>> GetPeople(int id)
        {
            var people = await _dbContext.Peoples.FindAsync(id);

            if (people == null)
            {
                return NotFound();
            }

            return Ok(people);
        }

        [HttpPost]
        public async Task<ActionResult<People>> AddPeople(People people)
        {
            _dbContext.Peoples.Add(people);
            await _dbContext.SaveChangesAsync();

            return CreatedAtAction(nameof(GetPeople), new { id = people.Id }, people);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeletePeople(int id)
        {
            var people = await _dbContext.Peoples.FindAsync(id);

            if (people == null)
            {
                return NotFound();
            }

            _dbContext.Peoples.Remove(people);
            await _dbContext.SaveChangesAsync();

            return NoContent();
        }
    }
}