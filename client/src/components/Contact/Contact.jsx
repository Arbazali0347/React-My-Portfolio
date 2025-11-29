import React from 'react'
import "./Contact.css"
import theme from "../../assets/theme_pattern.svg"
import mail_icon from "../../assets/mail_icon.svg"
import location_icon from "../../assets/location_icon.svg"
import call_icon from "../../assets/call_icon.svg"
const Contact = () => {

  const onSubmit = async (event) => {
    try {
      event.preventDefault();
      const formData = new FormData(event.target);
  
      formData.append("access_key", "7786770d-0949-4ebf-af91-158123708d89");
  
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
  
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());
  
      if (res.success) {
        alert("Your Message sended ✔" + res.message);
      }
      
    } catch (error) {
      alert("Your Message sended ✔" + error);
    }
  };


  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's</h1>
          <p>Collaborate and Begin the work</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" /><p>arbazali.coder2025@gamil.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" /><p>+92 3032826801</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" /><p>Karachi, Malir Khokhrapara No.4</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder='Enter you name' name='name' />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder='Enter you email' name='email' />
          <label htmlFor="">Write your message here</label>
          <textarea name="message" rows="8" id="" placeholder='Enter you message here'></textarea>
          <button type='submit' className='contact-submit'>Submit now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
