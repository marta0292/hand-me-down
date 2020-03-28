import React from "react";
import "../scss/components/_logout.scss"
import Decoration from '../assets/Decoration.svg'
import { Link } from "react-router-dom";
import HeaderNav from "./HeaderNav";

const Logout = () => {
    return (
        <div className='logout'>
            <HeaderNav/>
            <div className='logout-content'>
                <p>Wylogowanie nastąpiło<br />pomyślnie!</p>
                <img src={Decoration} alt='decoration'/>
                <div className='logout-option'>
                    <Link to="/">Strona główna</Link>
                </div>
            </div>
        </div>
    );
};

export default Logout;