import React from 'react';
import './Button.scss';

const Button = props => {
    const { title, description, disabled, handleOnClick } = props;
    return (
        <article>
            <p>{description}</p>
            <button
                className="btn btn-primary"
                onClick={handleOnClick}
                disabled={disabled}
            >{title}</button>
        </article>
    );
}

export default Button;