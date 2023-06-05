import React from 'react';
import './aboutMePage.css';
import { aboutData } from '../data';

const AboutMePage = () => {

    const { moreAboutMe } = aboutData;

  return (
    <div className="moreAboutMeContainer">
        <div className="moreAboutMeContent">
            <h3 className="moreAboutMeTitle">About Me</h3>
            <p className="moreAboutMeText">
                {moreAboutMe}
            </p>
        </div>
      
    </div>
  )
}

export default AboutMePage;
