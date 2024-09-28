package com.eldar.physicaltherapist.physiotherapy_website.repository;

import com.eldar.physicaltherapist.physiotherapy_website.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
}
