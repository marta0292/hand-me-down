import React, { Component } from "react";
import "../../scss/components/home/_homeContact.scss"
import Facebook from "../../assets/Facebook.svg";
import Instagram from "../../assets/Instagram.svg";
import Decoration from "../../assets/Decoration.svg";

const initialState = {
    name: "",
    email: "",
    message: "",
    nameError: "",
    emailError: "",
    messageError: "",
}
class HomeContact extends Component {
    state = initialState;

    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value,
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const isValid = this.validate();
    
        if (isValid) {
            console.log(this.state);
            this.setState(initialState);
            this.sendMessage()
        }

        return        
    };
    

    validate = () => {
        let nameError = "";
        let emailError = "";
        let messageError = "";

        if (this.state.name.includes(' ') && this.state.name.length > 0) {
            nameError = 'Podane imię jest nieprawidłowe!'
        }
        if (!this.state.email.includes('@')) {
            emailError = 'Podany email jest nieprawidłowy!'
        }
        if (this.state.message.length <= 120) {
            messageError = 'Wiadomość musi mieć conajmniej 120 znaków!'
        }

        if (nameError || emailError || messageError) {
            this.setState({ nameError, emailError, messageError });
            return false
        }

        return true;
    };

    sendMessage = () => {
        const newMessage = this.state
        fetch('https://fer-api.coderslab.pl/v1/portfolio/contact',{
            headers: {
                'content-type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(newMessage),
        }).then((response) => {
            console.log(response)
            // return response.json();
        }).catch((error) => {
            console.log(error);
        })
    };

    render() {
        const { name, email, message } = this.state;
            return (
        <div id="contact" 
            className='home-contact'>
            <div className='home-contact-content'>
                <p>Skontaktuj się z nami</p>
                <img src={Decoration} 
                    alt='decoration'/>
                <form onSubmit={this.handleSubmit} 
                    className='home-contact-form'>
                    {/* {this.handleSendMessage() && <div className="send-message">Wiadomość została wysłana!</br>Wkrótce się skontaktujemy.</div> } */}
                    <div className='home-contact-form-info'>
                        <label>
                            Wpisz swoje imię
                            <input type='text' 
                                name='name' 
                                value={name} 
                                onChange={this.handleChange} 
                                placeholder='Krzysztof'/>
                            <div className="error">{this.state.nameError}</div>
                        </label>
                        <label>
                            Wpisz swój email
                            <input type='email' 
                                name='email' 
                                value={email}
                                onChange={this.handleChange}
                                placeholder='abc@xyz.pl'/>
                            <div className="error">{this.state.emailError}</div>
                        </label>
                    </div>
                    <label>
                        Wpisz swoją wiadomość
                        <textarea name='message'
                            value={message}
                            onChange={this.handleChange}
                            placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
                        <div className="error">{this.state.messageError}</div>
                    </label>
                    <div className='home-contact-form-btn'>
                        <button type='submit'>Wyślij</button>
                    </div>
                </form>
            </div>
            <div className='home-contact-footer'>
                <p>Copyright by Coders Lab</p>
                <div className='social-media'>
                    <img src={Facebook} 
                        alt="Facebook"/>
                    <img src={Instagram} 
                        alt="Instagram"/>
                </div>
            </div>
        </div>
        );
    }
};

export default HomeContact;