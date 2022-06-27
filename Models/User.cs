#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class User
{
    [Key]
    public int UserId {get; set;}

    [Required(ErrorMessage ="First Name Required")]
    [MinLength(3, ErrorMessage ="Please add a First Name of atleast 3 characters")]
    [Display(Name = "First Name")]
    public string FirstName {get; set; }

    [Required(ErrorMessage ="Last Name Required")]
    [MinLength(3, ErrorMessage ="Please add a Last Name of atleast 3 characters")]
    [Display(Name = "Last Name")]
    public string LastName {get; set; }

    [Required(ErrorMessage = "Username is required")]
    [MinLength(3, ErrorMessage ="Please make username atleast 3 characters")]
    [Display(Name ="UserName")]
    public string UserName {get; set; }

    [Required(ErrorMessage = "is required.")]
    [EmailAddress]
    public string Email { get; set; }

    [Required(ErrorMessage = "is required.")]
    [MinLength(8, ErrorMessage = "must be at least 8 characters.")]
    [DataType(DataType.Password)]
    public string Password { get; set; }

    [NotMapped]
    [DataType(DataType.Password)]
    [Compare("Password", ErrorMessage = "Must match password")]
    public string ConfirmPassword {get; set; }

    public DateTime CreatedAt {get; set; } = DateTime.Now;
    public DateTime UpdatedAt {get; set; } = DateTime.Now;


}