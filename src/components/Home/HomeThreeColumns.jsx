import React from "react";
import "../../scss/components/home/_homeThreeColumns.scss"

const HomeThreeColumns = () => {
    return (
        <div className='home-three-columns'>
            <div className='home-three-columns-info'>
                <div className='home-three-columns-box'>
                    <div className='home-three-columns-number'>10</div>
                    <div className='home-three-columns-title'>oddanych worków</div>
                    <div className='home-three-columns-text'>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</div>
                </div>
                <div className='home-three-columns-box'>
                    <div className='home-three-columns-number'>5</div>
                    <div className='home-three-columns-title'>wspartych organizacji</div>
                    <div className='home-three-columns-text'>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</div>
                </div>
                <div className='home-three-columns-box'>
                    <div className='home-three-columns-number'>7</div>
                    <div className='home-three-columns-title'>zorganizowanych zbiórek</div>
                    <div className='home-three-columns-text'>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</div>
                </div>
            </div>
        </div>
    );
};

export default HomeThreeColumns;