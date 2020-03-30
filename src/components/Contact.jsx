import React from "react";
import "../scss/components/_contact.scss"
import Facebook from "../assets/Facebook.svg";
import Instagram from "../assets/Instagram.svg";
import Decoration from "../assets/Decoration.svg";
import { Formik } from "formik";
import * as EmailValidator from "email-validator";

const Contact = () => (
    <Formik
        initialValues={{ name: "", email: "", message: "" }}
        onSubmit={(values, {setSubmitting, resetForm}) => {
            fetch(`https://fer-api.coderslab.pl/v1/portfolio/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values, null, 2)
                })
                .then(resp => resp.json())
                .then(data => {if(data.status === "success") {
                    alert('Wiadomość została wysłana');
                    setSubmitting(false);
                    resetForm({})
                } })
                .catch(error => {
                    console.log(error);})
        }}

        validate={values => {
            let errors = {};
            const nameRe = /^[a-zA-Z]{2,30}$/;
            
            if (!nameRe.test(values.name)) {
                errors.name = "Podane imię jest nieprawidłowe!";
            }

            if (!EmailValidator.validate(values.email)) {
                errors.email = "Podany email jest nieprawidłowy!";
            }

            if (values.message.length < 120) {
                errors.message = "Wiadomość musi mieć conajmniej 120 znaków!";
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
                    <div id="contact" 
                        className='home-contact'>
                        <div className='home-contact-content'>
                            <p>Skontaktuj się z nami</p>
                            <img src={Decoration} 
                                alt='decoration'/>
                            <form onSubmit={handleSubmit} 
                                className='home-contact-form'>
                                <div className='home-contact-form-info'>
                                    <label>
                                        Wpisz swoje imię
                                        <input 
                                            type='text' 
                                            name='name' 
                                            value={values.name} 
                                            onChange={handleChange} 
                                            onBlur={handleBlur}
                                            placeholder='Krzysztof'
                                            className={errors.name && touched.name && "error"}
                                        />
                                        {errors.name && touched.name && (
                                            <div className="errors">{errors.name}</div>
                                        )}
                                    </label>
                                    <label>
                                        Wpisz swój email
                                        <input 
                                            type='email' 
                                            name='email' 
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            placeholder='abc@xyz.pl'
                                            className={errors.email && touched.email && "error"}
                                        />
                                        {errors.email && touched.email && (
                                            <div className="errors">{errors.email}</div>
                                        )}
                                    </label>
                                </div>
                                <label>
                                    Wpisz swoją wiadomość
                                    <textarea 
                                        name='message'
                                        value={values.message}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder='Lorem ipsum dolor sit amet, 
                                                    consectetur adipiscing elit, 
                                                    sed do eiusmod tempor incididunt 
                                                    ut labore et dolore magna aliqua. 
                                                    Ut enim ad minim veniam, quis 
                                                    nostrud exercitation ullamco 
                                                    laboris nisi ut aliquip ex ea commodo 
                                                    consequat.'
                                        className={errors.message && touched.message && "error"}
                                    />
                                    {errors.message && touched.message && (
                                        <div className="errors">{errors.message}</div>
                                    )}
                                </label>
                                <div className='home-contact-form-btn'>
                                    <button type='submit' disabled={isSubmitting}>Wyślij</button>
                                </div>
                            </form>
                        </div>
                    <div className='home-contact-footer'>
                        <p>Copyright by Coders Lab</p>
                        <div className='social-media'>
                            <img 
                                src={Facebook} 
                                alt="Facebook"/>
                            <img 
                                src={Instagram} 
                                alt="Instagram"/>
                        </div>
                    </div>
                </div>
                );
            }}
        </Formik>

   

    // sendMessage = () => {
    //     const newMessage = this.state
    //     fetch('https://fer-api.coderslab.pl/v1/portfolio/contact',{
    //         headers: {
    //             'content-type': 'application/json',
    //         },
    //         method: 'POST',
    //         body: JSON.stringify(newMessage),
    //     }).then((response) => {
    //         console.log(response)
    //         // return response.json();
    //     }).catch((error) => {
    //         console.log(error);
    //     })
    // };
);

export default Contact;