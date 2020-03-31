import React from "react";
import { Formik } from "formik";
import * as EmailValidator from "email-validator";
import "../scss/components/_register.scss"
import Decoration from '../assets/Decoration.svg'
import { Link } from "react-router-dom";
import HeaderNav from "./HeaderNav";

const Register = () => (
    <Formik
    initialValues={{ email: "", password: "", password2: "" }}
    onSubmit={(values, { setSubmitting, resetForm }) => {
      alert('Poprawnie zarejestrowany!')
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

        if (values.password2.length < 6) {
            errors.password2 = "Podane hasło jest za krótkie!";
        } else if (values.password2 !== values.password) {
            errors.password2 = "Podane hasło jest nieprawidłowe";
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
            <div className='register'>
                <HeaderNav/>
                <div className='register-content'>
                    <p>Załóż konto</p>
                    <img 
                        src={Decoration} 
                        alt='decoration'/>
                    <form onSubmit={handleSubmit}>
                        <div className='register-box'>
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
                            <label>
                                Powtórz hasło
                                <input 
                                    type='password'
                                    name='password2'
                                    value={values.password2}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={errors.password2 && touched.password2 && "error"}
                                />
                                {errors.password2 && touched.password2 && (
                                    <div className="errors">{errors.password2}</div>
                                )}
                            </label>
                        </div>
                        <div className='register-options'>
                            <Link to="/logowanie">Zaloguj się</Link>
                            <button 
                                type='submit' 
                                disabled={isSubmitting}>
                                Załóż konto
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
        }}
    </Formik>
);

export default Register;