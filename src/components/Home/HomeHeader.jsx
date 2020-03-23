import React from "react";
import "../../scss/components/home/_homeHeader.scss"
import Decoration from '../../assets/Decoration.svg'
import {Link} from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll'

const HomeHeader = () => {
    return (
        <div className='home-header'>
            <div className='home-header-picture'></div>
            <div className='home-header-info'>
                <div className='home-header-nav'>
                    <div className='home-header-menu-log'>
                        <ul className="home-header-menu-log-list">
                            <li><Link to="/Login">Zaloguj</Link></li>
                            <li><Link to="/Register">Załóż konto</Link></li>
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
                <div className='home-header-content'>
                    <p>Zacznij pomagać! <br/> Oddaj niechciane rzeczy w zaufane ręce</p>
                    <img src={Decoration} alt='decoration'/>
                    <div className='home-header-buttons'>
                        <Link className='home-header-btn' to="/Login">oddaj<br/>rzeczy</Link>
                        <Link className='home-header-btn' to="/Login">zorganizuj<br/>zbiórkę</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeHeader;