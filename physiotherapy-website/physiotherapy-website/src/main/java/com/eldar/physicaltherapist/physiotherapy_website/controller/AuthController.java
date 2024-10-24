package com.eldar.physicaltherapist.physiotherapy_website.controller;

import com.eldar.physicaltherapist.physiotherapy_website.dto.*;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.*;

import com.eldar.physicaltherapist.physiotherapy_website.service.AuthService;


import com.eldar.physicaltherapist.physiotherapy_website.exception.InvalidCredentialsException;

@RestController
@RequestMapping("api/auth")
public class AuthController {
    private final AuthService authService;


    public AuthController(AuthService authService) {
        this.authService = authService;
    }


    @PostMapping("/register")
    public ResponseEntity<?> register(@Valid @RequestBody UserRequestDTO user) {
        try {
            return ResponseEntity.ok(authService.signUp(user));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }


    @RequestMapping(method = RequestMethod.POST, path = "/login")
    public ResponseEntity<?> login(@RequestBody LoginRequestDTO loginRequest) {
        try {
            LoginDTO loginDTO = authService.signIn(loginRequest);
            return ResponseEntity.ok(loginDTO);
        } catch (InvalidCredentialsException e) {
            // Return 401 Unauthorized status with the error message
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
        } catch (Exception e) {
            // Handle any other exceptions that may occur
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred during login.");
        }
    }
}

