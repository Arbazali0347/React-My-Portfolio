import React from 'react'
import image_profile from "../../assets/jahan_image.jpg"
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
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel dolor nihil aliquam molestias ullam dolorum, necessitatibus nobis! Tempora, eaque maiores? Maiores inventore minus temporibus excepturi facilis mollitia deleniti, cum aliquam.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam porro explicabo ducimus magnam esse eaque cum saepe praesentium eos, veritatis omnis!</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTTML & CSS</p><hr style={{ width: "50%" }} /></div>
            <div className="about-skill"><p>React JS</p><hr style={{ width: "70%" }} /></div>
            <div className="about-skill"><p>Python</p><hr style={{ width: "60%" }} /></div>
            <div className="about-skill"><p>JavaScript</p><hr style={{ width: "90%" }} /></div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>DATA ENTRY</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>60+</h1>
          <p>OPPERTER ENTRY</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>70+</h1>
          <p>COMPUTER CODING</p>
        </div>
      </div>
    </div>
  )
}

export default About
