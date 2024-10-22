package com.eldar.physicaltherapist.physiotherapy_website.dto;

import com.eldar.physicaltherapist.physiotherapy_website.entity.User;
import com.eldar.physicaltherapist.physiotherapy_website.entity.Role;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

import java.time.LocalDateTime;

public class UserRequestDTO {

    private Role role;

    @NotBlank(message = "Username is required")
    @Size(min = 6, message = "Username must be at least 6 characters")
    private String username;

    @NotBlank(message = "Email is required")
    @Email(message = "Email should be valid")
    private String email;

    @NotBlank(message = "Password is required")
    @Size(min = 6, message = "Password must be at least 6 characters")
    private String password;

    public UserRequestDTO() { }

    public UserRequestDTO(User user) {
        this.role = user.getRole(); // Adapted to your entity
        this.username = user.getUsername();
        this.email = user.getEmail();
        this.password = user.getPassword(); // Include password only during creation

    }

    public User toEntity() {
        User user = new User();
        user.setRole(role);
        user.setUsername(username);
        user.setEmail(email);
        user.setPassword(password);
        user.setCreatedAt(LocalDateTime.now()); // Set creation date
        return user;
    }

    // Getters and setters
    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }


}
