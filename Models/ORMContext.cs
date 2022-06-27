#pragma warning disable CS8618

using Microsoft.EntityFrameworkCore;
namespace BookBevy.Models;

public class ORMContext : DbContext
{
    public ORMContext(DbContextOptions options) : base(options){  }

}