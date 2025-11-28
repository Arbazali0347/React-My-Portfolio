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
            <p>Let's Grow Together</p>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <div className="footer-bottom-left">© 2025 Arbaz Ali @</div>
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
