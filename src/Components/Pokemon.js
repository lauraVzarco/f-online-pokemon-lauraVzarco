import React, { Component } from 'react';
import './Pokemon.css';
import { Link } from 'react-router-dom';

class Pokemon extends Component {
    render() {
        return (
            <div>
                <Link className="backToHome" to={'/'}>
                    🔙 Volver
                </Link>
            </div>

        )
    }
}

export default Pokemon;