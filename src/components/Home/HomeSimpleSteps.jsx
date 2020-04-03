import React from "react";
import "../../scss/components/home/_homeSimpleSteps.scss"
import Decoration from "../../assets/Decoration.svg";
import TShirt from "../../assets/Icon-1.svg";
import Bag from "../../assets/Icon-2.svg";
import Loupe from "../../assets/Icon-3.svg";
import Swap from "../../assets/Icon-4.svg";
import {Link} from "react-router-dom";

const HomeSimpleSteps = () => {
    return (
        <div id="steps"
             className='home-simple-steps'>
            <p>Wystarczą 4 proste kroki</p>
            <img src={Decoration}
                 alt='decoration'/>
            <div className='home-simple-steps-content'>
                <div className='simple-step'>
                    <div>
                        <img src={TShirt}
                            alt='T-shirt'/>
                    </div>
                    <p className='simple-step-title'>Wybierz rzeczy</p>
                    <div className='line'></div>
                    <p className='simple-step-text'>ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div className='simple-step'>
                    <div>
                        <img src={Bag}
                             alt='Bag'/>
                    </div>
                    <p className='simple-step-title'>Spakuj je</p>
                    <div className='line'></div>
                    <p className='simple-step-text'>skorzystaj z worków na śmieci</p>
                </div>
                <div className='simple-step'>
                    <div>
                        <img src={Loupe}
                             alt='Loupe'/>
                    </div>
                    <p className='simple-step-title'>Zdecyduj komu chcesz pomóc</p>
                    <div className='line'></div>
                    <p className='simple-step-text'>wybierz zaufane miejsce</p>
                </div>
                <div className='simple-step'>
                    <div>
                        <img src={Swap}
                             alt='Swap'/>
                    </div>
                    <p className='simple-step-title'>Zamów kuriera</p>
                    <div className='line'></div>
                    <p className='simple-step-text'>kurier przyjedzie w dogodnym terminie</p>
                </div>
            </div>
            <Link className='home-simple-steps-btn' to="/logowanie">oddaj<br/>rzeczy</Link>
        </div>
    );
};

export default HomeSimpleSteps;