import React, { Component } from 'react';
import Element from './Element'

class List extends Component {
    render() {
        return (
            <div>
                <ul>
                    <Element />
                </ul>
            </div>
        );
    }
}

export default List;