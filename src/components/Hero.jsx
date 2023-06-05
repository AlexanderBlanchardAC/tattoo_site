import React from 'react';
import './hero.css';
import { heroImageData } from '../data';

const Hero = () => {
    const { quote, author } = heroImageData;

  return (
    <div className='heroContainer'>
        <div className="quoteContainer">
            <h3 className="quote">{quote}</h3>
            <p className="author">{author}</p>
        </div>
     
    </div>
  )
}

export default Hero
