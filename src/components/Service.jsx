/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Service = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: false,mirror:true, easing: 'ease-in-out' });
      }, []);
  return (
    <div>
    <h2 className='d-flex justify-content-center mt-5 fs-2 fw-bold'data-aos="fade-up" >Our Services </h2>
    <div className="row row-cols-1 row-cols-md-2 g-4 mt-2">
  <div className="col">
    <div className="card">
      
      <div className="card-body" data-aos="zoom-in">
        <h5 className="card-title">Fasten Surfing</h5>
        <p className="card-text">Direct Access to a worldwide network structure and a team of proficient, experts is what allows for pro-active network</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
     
      <div className="card-body" data-aos="fade-up">
        <h5 className="card-title">Connect, Communicate</h5>
        <p className="card-text">Focusing on delivery cloud-solutions adapted the local market. Vision is to be the leading cloud-provider</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
     
      <div className="card-body" data-aos="fade-up">
        <h5 className="card-title">Control Security</h5>
        <p className="card-text">Helping to transform your operations to harness talent, data and intelligence to deliver the right information</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      
      <div className="card-body" data-aos="fade-up">
        <h5 className="card-title">Flexible Location</h5>
        <p className="card-text">We arrange and operate next generation, carrier neutral Data Centers in emerging, commercial</p>
      </div>
    </div>
  </div>
</div>
</div>
  )
}

export default Service