/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import './footer.css';
import AOS from 'aos';
import 'aos/dist/aos.css';  

const Footer = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: false,mirror:true, easing: 'ease-in-out' });
      }, []);
  return (
    <footer className="footer w-100" data-aos="fade-up">
      <Container>
        <Row>
          <Col sm={12} md={4}>
            <h5>Address</h5>
            <p>
              Plot 11 Road 113/A<br />
              Gulshan Dhaka 1212,<br />
              Bangladesh
            </p>
          </Col>
          <Col sm={12} md={4}>
            <h5>Quick Contact</h5>
            <ul>
              <li>+880 1733-336122</li>
              <li>+880 1733-336200</li>
              <li>info@level3carrier.com</li>
            </ul>
          </Col>

         
          <Col sm={12} md={4}>
            <h5>24x7 Support Center</h5>
            <ul>
              <li>08000-123-123 (Toll Free)</li>
              <li>soc@level3carrier.com</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
