import React from "react";
import "../../scss/components/home/_homeContact.scss"
import Facebook from "../../assets/Facebook.svg";
import Instagram from "../../assets/Instagram.svg";
import Decoration from "../../assets/Decoration.svg";

const HomeContact = () => {
    return (
        <div id="contact" className='home-contact'>
            <div className='home-contact-content'>
                <p>Skontaktuj się z nami</p>
                <img src={Decoration} alt='decoration'/>
                <form className='home-contact-form'>
                    <div className='home-contact-form-info'>
                        <label>
                            Wpisz swoje imię
                            <input type='text' name='name' placeholder='Krzysztof'/>
                        </label>
                        <label>
                            Wpisz swój email
                            <input type='email' name='email' placeholder='abc@xyz.pl'/>
                        </label>
                    </div>
                    <label>
                        Wpisz swoją wiadomość
                        <textarea placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
                    </label>
                    <div className='home-contact-form-btn'>
                        <button type='submit'>Wyślij</button>
                    </div>
                </form>
            </div>
            <div className='home-contact-footer'>
                <p>Copyright by Coders Lab</p>
                <div className='social-media'>
                    <img src={Facebook} alt="Facebook"/>
                    <img src={Instagram} alt="Instagram"/>
                </div>
            </div>
        </div>
    );
};

export default HomeContact;