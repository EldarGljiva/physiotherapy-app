import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import logo from "../assets/logo.png";

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#2C3E50", // Dark background
        color: "#FFFFFF", // White text
        padding: "20px 0",
      }}
    >
      <Container>
        <Row>
          <Col xs={12} md={4} className="text-center">
            <Image
              src={logo}
              alt="Company Logo"
              fluid
              style={{ maxWidth: "150px", marginBottom: "10px" }}
            />
          </Col>

          {/* New Quick Links Section */}
          <Col xs={12} md={4} className="text-center">
            <h5 className="footer-heading">Quick Links</h5>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/services">Testimonials</a>
              </li>
              <li>
                <a href="/privacy-policy">Services</a>
              </li>
            </ul>
          </Col>

          <Col xs={12} md={4} className="text-center">
            <h5 className="footer-heading">Contact Us</h5>
            <p>Email: info@yourwellnesscenter.com</p>
            <p>Phone: +123-456-7890</p>
            <div>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ margin: "0 10px" }}
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ margin: "0 10px" }}
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ margin: "0 10px" }}
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ margin: "0 10px" }}
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </Col>
        </Row>
        <div className="divider"></div>
        <Row>
          <Col className="text-center mt-3">
            <p className="footer-copyright">
              &copy; {new Date().getFullYear()} Eldar. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
