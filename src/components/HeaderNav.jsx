import React from "react";
import "../scss/components/_headerNav.scss"
import { Link } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll'

const HeaderNav = () => {
    return (
        <div className='home-header-nav'>
            <div className='home-header-menu-log'>
                <ul className="home-header-menu-log-list">
                    <li><Link to="/logowanie">Zaloguj</Link></li>
                    <li><Link to="/rejestracja">Załóż konto</Link></li>
                </ul>
            </div>
            <nav className="home-header-menu-nav">      
                <ul className="home-header-menu-nav-list">
                    <li><a href="/">Start</a></li>
                    <li><ScrollLink to="steps" smooth={true}>O co chodzi?</ScrollLink></li>
                    <li><ScrollLink to="about" smooth={true}>O nas</ScrollLink></li>
                    <li><ScrollLink to="who" smooth={true}>Fundacja i organizacje</ScrollLink></li>
                    <li><ScrollLink to="contact" smooth={true}>Kontakt</ScrollLink></li>
                </ul>
            </nav>
        </div>
    );
};

export default HeaderNav;