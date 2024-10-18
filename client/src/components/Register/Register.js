import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/register",
        formData
      );

      const token = response.data.jwt;
      localStorage.setItem("token", token);
      console.log("Registration successful, token saved:", token);

      // Clear the form
      setFormData({ email: "", password: "" });

      // Redirect to /home after login success
      navigate("/home");

      toast.success("Register successful!");
    } catch (error) {
      if (error.response) {
        // Server responded with a status other than 2xx
        console.error("Registration failed:", error.response.data);
        toast.error("An error occurred. Please try again.");
      } else {
        // Network error or some other issue
        console.error("Registration failed:", error.message);
      }
    }
  };
  return (
    <div style={{ backgroundColor: "#F7F7F7", height: "100vh" }}>
      <Container fluid className="h-100">
        <Row className="h-100 align-items-center justify-content-center">
          <Col md={6} className="d-flex justify-content-center">
            <Form className="register-form-container" onSubmit={handleSubmit}>
              <h2 className="text-center mb-4" style={{ color: "#2C3E50" }}>
                Register
              </h2>
              <Form.Group controlId="formUsername">
                <Form.Label className="register-form-label">
                  Username
                </Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                  required
                  value={formData.username} // this added because of onChange
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label className="register-form-label">Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formPassword">
                <Form.Label className="register-form-label">
                  Password
                </Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Register
              </Button>
              {/* Add the "Already have an account?" section here */}
              <p className="text-center mt-3" style={{ color: "#2C3E50" }}>
                Already have an account?{" "}
                <a
                  href="/login"
                  style={{ color: "#0d6efd", textDecoration: "none" }}
                >
                  Login
                </a>
              </p>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
