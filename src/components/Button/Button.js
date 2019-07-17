import React from 'react';
import './Button.scss';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'Eliminar'
        }
    }
    componentWillReceiveProps(nextProps) {
        if(this.props.disabled !== nextProps.disabled) {
            this.setState({
                message: 'Eliminado'
            })
        }
    }
    render() {
        const { title, description, disabled, handleOnClick } = this.props;
    return (
        <article>
            <p>{description}</p>
            <button
                className="btn btn-primary"
                onClick={handleOnClick}
                disabled={disabled}
            >{this.state.message}</button>
        </article>
    );
    }
} 

export default Button;