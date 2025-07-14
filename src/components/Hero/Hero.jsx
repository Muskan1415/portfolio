import React from 'react'
import './Hero.css'
import logo2 from'../../assets/logo2.jpg'
const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={logo2}alt="Muskan Singh profile" />
      <h1><span>I'm Muskan Singh,</span> frontend developer based in Kolkata.</h1>
      <p>I’m a recent Electronics and Communication Engineering (ECE) graduate with a strong passion for technology, innovation, and hands-on problem-solving. I am enthusiastic about applying my knowledge in real-world scenarios and thrive on building impactful projects. I'm eager to collaborate, learn continuously, and contribute meaningfully to challenging projects that push boundaries and create value. Let's build something great together!</p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero
