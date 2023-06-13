import React from 'react';
import './header.css';
import NavBar from './NavBar';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';


const Header = () => {
    
    const navigate = useNavigate();

    const handleLogoClick = () => {
      navigate("/")
    }

  return (
    <div className='headerContainer'>
        <div className="logoContainer">
           <img className='studioLogo' src={logo} alt="tattoo shop logo" onClick={handleLogoClick} />
        </div>
        <div className="nav">
            <NavBar />
        </div>
      
    </div>
  )
}

export default Header
