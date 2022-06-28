#pragma warning disable CS8618
namespace BookBevyReact.Models;
using Microsoft.EntityFrameworkCore;

public class BookBevyContext : DbContext
{
  public BookBevyContext(DbContextOptions options) : base(options) { }

  public DbSet<User> Users { get; set; }
  public DbSet<Book> Books { get; set; }
  public DbSet<Association> Associations { get; set; }
}