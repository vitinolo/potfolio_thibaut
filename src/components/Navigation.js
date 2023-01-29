import React from 'react';
import { NavLink } from 'react-router-dom';
import Thib from '../img/thib.jpg';

const Navigation = () => {
    return (
        <div className='navigation'>
            <div className='navigationContent'>
                <div className='leftContent'>
                    <img src={Thib} alt="thibaut"/>
                    <h1>Thibaut Lenoir</h1>
                </div>
                <ul>
                    <li>
                        <NavLink  aria-label="lien menu" style={({ isActive }) => { return {color : isActive ? "red" : ""};}} exact="true" to="/" title="menu">
                            <span>Menu</span>
                        </NavLink>    </li>
                    <li>
                        <NavLink  aria-label="lien à propos" style={({ isActive }) => { return {color : isActive ? "red" : ""};}} exact="true" to="/about" title="à propos">
                            <span>A propos</span>
                        </NavLink>    
                    </li>
                    <li>
                        <NavLink  aria-label="lien projets" style={({ isActive }) => { return {color : isActive ? "red" : ""};}} exact="true" to="/projects" title="projets">
                            <span>Projets</span>
                        </NavLink>    
                    </li>
                    <li>
                        <NavLink  aria-label="lien contact" style={({ isActive }) => { return {color : isActive ? "red" : ""};}} exact="true" to="/contact" title="contact">
                            <span>Contact</span>
                        </NavLink>    
                    </li>
                </ul>
            </div>  
        </div>
    );
};

export default Navigation;