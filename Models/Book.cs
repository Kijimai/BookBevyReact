#pragma warning disable CS8618
namespace BookBevyReact.Models;
using System.ComponentModel.DataAnnotations;

public class Book
{
    [Key]

    public int BookId {get; set; }
}