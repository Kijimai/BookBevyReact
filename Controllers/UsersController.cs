using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using BookBevyReact.Models;
using Microsoft.AspNetCore.Identity;

namespace BookBevyReact.Controllers;

public class UsersController : Controller
{
    private BookBevyContext _context;

    public UsersController(BookBevyContext context)
    {
        _context = context;
    }

            private int? uid
    {
        get
        {
        return HttpContext.Session.GetInt32("UserId");
        }
    }
    private bool loggedIn
    {
        get
        {
            return uid != null;
        }
    }
    // Post route for putting account info into our db
            [HttpPost("/register")]
    public IActionResult Register(User newUser)
    {
        if (ModelState.IsValid == false)
        {
            // we need to redirect to react route here if the model state is not valid
        }
        if (_context.Users.Any(User => User.Email == newUser.Email))
        if (_context.Users.Any(User => User.UserName == newUser.UserName))
        {
            ModelState.AddModelError("Email", "is already in use");
        }

        PasswordHasher<User> hashedPW = new PasswordHasher<User>();
        newUser.Password = hashedPW.HashPassword(newUser, newUser.Password);
        
        _context.Users.Add(newUser);
        _context.SaveChanges();

        HttpContext.Session.SetInt32("UserId", newUser.UserId);

        return RedirectToAction("", "");
    }
}