package com.eldar.physicaltherapist.physiotherapy_website.repository;

import com.eldar.physicaltherapist.physiotherapy_website.entity.Appointment;
import com.eldar.physicaltherapist.physiotherapy_website.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Long> {

}
