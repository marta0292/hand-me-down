import React from "react";
import "../../scss/components/home/_homeHeader.scss"
import Decoration from '../../assets/Decoration.svg'
import {Link} from "react-router-dom";
import HeaderNav from "../HeaderNav";

const HomeHeader = () => {
    return (
        <div className='home-header'>
            <div className='home-header-picture'></div>
            <div className='home-header-info'>
                <HeaderNav/>
                <div className='home-header-content'>
                    <p>Zacznij pomagać! <br/> Oddaj niechciane rzeczy w zaufane ręce</p>
                    <img src={Decoration} alt='decoration'/>
                    <div className='home-header-buttons'>
                        <Link className='home-header-btn' to="/logowanie">oddaj<br/>rzeczy</Link>
                        <Link className='home-header-btn' to="/logowanie">zorganizuj<br/>zbiórkę</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeHeader;