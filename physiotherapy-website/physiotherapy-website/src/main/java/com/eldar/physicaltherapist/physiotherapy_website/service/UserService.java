package com.eldar.physicaltherapist.physiotherapy_website.service;

import com.eldar.physicaltherapist.physiotherapy_website.entity.User;
import com.eldar.physicaltherapist.physiotherapy_website.repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    // Register user
    public User register(User user) {
        return userRepository.save(user);
    }

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
        existingUser.setFirstName(userDetails.getFirstName());
        existingUser.setLastName(userDetails.getLastName());
        existingUser.setRole(userDetails.getRole());

        return userRepository.save(existingUser);
    }

    // Delete user
    public void deleteUser(Long id) {
        User existingUser = userRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("User not found with id: " + id));

        userRepository.delete(existingUser);
    }

}
