import React, { Component } from 'react';
import './Pokemon.css';
import { Link } from 'react-router-dom';


class Pokemon extends Component {
    render() {
        const pokemon = this.props.pokemon;
        console.log(pokemon.abilities)
        return (
            <div>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                <div>Forma Shiny</div>
                <img src={pokemon.sprites.front_shiny} alt={pokemon.name} />
                <div>Forma normal</div>
                <h2>{pokemon.name}</h2>
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

// name={pokemon.name}
// weight={pokemon.weight}
// height={pokemon.height}
// pokemDefault={pokemon.sprites.front_default}
// pokemonShiny={pokemon.sprites.front_shiny}
// abilities={pokemon.abilities.map((ab) => ab.abilities.name)}
export default Pokemon