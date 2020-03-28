import React from "react";
import "../scss/components/_login.scss"
import Decoration from '../assets/Decoration.svg'
import { Link } from "react-router-dom";
import HeaderNav from "./HeaderNav";

const Login = () => {
    return (
        <div className='login'>
            <HeaderNav/>
            <div className='login-content'>
                <p>Zaloguj się</p>
                <img src={Decoration} alt='decoration'/>
                <div className='login-box'>
                    <label>
                        Email
                        <input type='email'/>
                    </label>
                    <label>
                        Hasło
                        <input type='password'/>
                    </label>
                </div>
                <div className='login-options'>
                    <Link to="/rejestracja">Załóż konto</Link>
                    <button>Zaloguj się</button>
                </div>
            </div>
        </div>
    );
};

export default Login;