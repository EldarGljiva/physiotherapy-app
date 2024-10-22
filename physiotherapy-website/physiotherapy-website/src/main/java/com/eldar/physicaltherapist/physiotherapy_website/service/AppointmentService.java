package com.eldar.physicaltherapist.physiotherapy_website.service;

import com.eldar.physicaltherapist.physiotherapy_website.entity.Appointment;
import com.eldar.physicaltherapist.physiotherapy_website.entity.TreatmentPlan;
import com.eldar.physicaltherapist.physiotherapy_website.entity.User;
import com.eldar.physicaltherapist.physiotherapy_website.repository.AppointmentRepository;
import com.eldar.physicaltherapist.physiotherapy_website.repository.TreatmentPlanRepository;
import com.eldar.physicaltherapist.physiotherapy_website.repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AppointmentService {
    private final AppointmentRepository appointmentRepository;
    private final UserRepository userRepository;
    private final TreatmentPlanRepository treatmentPlanRepository;

    // Create appointment
    public Appointment addAppointment(Appointment appointment) {
        if (appointment.getUser() == null || appointment.getUser().getUserId() == null) {
            throw new EntityNotFoundException("User not provided or user ID is null");
        }

        User user = userRepository.findById(appointment.getUser().getUserId())
                .orElseThrow(() -> new EntityNotFoundException("User not found"));

        TreatmentPlan treatmentPlan = treatmentPlanRepository.findById(appointment.getTreatmentPlan().getTreatmentPlanId())
                .orElseThrow(() -> new EntityNotFoundException("Treatment Plan not found"));

        appointment.setUser(user);
        appointment.setTreatmentPlan(treatmentPlan);

        return appointmentRepository.save(appointment);
    }

    // Check appointment by dateTime
    public boolean doesAppointmentExist(LocalDateTime dateTime) {
        List<Appointment> appointments = appointmentRepository.findAll();
        return appointments.stream()
                .anyMatch(appointment -> appointment.getDateTime().equals(dateTime));
    }

}
