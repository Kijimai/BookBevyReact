#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;

public class Book
{
    [Key]

    public int BookId {get; set; }
}