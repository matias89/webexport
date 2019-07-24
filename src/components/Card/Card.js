import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/Button';

class Card extends Component {
    constructor(props) {
        super(props);
        this.handleOnDelete = this.handleOnDelete.bind(this);
        this.state = {
            message: '',
            buttonDisabled: false
        }
        this.interval = setInterval(() => {
            // algo
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.interval);
        console.log('>>> Componente desmontado');
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
                    <h2>{title}</h2>
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

Card.defaultProps = {
    title: 'Titulo Por Defecto 1',
    description: 'Descripción por defecto'
}
Card.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
}
export default Card;

