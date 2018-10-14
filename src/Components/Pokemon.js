import React, { Component } from 'react';
import './Pokemon.css';
import { Link } from 'react-router-dom';

class Pokemon extends Component {
    render() {
        console.log(this.props.pokemon)
        return (
            <div>
                <div>Nombre</div>
                <div>Peso</div>
                <div>Altura</div>
                <div>Habilidades</div>
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
export default Pokemon;