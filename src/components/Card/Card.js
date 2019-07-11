import React, { Component } from 'react';

class Card extends Component {
    render() {
        const { title } = this.props;
        return (
            <div>
                <h1>{title}</h1>
            </div>
        );
    }
}

export default Card;

