import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
  });
  const [treatmentPlans, setTreatmentPlans] = useState([]);
  const [treatmentPlanId, setTreatmentPlanId] = useState(null);
  const [userId, setUserId] = useState(null);
  const [status] = useState("SCHEDULED");
  const navigate = useNavigate();

  // Define the token in the component scope so it's accessible
  const storedToken = localStorage.getItem("token");
  console.log("Token:", storedToken);
  const payload = JSON.parse(atob(storedToken.split(".")[1]));
  console.log("Decoded JWT Payload:", payload);

  const extractUserIdFromToken = (token) => {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload.userId; // Extract userId
  };

  useEffect(() => {
    const fetchTreatmentPlans = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/treatmentplan/"
        );
        setTreatmentPlans(response.data);
      } catch (error) {
        console.error("Error fetching treatment plans:", error);
        toast.error("Failed to fetch treatment plans.");
      }
    };

    if (storedToken) {
      const id = extractUserIdFromToken(storedToken);
      setUserId(id);
      console.log("User ID:", id);
    }

    fetchTreatmentPlans();
  }, [storedToken]); // Add storedToken as dependency to useEffect

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const date_time = `${formData.date}T${formData.time}`;
    const appointmentData = {
      user: {
        userId: userId,
      },
      status: status,
      dateTime: date_time,
      treatmentPlan: {
        treatmentPlanId: treatmentPlanId,
      },
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/api/appointments",
        appointmentData,
        {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        }
      );

      console.log("Appointment created successfully:", response.data);
      toast.success("Appointment created successfully!");
      navigate("/home");
    } catch (error) {
      console.error("Error creating appointment:", error);
      toast.error("An error occurred while creating the appointment.");
    }
  };

  return (
    <div style={{ backgroundColor: "#F7F7F7", height: "100vh" }}>
      <Container fluid className="h-100">
        <Row className="h-100 align-items-center justify-content-center">
          <Col md={6} className="d-flex justify-content-center">
            <Form className="login-form-container" onSubmit={handleSubmit}>
              <h2 className="text-center mb-4" style={{ color: "#2C3E50" }}>
                Schedule Appointment
              </h2>

              <Form.Group controlId="formTreatmentPlan">
                <Form.Label className="login-form-label">
                  Treatment Plan
                </Form.Label>
                <Form.Control
                  as="select"
                  required
                  onChange={(e) => setTreatmentPlanId(e.target.value)}
                >
                  <option value="">Select a treatment plan</option>
                  {Array.isArray(treatmentPlans) &&
                  treatmentPlans.length > 0 ? (
                    treatmentPlans.map((plan) => (
                      <option
                        key={plan.treatmentPlanId}
                        value={plan.treatmentPlanId}
                      >
                        {plan.title}
                      </option>
                    ))
                  ) : (
                    <option value="">No treatment plans available</option>
                  )}
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="formDate">
                <Form.Label className="login-form-label">Date</Form.Label>
                <Form.Control
                  type="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formTime">
                <Form.Label className="login-form-label">Time</Form.Label>
                <Form.Control
                  type="time"
                  name="time"
                  required
                  value={formData.time}
                  onChange={handleChange}
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Schedule Appointment
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AppointmentForm;
