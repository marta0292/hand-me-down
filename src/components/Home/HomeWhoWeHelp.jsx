import React, { Component } from "react";
import "../../scss/components/home/_homeWhoWeHelp.scss"
import Decoration from '../../assets/Decoration.svg';

class HomeWhoWeHelp extends Component {
    state = {
        whoWeHelp: []
    };

    componentDidMount() {
        fetch('http://localhost:3001/whoWeHelp')
            .then((response) => {
                return response.json();
            })
            .then((whoWeHelp) => {
                this.setState({
                    whoWeHelp,
                })
            })
    };

    render() {
       const { whoWeHelp } = this.state;

        return (
            <div id='who' className='home-who-we-help'>
                <p className='who-we-help-title'>Komu pomagamy?</p>
                <img src={Decoration} alt='decoration'/>
                <div className='who-we-help-options'>
                    <button>Fundacjom</button>
                    <button>Organizacjom<br />pozarządowym</button>
                    <button>Lokalnym<br />zbiórkom</button>
                </div>
                <div className='who-we-help-description'>
                    W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
                </div>
                <div className='who-we-help-list'>
                    <ul>
                        {whoWeHelp.map(whoWeHelp => {
                            return (
                                <li className='who-we-help-box'>
                                    <div className='who-we-help-box-title'>
                                        <h3>{whoWeHelp.type} "{whoWeHelp.title}"</h3>
                                        <p>Cel i misja: {whoWeHelp.goal}</p>
                                    </div>
                                    <p>{whoWeHelp.description}</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        ); 
    }
};

export default HomeWhoWeHelp;