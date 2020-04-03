import React, { Component } from "react";
import "../../scss/components/home/_homeWhoWeHelp.scss"
import Decoration from '../../assets/Decoration.svg';

class HomeWhoWeHelp extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            description: '',
            items: [],
            currentPage: 1,
            itemsPerPage: 3
    };
    this.handleClick = this.handleClick.bind(this);
    }
    

    componentDidMount() {
        fetch('http://localhost:3001/whoWeHelp/1')
            .then((response) => {
                return response.json();
            })
            .then((whoWeHelp) => {
                this.setState({
                    description: whoWeHelp.desc,
                    items: whoWeHelp.items,
                    name: whoWeHelp.name
                })
            })
    };

    handleGetData = (e) => {
        const pathId = e.target.id;
        fetch(`http://localhost:3001/whoWeHelp/${pathId}`, {
        }).then(resp => {
            return resp.json();
        }).then((whoWeHelp) => {
            this.setState({
                description: whoWeHelp.desc,
                items: whoWeHelp.items,
                name: whoWeHelp.name
            })
        }) 
    };

    handleClick(event) {
        this.setState({
          currentPage: Number(event.target.id)
        });
      }

    render() {
        const { description, items, name, currentPage, itemsPerPage } = this.state;

        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem -itemsPerPage;
        const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
        
        const renderItems = currentItems.map((item, index) => {
            return (
                <li 
                key={index}
                className='who-we-help-box'>
                <div className='who-we-help-box-title'>
                    <h3>{name} "{item.title}"</h3>
                    <p>Cel i misja: {item.goal}</p>
                </div>
                <p>{item.description}</p>
            </li>
            )
        });

        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
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
                    <button id='1' onClick={this.handleGetData}>Fundacjom</button>
                    <button id='2' onClick={this.handleGetData}>Organizacjom<br />pozarządowym</button>
                    <button id='3' onClick={this.handleGetData}>Lokalnym<br />zbiórkom</button>
                </div>
                <div className='who-we-help-description'>
                    {description}
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