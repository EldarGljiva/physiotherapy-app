import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Services.css";
import postSurgeryRehab from "../../assets/post-surgery-rehab.webp";

// Mapping of treatment plan titles to their respective images
const imageMapping = {
  "Post-Surgery Rehabilitation": postSurgeryRehab,
  "Physical Therapy": "https://example.com/image2.jpg",
  "Occupational Therapy": "https://example.com/image3.jpg",
  "Sports Rehabilitation": "https://example.com/image4.jpg",
  "Pain Management": "https://example.com/image5.jpg",
};

const Services = () => {
  const [treatmentPlans, setTreatmentPlans] = useState([]);

  useEffect(() => {
    const fetchTreatmentPlans = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/treatmentplan/"
        );
        console.log(response.data);
        setTreatmentPlans(response.data);
      } catch (error) {
        console.error("Error fetching treatment plans:", error);
      }
    };

    fetchTreatmentPlans();
  }, []);

  return (
    <div className="services-container">
      {treatmentPlans.map((plan) => (
        <div key={plan.treatmentPlanId} className="service-card">
          <img
            src={imageMapping[plan.title] || "https://via.placeholder.com/150"}
            alt={plan.title}
            className="service-image"
          />
          <h3>{plan.title}</h3>
          <p>{plan.description}</p>
          <p>
            <strong style={{ color: "#f5b041" }}>Duration:</strong>{" "}
            {plan.duration} days
          </p>
        </div>
      ))}
    </div>
  );
};

export default Services;
