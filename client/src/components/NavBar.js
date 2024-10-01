import Navbar from "react-bootstrap/Navbar"; // Import Bootstrap Navbar component
import Container from "react-bootstrap/Container"; // Import Bootstrap Container component
import Nav from "react-bootstrap/Nav"; // Import Bootstrap Nav component

import { Link } from "react-router-dom"; // Import Link component from React Router for navigation

import React from "react"; // Import React, useState, and useEffect

import logo from "../assets/logo.png";

import "./NavBar.css";

const NavBar = () => {
  return (
    <Navbar
      expand="md" // Navbar collapses into a hamburger menu on medium screens and smaller
      className="navbar-custom"
    >
      <Container>
        {/* Navbar Brand/Logo */}
        <Navbar.Brand as={Link} to="/">
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
              <Nav.Link as={Link} to="/home" className="nav-link">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/appointment" activeClassName="active">
                Appointment
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/services" activeClassName="active">
                Services
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/about">
                About Us
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/register" className="special-nav-link">
                Register
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
