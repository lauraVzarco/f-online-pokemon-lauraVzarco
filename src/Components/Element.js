import React, { Component } from 'react';
import './Element.css';

class Element extends Component {

    render() {
        return (
            <div>
                <div>
                    <img src={this.props.image} alt="pokemon sprite" />
                    <div>{this.props.id}</div>
                </div>
                <div>
                    <div>{this.props.name}</div>
                    <div>{this.props.type}</div>
                </div>
            </div>
        );
    }
}


export default Element;