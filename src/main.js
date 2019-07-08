import React from 'react';
import { render } from 'react-dom';

import Button from './components/Button/Button';

const App = () => {
    return (
        <div>
            <h1>Hola Mundo</h1>
            <p>Soy un párrafo</p>
            <Button title="A" />
            <Button title="B" />
            <Button title="C" />
            <Button title="D" />
        </div>
    );
}

render(
    <App />,
    document.getElementById('app')
);