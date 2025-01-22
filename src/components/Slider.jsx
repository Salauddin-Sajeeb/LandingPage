/* eslint-disable no-unused-vars */
import React from 'react'
import { Carousel } from 'react-bootstrap';
import './Header'
const Slider = () => {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100 h-100" src="https://demo.level3carrier.com/images/SLIDES/1-1900-950.png" alt="First slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://demo.level3carrier.com/images/SLIDES/2-1900-950.png" alt="Second slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://demo.level3carrier.com/images/SLIDES/3-1900-950.png" alt="Third slide" />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

  )
}

export default Slider