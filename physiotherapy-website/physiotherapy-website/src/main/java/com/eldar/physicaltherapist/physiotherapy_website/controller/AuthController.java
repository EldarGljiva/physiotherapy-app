package com.eldar.physicaltherapist.physiotherapy_website.controller;

import com.eldar.physicaltherapist.physiotherapy_website.dto.LoginDTO;
import com.eldar.physicaltherapist.physiotherapy_website.dto.LoginRequestDTO;
import com.eldar.physicaltherapist.physiotherapy_website.dto.UserDTO;
import com.eldar.physicaltherapist.physiotherapy_website.dto.UserRequestDTO;
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
    public ResponseEntity<UserDTO> register(@Valid @RequestBody UserRequestDTO user) {
        return ResponseEntity.ok(authService.signUp(user));
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

