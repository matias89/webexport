import React, { Component } from 'react';

import Button from '../Button/Button';

class Card extends Component {
    constructor(props) {
        super(props);
        this.handleOnDelete = this.handleOnDelete.bind(this);
        this.state = {
            message: '',
            buttonDisabled: false
        }
    }
    handleOnDelete() {
        this.setState({
            message: 'Eliminado',
            buttonDisabled: true
        })
    }
    buildErrorMessage() {
        return this.state.message !== '' ? (
            <div className="alert alert-danger">
                {this.state.message}
            </div>
        ) : null;
    }
    render() {
        const { title, description } = this.props;
        return (
            <div className="card">
                <div className="card-body">
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <Button
                        title="Eliminar"
                        handleOnClick={this.handleOnDelete}
                        disabled={this.state.buttonDisabled}
                    />
                    {this.buildErrorMessage()}
                </div>
            </div>
        );
    }
}

export default Card;

