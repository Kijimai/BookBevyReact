#pragma warning disable CS8618
namespace BookBevyReact.Models;
using Microsoft.EntityFrameworkCore;

public class ORMContext : DbContext
{
  public ORMContext(DbContextOptions options) : base(options) { }

}