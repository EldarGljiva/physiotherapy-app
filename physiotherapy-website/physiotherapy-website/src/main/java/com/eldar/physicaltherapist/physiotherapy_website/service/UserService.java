package com.eldar.physicaltherapist.physiotherapy_website.service;

import com.eldar.physicaltherapist.physiotherapy_website.entity.User;
import com.eldar.physicaltherapist.physiotherapy_website.repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.security.core.userdetails.UserDetailsService;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;




    // Get user by id
    public User getUserById(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("User not found with id: " + id));
    }


    // Update user
    public User updateUser(Long id, User userDetails) {
        User existingUser = userRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("User not found with id: " + id));

        // Update fields as necessary
        existingUser.setEmail(userDetails.getEmail());
        existingUser.setPassword(userDetails.getPassword());
        existingUser.setUsername(userDetails.getUsername());
        existingUser.setRole(userDetails.getRole());

        return userRepository.save(existingUser);
    }

    // Delete user
    public void deleteUser(Long id) {
        User existingUser = userRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("User not found with id: " + id));

        userRepository.delete(existingUser);
    }

    public UserDetailsService userDetailsService() {
        return new UserDetailsService() {
            @Override
            public UserDetails loadUserByUsername(String usernameOrEmail) {
                return userRepository.findByUsernameOrEmail(usernameOrEmail)
                        .orElseThrow(() -> new UsernameNotFoundException("User not found."));
            }
        };
    }



}