import React, { Component } from "react";
import SearchBox from './Components/SearchBox';
import List from './Components/List';


class App extends Component {
  constructor(props) {
    super();
    this.state = {

    }
    this.fecthPokeApi = this.fetchPokeApi.bind(this);
  }


  //Poke API fecth
  componentDidMount() {
    fetchPokeApi()
  }

  fetchPokeApi() {
    fetch('http://pokeapi.salestock.net/api/v2/')
      .then((response) => response.json())
      .then(json)

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
