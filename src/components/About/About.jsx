import React from 'react'
import image_profile from "../../assets/newa2.jpg"
// import image_profile from "../../assets/newa2.jpg"
import theme from "../../assets/theme_pattern.svg"
import "./About.css"

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={image_profile} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>Hey, I'm Arbaz Ali. I don't just design beautiful websites, I create digital sales machines that turn visitors into clients.</p>
            <p>I help founders and businesses launch websites that do the heavy lifting, faster load times, clearer messaging, and layouts that sell.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>MongoDB</p><hr style={{ width: "60%" }} /></div>
            <div className="about-skill"><p>React JS</p><hr style={{ width: "80%" }} /></div>
            <div className="about-skill"><p>Express</p><hr style={{ width: "80%" }} /></div>
            <div className="about-skill"><p>Node.js</p><hr style={{ width: "70%" }} /></div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>PROKECTS</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>2000+</h1>
          <p>HOURS WORK</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>4+</h1>
          <p>ACHIEVMENT</p>
        </div>
      </div>
    </div>
  )
}

export default About
