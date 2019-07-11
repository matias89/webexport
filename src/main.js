import React from 'react';
import { render } from 'react-dom';

import Button from './components/Button/Button';
import Card from './components/Card/Card';
import Modal from './components/Modal/Modal';

const App = () => {
    return (
        <div>
            {[0, 1, 2, 3, 4].map(item => {
                return (
                    <Modal title={`titulo del modal ${item}`}>
                        <Card
                            title={'Soy un titulo '}
                        />
                        <Button
                            title="Boton A"
                            description="Soy una descripción"
                            price={100}
                            handleOnClick={() => window.alert('Hola Mundo!')}
                        />
                    </Modal>
                );
            })}
        </div>
    );
}

render(
    <App />,
    document.getElementById('app')
);