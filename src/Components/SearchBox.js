import React, { Component } from "react";
import './SearchBox.css';

class SearchBox extends Component {
  render() {
    return (
      <input
        placeholder='Filtra Pokémons por nombre...'
        className='inputFilter'
        type='text'
        value={this.props.value}
        onChange={this.props.onChange}
      />
    );
  }
}

export default SearchBox;
