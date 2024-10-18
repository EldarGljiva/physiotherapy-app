package com.eldar.physicaltherapist.physiotherapy_website.controller;

import com.eldar.physicaltherapist.physiotherapy_website.entity.TreatmentPlan;
import com.eldar.physicaltherapist.physiotherapy_website.service.TreatmentPlanService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@RestController
@RequestMapping("/api/treatmentplan")
@RequiredArgsConstructor // Automatically generates a constructor with required arguments
@CrossOrigin("*") // Enables requests from all origins
public class TreatmentPlanController {
    private final TreatmentPlanService treatmentPlanService;

    // Add treatment plan
    @PostMapping
    public ResponseEntity<?> addTreatmentPlan(@RequestBody TreatmentPlan treatmentPlan) {
        System.out.println("Received request: " + treatmentPlan);
        try {
            TreatmentPlan newTreatmentPlan = treatmentPlanService.addTreatmentPlan(treatmentPlan);
            return new ResponseEntity<>("Added Successfully!", HttpStatus.CREATED);
        } catch (EntityNotFoundException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>("An error occurred: " + e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/")
    public ResponseEntity<List<TreatmentPlan>> getAllTreatmentPlans() {
        List<TreatmentPlan> treatmentPlans = treatmentPlanService.getAllTreatmentPlans();
        return new ResponseEntity<>(treatmentPlans, HttpStatus.OK);
    }
}
