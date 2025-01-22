/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import AOS from 'aos';
import { Container, Row, Col, Card } from "react-bootstrap";
import 'aos/dist/aos.css';
import './service.css'

const Service = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: false,mirror:true, easing: 'ease-in-out' });
      }, []);
  return (
    <div>
    {/* Section Header */}
    <h2 className="d-flex justify-content-center mt-5 fs-2 fw-bold text-primary" data-aos="fade-up">
      Our Services
    </h2>

    <Container>
      <Row className="g-4 mt-2">
        {/* Card 1 */}
        <Col sm={12} md={6} lg={3}>
          <Card className="service-card" data-aos="zoom-in">
            <img
              src="https://level3carrier.com/images/ICON/Colocation.png"
              alt="Fasten Surfing"
            />
            <Card.Body>
              <h5 className="card-title">Fasten Surfing</h5>
              <p className="card-text">
                Direct access to a worldwide network structure and a team of proficient experts, enabling proactive network performance.
              </p>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={12} md={6} lg={3}>
          <Card className="service-card" data-aos="flip-left">
            <img
              src="https://level3carrier.com/images/ICON/country.png"
              alt="Connect Communicate"
            />
            <Card.Body>
              <h5 className="card-title">Connect, Communicate</h5>
              <p className="card-text">
                Focused on delivering cloud solutions tailored to the local market. Our vision is to be the leading cloud provider.
              </p>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={12} md={6} lg={3}>
          <Card className="service-card" data-aos="flip-right">
            <img
              src="https://level3carrier.com/images/ICON/Security.png"
              alt="Control Security"
            />
            <Card.Body>
              <h5 className="card-title">Control Security</h5>
              <p className="card-text">
                Helping transform your operations to harness talent, data, and intelligence to deliver the right information at the right time.
              </p>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={12} md={6} lg={3}>
          <Card className="service-card" data-aos="fade-up">
            <img
              src="https://level3carrier.com/images/ICON/Uptime.png"
              alt="Flexible Location"
            />
            <Card.Body>
              <h5 className="card-title">Flexible Location</h5>
              <p className="card-text">
                We arrange and operate next-generation, carrier-neutral data centers in emerging commercial hubs.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
  )
}

export default Service