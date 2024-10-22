package com.eldar.physicaltherapist.physiotherapy_website.service;

import com.eldar.physicaltherapist.physiotherapy_website.entity.TreatmentPlan;
import com.eldar.physicaltherapist.physiotherapy_website.repository.TreatmentPlanRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;


@Service
@RequiredArgsConstructor
public class TreatmentPlanService {
    private final TreatmentPlanRepository treatmentPlanRepository;

    // Create treatment plan
    public TreatmentPlan addTreatmentPlan(TreatmentPlan treatmentPlan) {
        return treatmentPlanRepository.save(treatmentPlan);
    }

    // Fetch all treatment plans
    public List<TreatmentPlan> getAllTreatmentPlans() {
        return treatmentPlanRepository.findAll();
    }
}
