import React from 'react';

const Counter = props => {
    const { initialValue, incrementFn, decrementFn } = props;
    return (
        <section>
            <button className="btn btn-primary mr-4" onClick={decrementFn}>-</button>
            <span>{initialValue}</span>
            <button className="btn btn-primary ml-4" onClick={incrementFn}>+</button>
        </section>
    );
}

export default Counter;