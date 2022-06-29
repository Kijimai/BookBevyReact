#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


public class Review
{
    public int ReviewId {get; set; }

    public double Rating {get; set; }
    public string ReviewComments {get; set; }
    public int BookId {get; set; }
    public int UserId {get; set; }
}