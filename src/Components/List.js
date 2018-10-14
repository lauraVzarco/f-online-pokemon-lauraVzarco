import React, { Component } from 'react';
import Element from './Element';
import './List.css';
import { Link } from 'react-router-dom';

class List extends Component {
    render() {
        console.log(this.props.list, 'me quiero morir')
        //Map en cada LI para mostrar las infos de las APIS una a una 
        const pokeList = this.props.list
            .sort((a, b) => a.id - b.id)
            .map((pokemon) => {
                return (
                    <li key={pokemon.id} className='pokemonInfo'>
                        <Link className="cardLink" to={'/poke/' + pokemon.id}>
                            <Element
                                list={this.props.list}
                                id={pokemon.id}
                                key={pokemon.id}
                                name={pokemon.name}
                                image={pokemon.sprites.front_default}
                                type={pokemon.types.map((types) =>
                                    types.type.name)}
                            />
                        </Link>
                    </li>
                )
            });
        return (
            <ul className='pokemonList'>
                {pokeList}
            </ul>
        )
    }
}
export default List;