import React, { Component } from 'react'
import SearchBox from './Components/SearchBox'
import List from './Components/List'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import Pokemon from './Components/Pokemon'

class App extends Component {
  constructor(props) {
    super()
    this.state = {
      pokemonInfo: [],
      filteredList: '',
      pokemonEvo: []
    }
    this.fecthPokeApi = this.fetchPokeApi.bind(this)
    this.handleFilter = this.handleFilter.bind(this)
    this.fetchPokeEvo = this.fetchPokeEvo.bind(this)
  }

  //Poke API fecth de datos y evolución
  componentDidMount() {
    this.fetchPokeApi()
    this.fetchPokeEvo()
  }

  fetchPokeApi() {
    for (let id = 1; id <= 25; id++) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(response => response.json())
        .then(data => {
          let pokemonList = this.state.pokemonInfo
          pokemonList.push(data)
          this.setState({
            pokemonInfo: pokemonList,
          })
        })
    }
  }

  fetchPokeEvo() {
    for (let id = 1; id <= 25; id++) {
      fetch(`https://pokeapi.co/api/v2/evolution-chain/${id}/`)
        .then(response => response.json())
        .then(data => {
          let pokemonEvoList = this.state.pokemonEvo
          pokemonEvoList.push(data)
          console.log(pokemonEvoList)
          this.setState({
            pokemonEvo: pokemonEvoList
          })
        })
    }
  }

  //Filtrar pokemon
  handleFilter(e) {
    this.setState({
      filteredList: e.target.value,
    })
  }

  //renderizar pokemon list

  render() {
    const filteredPokeList = this.state.pokemonInfo.filter(pokemon =>
      pokemon.name
        .toLowerCase()
        .includes(this.state.filteredList.toLowerCase()),
    )
    return (
      <main>
        <header className="pikachuParts">
          <div className="blackTriangle1" />
          <div className="blackTriangle2" />
        </header>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <div>
                <SearchBox
                  value={this.state.filteredList}
                  onChange={this.handleFilter}
                />
                <List
                  list={filteredPokeList}
                  evolve={this.state.pokemonEvo} />
              </div>
            )}
          />
          <Route
            path="/poke/:id"
            render={props => {
              const id = props.match.params.id
              const pokemon = this.state.pokemonInfo.find(
                poke => poke.id === Number(id),
              )
              return (
                <Pokemon
                  pokemon={pokemon}
                />
              )
            }}
          />
        </Switch>
        <footer className="pikachuParts">
          <div className="redCircle1" />
          <div className="redCircle2" />
        </footer>
      </main>
    )
  }
}

export default App

