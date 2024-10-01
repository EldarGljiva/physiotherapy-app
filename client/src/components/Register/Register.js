import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Register.css";

const Register = () => {
  return (
    <div style={{ backgroundColor: "#F7F7F7", height: "100vh" }}>
      <Container fluid className="h-100">
        <Row className="h-100 align-items-center justify-content-center">
          <Col md={6} className="d-flex justify-content-center">
            <Form className="register-form-container">
              <h2 className="text-center mb-4" style={{ color: "#2C3E50" }}>
                Register
              </h2>
              <Form.Group controlId="formFirstName">
                <Form.Label className="register-form-label">
                  First Name
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your first name"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formLastName">
                <Form.Label className="register-form-label">
                  Last Name
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your last name"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label className="register-form-label">Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formPassword">
                <Form.Label className="register-form-label">
                  Password
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  required
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
