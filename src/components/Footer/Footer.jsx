import React from 'react'
import "./Footer.css"
import footer_logo from "../../assets/footer_logo.svg"
import user_icon from "../../assets/user_icon.svg"
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
            <img src={footer_logo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nisi iure aperiam. Laborum odit facere dolore molestias cupiditate placeat blanditiis!</p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt="" />
                <input type="email" placeholder='Enter your email' />
            </div>
            <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <div className="footer-bottom-left">C 20 Jahanzaib Ali @__</div>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privicy Policy</p>
          <p>Contect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
