import React, { Component } from "react";
import SearchBox from './Components/SearchBox';
import List from './Components/List';


class App extends Component {
  constructor(props) {
    super();
    this.state = {
      pokemonInfo: []
    }
    this.fecthPokeApi = this.fetchPokeApi.bind(this);
  }


  //Poke API fecth
  componentDidMount() {
    this.fetchPokeApi()
  }

  fetchPokeApi() {
    for (let id = 1; id < 25; id++) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.setState = {
            pokemonInfo: data
          }
        })
    }
  }

  render() {
    return (
      <div>
        <SearchBox />
        <List />
      </div>
    );
  }
}

export default App;
