using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace web.Models;

public class People
{
    [Key]  [DatabaseGenerated(DatabaseGeneratedOption.Identity)] public int? Id { get; set; }
    [Required] public string First { get; set; }
    [Required] public string Last { get; set; }
}