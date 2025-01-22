/* eslint-disable no-unused-vars */
import "./about.css"
import 'animate.css';
import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';
const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: false,mirror:true, easing: 'ease-in-out' });
      }, []);
  return (
    <div>
      <section className="header-section text-center mt-5">
        <h1 className="text-shadow" data-aos="fade-up">
          Who We Are
        </h1>
      </section>

      <section className="about-section mt-5">
        <Container>
          <Row className="align-items-center">
            <Col md={7}>
              <h3 className="ps-5" data-aos="fade-right">
                We are your Innovation Partner anywhere <br /> around the nation and beyond
              </h3>
              <p className="ps-5" data-aos="fade-up">
                <span className="fw-bold" data-aos="fade-right">Level3 Carrier Limited,</span> an International Internet Gateway Operator – providing ISPs & Data Centers while driving major Mobile Operators and Telecom Enterprises with next-level internet infrastructure.
                <br /><br />
                We develop a strong and comprehensive internet backbone for you to provide content and delight customers with an immersive digital experience. Our goal is to satisfy the growing demand for dependable, high-capacity, and global IP transit services.
              </p>
            </Col>
            <Col md={5}>
              <img
                className="w-100"
                src="https://level3carrier.com/images/other/2020-02-20-Leve3-WEBSITE-About-us.png"
                alt="Level3 Carrier Image"
                data-aos="zoom-in"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="services-section mt-5">
        <Container>
          <Row>
            <Col md={3}>
              <Card className="service-card" data-aos="flip-left">
                <Card.Body>
                  <h3>100% Uptime</h3>
                  <p>
                    A curated set of ES5/ES6/TypeScript wrappers for plugins to easily add any native functionality.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="service-card" data-aos="flip-right">
                <Card.Body>
                  <h3>Data Center</h3>
                  <p>
                    Tabs, buttons, inputs, lists, cards, and more! A comprehensive library of mobile UI components.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="service-card" data-aos="flip-left">
                <Card.Body>
                  <h3>Country Reach</h3>
                  <p>
                    Learn how to easily customize and modify your app’s design to fit your brand across all mobile.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="service-card" data-aos="flip-right">
                <Card.Body>
                  <h3>Submarine Cable</h3>
                  <p>
                    Learn how to easily customize and modify your app’s design to fit your brand across all mobile.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default About