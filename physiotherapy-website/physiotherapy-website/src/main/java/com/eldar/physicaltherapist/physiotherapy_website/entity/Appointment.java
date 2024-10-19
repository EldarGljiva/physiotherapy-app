package com.eldar.physicaltherapist.physiotherapy_website.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Data
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Appointment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long appointmentId;

    @ManyToOne // Many appointments can belong to one user
    @JoinColumn(name = "user_id", nullable = false) // Foreign key column
    private User user;  // Reference to User

    @Enumerated(EnumType.STRING)
    private Status status;

    @NotNull
    private LocalDateTime dateTime;

    @ManyToOne // Many appointments can belong to one treatment plan
    @JoinColumn(name = "treatment_plan_id", nullable = false) // Foreign key column
    private TreatmentPlan treatmentPlan;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
        updatedAt = LocalDateTime.now();

        this.status = Status.SCHEDULED;
    }

    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }
}