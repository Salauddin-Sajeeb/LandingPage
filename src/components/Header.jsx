/* eslint-disable no-unused-vars */
import React from 'react'
import  "./header.css"
import { useState, useEffect } from "react";

const Header = () => {
 const [scrolled, setScrolled] = useState(false);
 useEffect(() => {
    const handleScroll = () => {
      // If scrolled more than 100px, change header background color
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    // Cleanup the event listener when the component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
<div>
    <div className='container w-70 navbar-wrapper '>
    <nav className="navbar bg-transparent  navbar-expand-lg w-70">
     <div className="container-fluid">
    <a className="navbar-brand ml-5" href="#home"><img  src="https://level3carrier.com/images/joomlabuff/logo/Level3_carrier_white.png" width="80" height="40" className ="d-inline-block align-text-top bg-transparent" alt="" /></a>
    <button className="navbar-toggler mx-4" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active text-white fw-bold" aria-current="page" href="#">Home</a>
        <a className="nav-link text-white fw-bold" href="#about">About Us</a>
        <a className="nav-link text-white fw-bold" href="#service">Service</a>
        <a className="nav-link text-white fw-bold" href="#contact">Contact</a>
      </div>
    </div>
  </div>
  </nav>
  </div>
   </div>
  )
}

export default Header