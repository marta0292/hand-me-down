import React, { Component } from "react";
import "../../scss/components/home/_homeWhoWeHelp.scss"
import Decoration from '../../assets/Decoration.svg';

class HomeWhoWeHelp extends Component {
    constructor() {
        super();
        this.state = {
            whoWeHelp: [],
            currentPage: 1,
            itemsPerPage: 3
    };
    this.handleClick = this.handleClick.bind(this);
    }
    

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

    handleClick(event) {
        this.setState({
          currentPage: Number(event.target.id)
        });
      }

    render() {
        const { whoWeHelp, currentPage, itemsPerPage } = this.state;

        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem -itemsPerPage;
        const currentItems = whoWeHelp.slice(indexOfFirstItem, indexOfLastItem);

        const renderItems = currentItems.map((whoWeHelp, index) => {
        return (
            <li 
            key={index}
            className='who-we-help-box'>
            <div className='who-we-help-box-title'>
                <h3>{whoWeHelp.type} "{whoWeHelp.title}"</h3>
                <p>Cel i misja: {whoWeHelp.goal}</p>
            </div>
            <p>{whoWeHelp.description}</p>
        </li>
        )});

        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(whoWeHelp.length / itemsPerPage); i++) {
          pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
          return (
            <li
              key={number}
              id={number}
              onClick={this.handleClick}
            >
              {number}
            </li>
          );
        });

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
                        {renderItems}
                    </ul>
                    <ul id="page-numbers" className='pagination'>
                        {renderPageNumbers}
                    </ul>
                </div>
            </div>
        ); 
    }
};

export default HomeWhoWeHelp;