#pragma warning disable CS8618
namespace BookBevyReact.Models;
using System.ComponentModel.DataAnnotations;

public class Association
{
  [Key]
  public int AssociationId { get; set; }

  public int UserId { get; set; }

  public User? Reader { get; set; }
}