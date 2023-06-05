import React from 'react';
import './contact.css';
import { contactData, formData } from '../data';


const Contact = () => {

  const { title, subtitle, location, state, notice } = contactData;
  const { formTitle, nameLabel, emailLabel, messageLabel, sendBtnText, phoneNumberLabel } = formData;
  return (
    <div className="contactContainer">
      <div className="contactContent">
        <h3 className="contactTitle">{title}</h3>
        <h5 className="contactSubtitle">{subtitle}</h5>
        <div className="location">
          <p className="addressText">{location}: {state}</p>
          <p className="locationInfoText">{notice}</p>
        </div>
        <div className="contactForm">
          <form>
            <h5 className="formTitle">{formTitle}</h5>
            <label>{nameLabel}</label>
            <input type="text" placeholder='Enter your name' required={true}/>
            <label>{phoneNumberLabel}</label>
            <input type='number' placeholder='Enter your phone number (optional): ' />
            <label>{emailLabel}</label>
            <input type="text" placeholder='Enter your email address' required={true}/>
            <label>{messageLabel}</label>
            <input name="message" type="text" placeholder="Enter your message" required={true}/>
            <button className="submitFormBtn" type="submit">{sendBtnText}</button>
          </form>
        </div>

      </div>
      
    </div>
  )
}

export default Contact
