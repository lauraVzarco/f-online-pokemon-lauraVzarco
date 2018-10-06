import React, { Component } from "react";
import SearchBox from './Components/SearchBox';
import List from './Components/List';
import './App.css';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      pokemonInfo: [],
      filteredList: ''
    }
    this.fecthPokeApi = this.fetchPokeApi.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }


  //Poke API fecth
  componentDidMount() {
    this.fetchPokeApi()
  }

  fetchPokeApi() {
    for (let id = 1; id <= 25; id++) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then((response) => response.json())
        .then((data) => {
          let pokemonList = this.state.pokemonInfo;
          pokemonList.push(data);
          this.setState({
            pokemonInfo: pokemonList
          })
        })
    }
  }

  //Filtrar pokemon
  handleFilter(e) {
    this.setState({
      filteredList: e.target.value
    })
  }

  render() {
    const filteredPokeList = this.state.pokemonInfo.filter((pokemon) => pokemon.name.toLowerCase().includes(this.state.filteredList.toLowerCase()))
    return (
      <main>
        <div className='pikachuParts'>
          <div className='blackTriangle1'></div>
          <div className='blackTriangle2'></div>
        </div>
        <SearchBox
          value={this.state.filteredList}
          onChange={this.handleFilter} />
        <List
          list={filteredPokeList} />
        <div className='pikachuParts'>
          <div className='redCircle1'></div>
          <div className='redCircle2'></div>
        </div>
      </main>
    );
  }
}

export default App;
