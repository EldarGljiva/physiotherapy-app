package com.eldar.physicaltherapist.physiotherapy_website.entity;

import lombok.Getter;

@Getter
public enum TreatmentPlanType {
    REHABILITATION("Rehabilitation Program"),
    PHYSICAL_THERAPY("Physical Therapy"),
    OCCUPATIONAL_THERAPY("Occupational Therapy"),
    SPORTS_REHAB("Sports Rehabilitation"),
    PAIN_MANAGEMENT("Pain Management");

    private final String displayName;

    TreatmentPlanType(String displayName) {
        this.displayName = displayName;
    }

}
