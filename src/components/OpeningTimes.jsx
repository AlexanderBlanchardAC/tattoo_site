import React from 'react';
import './openingTimes.css';
import { openingTimes } from '../data';


const OpeningTimes = () => {

  const { title, subtitle, days } = openingTimes;

  return (
   <div className="openingTimesContainer">
      <div className="openingTimesContent">
        <h3 className="openingTimesTitle">{title}</h3>
        <h5 className="openingTimesSubtitle">{subtitle}</h5>
          {days.map((day, index) => {
            return (
              <>
              <div className="openingDays" key={index}>
                  <p className="day">{day.day}</p>
                  <p className="times">{day.hours}</p>

              </div>
             
              </>
            )
          })}
      </div>
   </div>
  )
}

export default OpeningTimes;
