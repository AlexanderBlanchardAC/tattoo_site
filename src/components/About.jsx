import React, { useState } from 'react';
import './about.css';
import { aboutData } from '../data';
import { useNavigate } from 'react-router-dom';

const About = () => {
    const { name, title, subtitle, preview, btnText, nextBtn, backBtn, moreAboutMe } = aboutData;
    
    const navigate = useNavigate();

    const handleAboutClick = () => {
        navigate("/about")
    }
    
    return (
    <div className='aboutContainer'>
        <div className="aboutMeInfo">
            <h1 className="aboutMeTitle">{title}</h1>
            <h3 className="aboutmeSubtitle">{subtitle}</h3>
            <p className="aboutMeName">{name}</p>
            <p className="aboutMePreview">{preview}</p>
            <button className="readMoreBtn" onClick={handleAboutClick}>{btnText}</button>
        </div>
    </div>
  )
}

export default About
