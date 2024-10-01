import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Appointment.css";

const Appointment = () => {
  return (
    <>
      {/* Full Page Section */}
      <section className="appointment-page">
        <div className="appointment-overlay">
          <Container>
            <Row>
              <Col className="text-center">
                <h1
                  style={{
                    color: "#3e5d7c",
                    fontSize: "3.6rem",
                    marginBottom: "10px",
                  }}
                >
                  Book Your Appointment{" "}
                  <span style={{ color: "#FFA500" }}>Today</span>
                </h1>
                <p
                  style={{
                    color: "#485461",
                    fontSize: "1.8rem",
                    marginBottom: "20px",
                  }}
                >
                  Experience personalized care and wellness solutions.
                </p>
                <div className="appointment-buttons">
                  <Link
                    to="/appointment-form"
                    className="btn book-online-button"
                  >
                    Book Online
                  </Link>
                  <Link to="/about" className="btn call-us-button">
                    Call Us
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Appointment;
