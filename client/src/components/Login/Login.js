import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Login.css";

const Login = () => {
  return (
    <div style={{ backgroundColor: "#F7F7F7", height: "100vh" }}>
      <Container fluid className="h-100">
        <Row className="h-100 align-items-center justify-content-center">
          <Col md={6} className="d-flex justify-content-center">
            <Form className="login-form-container">
              <h2 className="text-center mb-4" style={{ color: "#2C3E50" }}>
                Login
              </h2>

              <Form.Group controlId="formEmail">
                <Form.Label className="login-form-label">Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formPassword">
                <Form.Label className="login-form-label">Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  required
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
