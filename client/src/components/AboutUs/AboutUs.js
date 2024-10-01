import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"; // Import icons
import "./AboutUs.css";

import woman_in_spa from "../../assets/women-in-spa.webp";

const AboutUs = () => {
  return (
    <div className="about-us-page">
      {/* Hero Section */}
      <section className="about-hero">
        <Container>
          <Row>
            <Col
              md={6}
              className="hero-text d-flex flex-column justify-content-center align-items-center"
            >
              <h1>We are dedicated to your wellness journey.</h1>
              <Link to="/services">
                <button className="btn-services">Our Services</button>
              </Link>
            </Col>
            <Col md={6} className="hero-image">
              <img src={woman_in_spa} alt="Woman meditating" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Our Story Section */}
      <section className="our-story">
        <Container>
          <Row>
            <Col>
              <h2 style={{ fontWeight: "bold" }}>Our Story</h2>
              <p>
                At Physiotherapy and Wellness Center, we believe in holistic
                approaches to health. Our mission is to support individuals on
                their journey to wellness through personalized care and expert
                guidance. At Physiotherapy and Wellness Center, we believe in
                holistic approaches to health. Our mission is to support
                individuals on their journey to wellness through personalized
                care and expert guidance. At Physiotherapy and Wellness Center,
                we believe in holistic approaches to health. Our mission is to
                support individuals on their journey to wellness through
                personalized care and expert guidance.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Icons Section */}
      <section className="contact-details">
        <Container>
          <Row>
            <Col>
              <h2 style={{ fontWeight: "bold" }}>Contact Us</h2>
              <div className="contact-icons">
                <div className="contact-icon">
                  <FaPhone size={40} />
                  <p>+123-456-7890</p>
                </div>
                <div className="contact-icon">
                  <FaEnvelope size={40} />
                  <p>info@yourwellnesscenter.com</p>
                </div>
                <div className="contact-icon">
                  <FaMapMarkerAlt size={40} />
                  <p>Sarajevo 17</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default AboutUs;
