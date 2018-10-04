import React, { Component } from 'react';
import Element from './Element';


class List extends Component {
    render() {
        console.log(this.props.pokemonInfo, 'me quiero morir')
        //Map en cada LI para mostrar las infos de las APIS una a una 
        const pokeList = this.props.pokemonInfo.map((pokemon, index) => {
            return (
                <li key={index}>
                    <Element
                        id={pokemon.id}
                        key={index}
                        name={pokemon.name}
                        image={pokemon.sprites.front_default}
                        type={pokemon.type.map((types) =>
                            types.type.name)}
                    />
                </li>
            )
        });
        return (
            <ul>
                {pokeList}
            </ul>
        )
    }
}
export default List;