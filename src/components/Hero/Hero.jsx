import React from 'react'
import "./Hero.css"
import image_profile from "../../assets/newa.jpg"
// import image_profile from "../../assets/newa.jpg"
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={image_profile} alt="" />
      <h1><span>I'm Arbaz Ali,</span> MERN Stack Web Developer</h1>
      <p>I build fast, modern, and conversion-focused websites that help founders and businesses grow online.</p>
      <div className="hero-active">
        <div className="hero-connect" onClick={()=>{
          const link = document.createElement("a")
          link.href = "/CV.pdf"
          link.target = "_blank"
          link.click();
        }}><AnchorLink className='anchor-link' offset={50} href='#contact'>Check Resume</AnchorLink></div>
        <div className="hero-resume" onClick={() => {
          const link = document.createElement("a");
          link.href = "/CV.pdf";   // public folder ka path
          link.download = "Arbaz_Ali_CV.pdf"; // file ka naam
          link.click(); 
        }}>Download Resume</div>
      </div>
    </div>
  )
}

export default Hero
