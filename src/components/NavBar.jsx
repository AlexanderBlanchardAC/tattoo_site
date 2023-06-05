import React, { useState } from 'react';
import { navBarData } from '../data';
import { NavLink } from 'react-router-dom';
import './navBar.css';

const NavBar = () => {

    const [isNavExpanded, setIsNavExpanded] = useState(false);
    //destructure data
    const {items} = navBarData;

  return (
    <nav className='navBar'>
        <div className={isNavExpanded ? 'hamburger open': 'hamburger'} onClick={() => {setIsNavExpanded(!isNavExpanded)}}>
            <span className="barOne"></span>
            <span className='barTwo'></span>
            <span className="barThree"></span>
        </div>
        {/* <div className="menuContainer"> */}
            <ul className={isNavExpanded ? "navBarMenu expanded" : "navBarMenu"}>
                {items.map((item, index) => {
                    return(
                        <NavLink to={item.link}>
                        <li className="navItem" key={index}>
                            {item.name}
                        </li>
                        </NavLink>
                    )
                })}
            </ul>
        {/* </div> */}

      
    </nav>
  )
}

export default NavBar
