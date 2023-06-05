import React from 'react';
import './footer.css';
import { footerData } from '../data';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    
    const { items } = footerData;

  return (
    <div className="footerContainer">
        <div className="footerContent">
                <ul className="footerMenuList">
                    {items.map((item, index) => {
                        return (
                            <NavLink to={item.link}>
                                <li className="footerItem" key={index}>{item.name}</li>
                            </NavLink>
                        )
                     })}
               </ul>
        </div>
    </div>
  )
}

export default Footer
