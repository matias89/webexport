import React from 'react';

const Counter = props => {
    const { initialValue, incrementFn } = props;
    return (
        <section>
            <button className="btn btn-primary mr-4">-</button>
            <span>{initialValue}</span>
            <button className="btn btn-primary ml-4" onClick={incrementFn}>+</button>
        </section>
    );
}

export default Counter;