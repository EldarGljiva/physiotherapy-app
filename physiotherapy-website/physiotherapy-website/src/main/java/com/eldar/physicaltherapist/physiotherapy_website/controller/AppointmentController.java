package com.eldar.physicaltherapist.physiotherapy_website.controller;

import com.eldar.physicaltherapist.physiotherapy_website.entity.Appointment;
import com.eldar.physicaltherapist.physiotherapy_website.service.AppointmentService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

@RestController
@RequestMapping("/api/appointments")
@RequiredArgsConstructor
@CrossOrigin("*")
public class AppointmentController {
    private final AppointmentService appointmentService;

    // Create appointment
    @CrossOrigin(origins = "*")
    @PostMapping
    public ResponseEntity<?> addAppointment(@RequestBody Appointment appointment) {
        try {
            Appointment newAppointment = appointmentService.addAppointment(appointment);
            return new ResponseEntity<>(newAppointment, HttpStatus.CREATED);
        } catch (EntityNotFoundException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>("An error occurred: " + e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/check")
    public ResponseEntity<Boolean> checkAppointment(@RequestParam String dateTime) {
        try {
            LocalDateTime appointmentDateTime = LocalDateTime.parse(dateTime);
            boolean exists = appointmentService.doesAppointmentExist(appointmentDateTime);
            return new ResponseEntity<>(exists, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(false, HttpStatus.BAD_REQUEST);
        }
    }


}