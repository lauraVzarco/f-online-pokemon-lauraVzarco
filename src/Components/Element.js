import React, { Component } from 'react';
import './Element.css';

class Element extends Component {

    render() {
        return (
            <div className='pokemonCard'>
                <div className='upCard'>
                    <img
                        src={this.props.image}
                        className='pokeImage'
                        alt="pokemon sprite" />
                    <div className='pokeId'>
                        ID / {this.props.id}
                    </div>
                </div>
                <div className='downCard'>
                    <div className='pokeName'>
                        {this.props.name}
                    </div>
                    <ul className='pokeType'>
                        {this.props.type.map((types, index) =>
                            <li
                                key={index}
                                className='type'>
                                {types}
                            </li>)}
                    </ul>
                </div>
            </div>
        );
    }
}


export default Element;