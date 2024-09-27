package com.eldar.physicaltherapist.physiotherapy_website.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Data
public class TreatmentPlan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long treatmentPlanId;

    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;

    private String title;
    private String description;

    private LocalDateTime startDate; // Start date of the treatment
    private LocalDateTime endDate; // End date of the treatment

    // One TreatmentPlan can have multiple Appointments; changes to TreatmentPlan affect all associated Appointments.
    @OneToMany(mappedBy = "treatmentPlan", cascade = CascadeType.ALL)
    private List<Appointment> appointments;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
        updatedAt = LocalDateTime.now();
    }

    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }
}
