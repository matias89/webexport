import React from 'react';
import './Button.scss';

const Button = props => {
    const { title, description, price, handleOnClick } = props;
    return (
        <article>
            <p>{description}</p>
            <button className="button" onClick={handleOnClick}>{title} - {price}</button>
        </article>
    );
}

export default Button;