using Microsoft.AspNetCore.Identity;

public class User : IdentityUser {
    public string? Name { get; set; }
    public string? Email { get; set; }
    public string? Password { get; set; }
    public int? Height { get; set; }
    public int? Weight { get; set; }
    public DateTime? Birthdate { get; set; }
}