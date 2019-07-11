import React from 'react';

function Modal(props) {
    console.log('>>> Test', props);
    return (
        <div>
            <h1>{props.title}</h1>
            {props.children}
            <hr />
        </div>
    );
}

export default Modal;