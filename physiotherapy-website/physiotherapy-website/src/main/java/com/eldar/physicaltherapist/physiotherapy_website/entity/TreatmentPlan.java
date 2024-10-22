package com.eldar.physicaltherapist.physiotherapy_website.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Data
@JsonIgnoreProperties({"appointments", "hibernateLazyInitializer", "handler"})
public class TreatmentPlan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long treatmentPlanId;

    @NotNull
    private String title;

    @NotNull
    private String description;

    @Enumerated(EnumType.STRING)
    private TreatmentPlanType treatmentPlanType;  // Enum field

    @NotNull
    private Integer duration;  // Duration in days

    @OneToMany(mappedBy = "treatmentPlan", cascade = CascadeType.ALL, orphanRemoval = true)
    // cascade = CascadeType.ALL = any operations (persist, remove, update) done on the TreatmentPlan will cascade to its related entities.
    // orphanRemoval = true: If a related entity is removed from the collection, it will be deleted from the database automatically.
    @JsonIgnore
    private List<Appointment> appointments;
    // List of appointments associated with this treatment plan

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    // This annotation is used on a method that should be called before a new entity is persisted (saved) to the database.
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
