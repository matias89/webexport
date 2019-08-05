import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Link
} from 'react-router-dom';

// import Button from '../Button/Button';
import Counter from '../Counter/Counter';

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
        const { title, description, id, initialValue, incrementFn, decrementFn } = this.props;
        return (
            <div className="card">
                <div className="card-body">
                    <h2><Link to={`/detail/${id}`}>{title}</Link></h2>
                    <p>{description}</p>
                    {/*
                    <Button
                        title="Eliminar"
                        handleOnClick={this.handleOnDelete}
                        disabled={this.state.buttonDisabled}
                    />
                    */}
                    <Counter
                        initialValue={initialValue}
                        incrementFn={incrementFn}
                        decrementFn={decrementFn}
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

