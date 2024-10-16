package com.eldar.physicaltherapist.physiotherapy_website.dto;

import com.eldar.physicaltherapist.physiotherapy_website.entity.Role;
import com.eldar.physicaltherapist.physiotherapy_website.entity.User;

import java.time.LocalDateTime;

public class UserDTO {
    private Long userId;            // Use Long since it's the type in your entity
    private String username;         // Keep username
    private String email;            // Keep email
    private Role role;               // Keep role, use Role type directly
    private LocalDateTime createdAt; // Use LocalDateTime for creation date
    private LocalDateTime updatedAt; // Include updatedAt if needed
    private String jwt;

    public UserDTO(User user, String jwt) {
        this.userId = user.getUserId();
        this.username = user.getUsername();
        this.email = user.getEmail();
        this.role = user.getRole();
        this.createdAt = user.getCreatedAt();
        this.updatedAt = user.getUpdatedAt(); // Include if necessary
        this.jwt = jwt;  // Fix this line, remove "this.jwt = this.jwt"
    }


    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
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

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(LocalDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }

    public String getJwt() {
        return jwt;
    }

    public void setJwt(String jwt){this.jwt=jwt;}

}
