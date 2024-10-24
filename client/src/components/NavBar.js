import Navbar from "react-bootstrap/Navbar"; // Import Bootstrap Navbar component
import Container from "react-bootstrap/Container"; // Import Bootstrap Container component
import Nav from "react-bootstrap/Nav"; // Import Bootstrap Nav component

import React, { useState } from "react"; // Import React, useState, and useEffect

import logo from "../assets/logo.png";

import { Link, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import "./NavBar.css";

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  const storedToken = localStorage.getItem("token");
  let userRole = null;

  if (storedToken) {
    const decodedToken = storedToken
      ? JSON.parse(atob(storedToken.split(".")[1]))
      : null;
    console.log("Decoded JWT Payload:", decodedToken); // Decode the token
    userRole = decodedToken.role; // Extract the role from the token
  }
  console.log("role is :" + userRole);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove the JWT from local storage
    navigate("/login");
    toast.success("Logout successful!");
    setExpanded(false);
  };

  return (
    <Navbar
      expand="md" // Navbar collapses into a hamburger menu on medium screens and smaller
      className="navbar-custom"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
    >
      <Container>
        {/* Navbar Brand/Logo */}
        <Navbar.Brand as={Link} to="/home">
          <img
            src={logo}
            className="d-inline-block align-top logo"
            alt="Logo"
          />
        </Navbar.Brand>

        {/* Navbar Toggle for mobile screens */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>

        {/* Navbar Collapse (menu items) */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            {/* Align nav items to the right */}
            <Nav.Item>
              <Nav.Link as={Link} to="/home" onClick={() => setExpanded(false)}>
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/appointment"
                activeClassName="active"
                onClick={() => setExpanded(false)}
              >
                Appointment
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/services"
                activeClassName="active"
                onClick={() => setExpanded(false)}
              >
                Services
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => setExpanded(false)}
              >
                About Us
              </Nav.Link>
            </Nav.Item>

            {/* Only display this link if the user role is 'therapist' */}
            {userRole === "THERAPIST" && (
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/therapist-dashboard"
                  onClick={() => setExpanded(false)}
                >
                  Therapist Dashboard
                </Nav.Link>
              </Nav.Item>
            )}

            <Nav.Item>
              {/* Conditional rendering based on token existence */}
              {storedToken ? (
                <Nav.Link onClick={handleLogout} className="special-nav-link">
                  Logout
                </Nav.Link>
              ) : (
                <Nav.Link
                  as={Link}
                  to="/register"
                  className="special-nav-link"
                  onClick={() => setExpanded(false)}
                >
                  Register
                </Nav.Link>
              )}
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
