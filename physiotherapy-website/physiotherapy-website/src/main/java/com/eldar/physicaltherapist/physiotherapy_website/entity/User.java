package com.eldar.physicaltherapist.physiotherapy_website.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.time.LocalDateTime;


@Entity
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // IDENTITY means that database will generate id automatically by incrementing the value by 1
    private Long userId;

    @Email
    @NotNull
    private String email;

    @NotNull
    private String password;

    @NotNull
    private String firstName;

    @NotNull
    private String lastName;

    @Enumerated(EnumType.STRING)
    private Role role;

    private LocalDateTime createdAt;

    private LocalDateTime  updatedAt;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
        updatedAt = LocalDateTime.now();
    }

    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }

}
