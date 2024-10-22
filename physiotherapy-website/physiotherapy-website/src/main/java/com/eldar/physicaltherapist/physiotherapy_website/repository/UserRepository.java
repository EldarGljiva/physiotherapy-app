package com.eldar.physicaltherapist.physiotherapy_website.repository;

import com.eldar.physicaltherapist.physiotherapy_website.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {
    @Query("SELECT u FROM User u WHERE u.username = ?1 OR u.email = ?1")
    // ?1 refers to the first method parameter
    // u stands for whole User entity
    Optional<User> findByUsernameOrEmail(String usernameOrEmail);

    Optional<User> findByEmail(String email); // Derived query method


}
