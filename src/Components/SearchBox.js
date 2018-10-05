import React, { Component } from "react";

class SearchBox extends Component {
  render() {
    return (
      <input type='text'
        value={this.props.value}
        onChange={this.props.onChange}
      />
    );
  }
}

export default SearchBox;
