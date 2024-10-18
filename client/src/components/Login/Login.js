import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        formData
      );

      const token = response.data.jwt;
      localStorage.setItem("token", token);
      console.log("Login successful, token saved:", token);

      // Clear the form
      setFormData({ email: "", password: "" });

      // Redirect to /home after login success
      navigate("/home");

      toast.success("Login successful!");
    } catch (error) {
      if (error.response) {
        // Server responded with a status other than 2xx
        console.error("Login failed:", error.response.data);
        toast.error("An error occurred. Please try again.");
      } else {
        // Network error or some other issue
        console.error("Login failed:", error.message);
      }
    }
  };

  return (
    <div style={{ backgroundColor: "#F7F7F7", height: "100vh" }}>
      <Container fluid className="h-100">
        <Row className="h-100 align-items-center justify-content-center">
          <Col md={6} className="d-flex justify-content-center">
            <Form className="login-form-container" onSubmit={handleSubmit}>
              <h2 className="text-center mb-4" style={{ color: "#2C3E50" }}>
                Login
              </h2>

              <Form.Group controlId="formEmail">
                <Form.Label className="login-form-label">Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  required
                  value={formData.email} // this added because of onChange
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formPassword">
                <Form.Label className="login-form-label">Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  required
                  value={formData.password} // this added because of onChange
                  onChange={handleChange}
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Login
              </Button>
              {/* Add the "Already have an account?" section here */}
              <p className="text-center mt-3" style={{ color: "#2C3E50" }}>
                Don't have an account?
                <a
                  href="/register"
                  style={{ color: "#0d6efd", textDecoration: "none" }}
                >
                  Register
                </a>
              </p>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
