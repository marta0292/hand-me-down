import React from "react";
import "../scss/components/_register.scss"
import Decoration from '../assets/Decoration.svg'
import { Link } from "react-router-dom";
import HeaderNav from "./HeaderNav";

const Register = () => {
    return (
        <div className='register'>
            <HeaderNav/>
            <div className='register-content'>
                <p>Załóż konto</p>
                <img src={Decoration} alt='decoration'/>
                <div className='register-box'>
                    <label>
                        Email
                        <input type='email'/>
                    </label>
                    <label>
                        Hasło
                        <input type='password'/>
                    </label>
                    <label>
                        Powtórz hasło
                        <input type='password'/>
                    </label>
                </div>
                <div className='register-options'>
                    <Link to="/logowanie">Zaloguj się</Link>
                    <button>Załóż konto</button>
                </div>
            </div>
        </div>
    );
};

export default Register;