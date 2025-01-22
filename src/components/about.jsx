/* eslint-disable no-unused-vars */
import "./about.css"
import 'animate.css';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: false,mirror:true, easing: 'ease-in-out' });
      }, []);
  return (
    <div>
    <h1 className="d-flex justify-content-center mt-5 text-shadow" data-aos="fade-up">
      Who we are
    </h1>
    <div className="row w-95 mt-5">
      <div className="col-7">
        <h3 className="ps-5" data-aos="fade-right">
          We are your Innovation Partner anywhere <br /> around the nation and
          beyond
        </h3>
        <br />
        <p className="ps-5" data-aos="fade-up">
          <span className="fw-bold" data-aos='fade-right'>Level3 Carrier Limited,</span> an
          International Internet Gateway Operator -is providing <br />
          ISPs & Data Centers while also driving the major Mobile Operators
          and Telecom <br />
          Enterprises with a next-level internet infrastructure. <br /> <br />
          We develop a strong and comprehensive internet backbone for you to
          provide <br />
          content and delight the customers with an immersive digital
          experience. So as <br />
          to satisfy the demands for dependable, High Capacity, and Global IP
          Transit <br />
          grows with a rapid market growth.
        </p>
      </div>
      <img
        className="col-5 px-2"
        height={280}
        width={70}
        src="https://level3carrier.com/images/other/2020-02-20-Leve3-WEBSITE-About-us.png"
        alt=""
        data-aos="zoom-in"
      />
    </div>
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-3">
          <div className="card card-1" data-aos="flip-left">
            <h3>100% Uptime</h3>
            <p>
              A curated set of ES5/ES6/TypeScript wrappers for plugins to
              easily add any native functionality
            </p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card card-2" data-aos="flip-right">
            <h3>Data Center</h3>
            <p>
              Tabs, buttons, inputs, lists, cards, and more! A comprehensive
              library of mobile UI components
            </p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card card-3" data-aos="flip-left">
            <h3>Country Reach</h3>
            <p>
              Learn how to easily customize and modify your app’s design to
              fit your brand across all mobile
            </p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card card-1" data-aos="flip-right">
            <h3>Submarine Cable</h3>
            <p>
              Learn how to easily customize and modify your app’s design to
              fit your brand across all mobile
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default About