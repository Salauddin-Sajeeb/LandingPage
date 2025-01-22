/* eslint-disable no-unused-vars */
import React from 'react'
import Header from '../components/Header'
import Slider from '../components/Slider'
import About from '../components/about'
import Service from '../components/Service'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className=' w-100'>

    <section id="header">
      <Header />
      <Slider />
    </section> 
    <section id='about'>
      <About />
    </section>  
    <section id='service'>
       <Service /> 
    </section>
    <section id='contact'>
        <Contact />
    </section>
    <section>
        <Footer/>
    </section>
        
    </div>
  )
}

export default Home