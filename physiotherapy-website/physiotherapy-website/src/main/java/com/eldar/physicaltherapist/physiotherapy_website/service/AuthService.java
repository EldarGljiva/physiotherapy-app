package com.eldar.physicaltherapist.physiotherapy_website.service;

import com.eldar.physicaltherapist.physiotherapy_website.exception.InvalidCredentialsException;
import com.eldar.physicaltherapist.physiotherapy_website.repository.UserRepository;
import com.eldar.physicaltherapist.physiotherapy_website.entity.User;

import org.springframework.security.core.AuthenticationException;

import com.eldar.physicaltherapist.physiotherapy_website.ResourceNotFoundException;

import com.eldar.physicaltherapist.physiotherapy_website.dto.LoginDTO;
import com.eldar.physicaltherapist.physiotherapy_website.dto.LoginRequestDTO;
import com.eldar.physicaltherapist.physiotherapy_website.dto.UserDTO;
import com.eldar.physicaltherapist.physiotherapy_website.dto.UserRequestDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;


@Service
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    @Autowired
    public AuthService(UserRepository userRepository, PasswordEncoder passwordEncoder, JwtService jwtService, AuthenticationManager authenticationManager) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
        this.authenticationManager = authenticationManager;
    }

    @Transactional
    public UserDTO signUp(UserRequestDTO userRequestDTO) {
        // Encode password and save user
        userRequestDTO.setPassword(passwordEncoder.encode(userRequestDTO.getPassword()));
        User user = userRepository.save(userRequestDTO.toEntity());

        // Generate JWT token for the registered user, include userId as a claim
        String jwt = jwtService.generateToken(new HashMap<>(), user, user.getId());

        // Return user details along with the token
        return new UserDTO(user, jwt);
    }

    public LoginDTO signIn(LoginRequestDTO loginRequestDTO) {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(loginRequestDTO.getEmail(), loginRequestDTO.getPassword())
            );
        } catch (AuthenticationException e) {
            throw new InvalidCredentialsException("Invalid email or password.");
        }

        User user = userRepository.findByEmail(loginRequestDTO.getEmail())
                .orElseThrow(() -> new ResourceNotFoundException("This user does not exist."));

        // Generate JWT token with userId as a claim
        String jwt = jwtService.generateToken(new HashMap<>(), user, user.getId());

        return new LoginDTO(jwt);
    }
}
