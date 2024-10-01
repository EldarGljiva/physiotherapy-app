import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

import wellness_woman from "../../assets/wellness-woman.webp";
import wellness_plan from "../../assets/wellness-plan.webp";
import expert_guidance from "../../assets/expert-guidance.webp";
import schedule from "../../assets/schedule.webp";

import "./Home.css";

const Home = () => {
  const service_images = [
    {
      image: wellness_plan,
      title: "Personalized Wellness Plans",
      description:
        "Tailored to your specific needs, our wellness plans combine holistic practices with modern techniques to ensure your journey to health and happiness is both effective and enjoyable.",
    },
    {
      image: expert_guidance,
      title: "Expert Guidance & Support",
      description:
        "Our team of certified wellness experts is here to guide you every step of the way, offering advice, support, and resources to help you reach your wellness goals.",
    },
    {
      image: schedule,
      title: "Flexible Scheduling",
      description:
        "We understand that life can be busy. That’s why we offer flexible scheduling options, allowing you to book sessions that fit your lifestyle, ensuring consistent progress without the hassle.",
    },
  ];
  return (
    <>
      {" "}
      <section>
        {/* Hero Section */}
        <div style={{ backgroundColor: "#e4f5f1", padding: "50px 0" }}>
          <Container>
            <Row>
              <Col className="d-flex justify-content-center align-items-center">
                <Image
                  src={wellness_woman}
                  alt="woman doing wellness"
                  fluid
                  style={{ maxWidth: "350px", height: "auto" }}
                />
              </Col>
              <Col className="d-flex flex-column align-items-center">
                <h1 style={{ color: "#2c3e50", fontWeight: "bold" }}>
                  Welcome to your Wellness Journey
                </h1>
                <p style={{ color: "#8c9397" }}>
                  Your journey to greatness begins here at Physiotherapy and
                  Wellness Center. We believe that true wellness encompasses not
                  just physical health but also mental and emotional well-being.
                  Our dedicated team of certified wellness experts is here to
                  guide you through personalized wellness plans tailored to your
                  unique needs. Whether you're looking to enhance your fitness,
                  achieve mental clarity, or find balance in your life, we are
                  committed to providing you with the support and resources you
                  need to thrive. Embrace a holistic approach that combines
                  modern techniques with timeless practices, and take the first
                  step toward a healthier, happier you. Join us at Physiotherapy
                  and Wellness Center as we embark on this transformative
                  journey together, where every step brings you closer to your
                  wellness goals.
                </p>
                <div className="d-flex flex-column flex-md-row justify-content-center">
                  <Link to="/appointment" style={{ textDecoration: "none" }}>
                    <Button
                      className="btn-get-started"
                      style={{ marginBottom: "10px", height: "50px" }}
                    >
                      GET STARTED
                    </Button>
                  </Link>
                  <Link to="/register" style={{ textDecoration: "none" }}>
                    <Button className="btn-register" style={{ height: "50px" }}>
                      REGISTER
                    </Button>
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <section>
        {/* Testimonials Section */}
        <div style={{ backgroundColor: "#c2ebe2", padding: "50px 0" }}>
          <Container>
            <Col className="text-center">
              <h2 style={{ color: "#2a9d8f" }}>What Our Clients Say</h2>
            </Col>
          </Container>
        </div>
      </section>
      <section>
        {/* Our Approach Section */}
        <div style={{ backgroundColor: "#e4f5f1", padding: "50px 0" }}>
          <Container>
            <Row>
              <Col className="text-center">
                <h2 style={{ color: "#264653" }}>Our Approach</h2>
              </Col>
            </Row>
            <Row className="d-flex justify-content-center mt-4">
              {service_images.map((service, idx) => (
                <Col key={idx} md="auto" className="mb-4">
                  {" "}
                  {/* Use md="auto" to let Bootstrap manage spacing */}
                  <Card
                    className="custom-card shadow"
                    style={{ height: "100%" }}
                  >
                    <Card.Img
                      variant="top"
                      src={service.image}
                      alt={service.title}
                    />
                    <Card.Body>
                      <Card.Title style={{ color: "#333333 " }}>
                        {service.title}
                      </Card.Title>
                      <Card.Text style={{ color: "#555555 " }}>
                        {service.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
            {/* Button Section */}
            <div className="d-flex justify-content-center mt-4">
              <Link to="/about">
                {" "}
                {/* Adjust the path as necessary */}
                <button className="gradient-button">Find Out More</button>
              </Link>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Home;
