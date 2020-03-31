import React from "react";
import { Formik } from "formik";
import * as EmailValidator from "email-validator";
import "../scss/components/_login.scss"
import Decoration from '../assets/Decoration.svg'
import { Link } from "react-router-dom";
import HeaderNav from "./HeaderNav";

const Login = () => (
    <Formik
    initialValues={{ email: "", password: "" }}
    onSubmit={(values, { setSubmitting, resetForm }) => {
      alert('Poprawnie zalogowany!')
      resetForm({})
    }}

    validate={values => {
        let errors = {};
      
        if (!EmailValidator.validate(values.email)) {
        errors.email = "Podany email jest nieprawidłowy!";
        }

        if (values.password.length < 6) {
        errors.password = "Podane hasło jest za krótkie!";
        } 

        return errors;
    }}
    >
        {props => {
                const {
                    values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit
                } = props;
        return (
            <div className='login'>
                <HeaderNav/>
                <div className='login-content'>
                    <p>Zaloguj się</p>
                    <img 
                        src={Decoration} 
                        alt='decoration'/>
                    <form onSubmit={handleSubmit}>
                        <div className='login-box'>
                            <label>
                                Email
                                <input 
                                    type='email'
                                    name='email'
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={errors.email && touched.email && "error"}
                                />
                                {errors.email && touched.email && (
                                    <div className="errors">{errors.email}</div>
                                )}
                            </label>
                            <label>
                                Hasło
                                <input 
                                    type='password'
                                    name='password'
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={errors.password && touched.password && "error"}
                                />
                                {errors.password && touched.password && (
                                    <div className="errors">{errors.password}</div>
                                )}
                            </label>
                        </div>
                        <div className='login-options'>
                            <Link to="/rejestracja">Załóż konto</Link>
                            <button 
                                type='submit' 
                                disabled={isSubmitting}>
                                Zaloguj się
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }}
    </Formik>
    
);

export default Login;