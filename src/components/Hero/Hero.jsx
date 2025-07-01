import React from 'react'
import "./Hero.css"
import image_profile from "../../assets/jahan_image.jpg"
// import image_profile from "../../assets/newa.jpg"
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={image_profile} alt="" />
      <h1><span>I'm Jahanzaib Ali,</span> fond of singing and enjoying life</h1>
      <p>I'm realy link the enjoying, 19 Year Old life like singing travling with friends and more</p>
      <div className="hero-active">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero
