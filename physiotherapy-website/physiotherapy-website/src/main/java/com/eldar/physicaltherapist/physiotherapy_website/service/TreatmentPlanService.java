package com.eldar.physicaltherapist.physiotherapy_website.service;

import com.eldar.physicaltherapist.physiotherapy_website.entity.TreatmentPlan;
import com.eldar.physicaltherapist.physiotherapy_website.repository.TreatmentPlanRepository;
import com.eldar.physicaltherapist.physiotherapy_website.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class TreatmentPlanService {
    private final TreatmentPlanRepository treatmentPlanRepository;
    private final UserRepository userRepository;

    // Create treatment plan
    public TreatmentPlan addTreatmentPlan(TreatmentPlan treatmentPlan) {
        return treatmentPlanRepository.save(treatmentPlan);
    }
}
