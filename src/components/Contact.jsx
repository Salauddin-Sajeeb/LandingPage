/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./contact.css"
const Contact = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: false,mirror:true, easing: 'ease-in-out' });
      }, []);
  return (
    <div>
       <h2 className='d-flex justify-content-center mt-5 fw-bold' data-aos="fade-up">Contact Us</h2> 
    <div className='contact mt-2'>
    <form action=""  data-aos='fade-in'>
            <div className="contact-form" >
            <div className="name" data-aos='flip-right'>
            <input type="text" name="from_name" className="input-name" placeholder="Enter Your name" data-aos='flip-left' />

            </div>
            <input type="email" name="email" className="input-email" placeholder="your email" data-aos='flip-right' />
            <textarea className="message" name="message" id="" placeholder="message" cols="30" rows="10" data-aos="fade-up"></textarea>
            <button className="btn btn-success rounded-pill text-white" >Contact Us</button> <br />
                       
            </div>
        </form>
    </div>
    
     </div>
  )
}

export default Contact