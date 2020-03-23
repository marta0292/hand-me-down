import React from "react";
import "../../scss/components/home/_homeAboutUs.scss";
import Decoration from '../../assets/Decoration.svg';
import Signature from '../../assets/Signature.svg';

const HomeAboutUs = () => {
    return (
        <div id="about" className='home-about-us'>
            <div className='home-about-us-content'>
                <p className='about-us-title'>O nas</p>
                <img src={Decoration} alt='decoration'/>
                <p className='about-us-text'>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                <div className='about-us-signature'>
                    <img src={Signature}
                         alt='signature'/>
                </div>
            </div>
            <div className='home-about-us-picture'></div>
        </div>
    );
};

export default HomeAboutUs;