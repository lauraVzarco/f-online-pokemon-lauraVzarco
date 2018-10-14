import React, { Component } from 'react';
import './Pokemon.css';
import { Link } from 'react-router-dom';


class Pokemon extends Component {
    render() {
        const pokemon = this.props.pokemon;
        console.log(pokemon.abilities)
        return (
            <div className='pokemon-details'>
                <h2 className='pokemon-name'>{pokemon.name}</h2>
                <div className='pokemon-colors'>
                    <div>
                        <img
                            src={pokemon.sprites.front_default}
                            alt={pokemon.name} />
                        <div>Forma normal</div></div>
                    <div>
                        <img
                            src={pokemon.sprites.front_shiny}
                            alt={pokemon.name} />
                        <div>Forma shiny</div>
                    </div>
                </div>
                <div>Peso: {pokemon.weight} </div>
                <div>Altura: {pokemon.height}</div>
                <div>Habilidades:
                    <ul>
                        {(pokemon.abilities.map((pokemonAbilities) => {
                            const {
                                ability,
                                index
                            } = pokemonAbilities;
                            return (
                                <li key={index}> {ability.name} </li>
                            );
                        }))
                        }
                    </ul>
                </div>
                <Link className="backToHome" to={'/'}>
                    Volver
        </Link>
            </div>
        )
    }
}

export default Pokemon