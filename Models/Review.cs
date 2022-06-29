#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


public class Review
{
    public int ReviewId {get; set; }

    [Required(ErrorMessage ="Rating Required")]
    [Range(0,5,  ErrorMessage ="Please add a rating")]
    [Display(Name = "Rating")]
    public double Rating {get; set; }

    [Required(ErrorMessage ="Review Required")]
    [MinLength(1,  ErrorMessage ="Please add a review")]
    [Display(Name = "Review Comments")]
    public string ReviewComments {get; set; }
    public int BookId {get; set; }
    public int UserId {get; set; }
}