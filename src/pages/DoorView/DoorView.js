import React, { Component, useState } from 'react';

class _DoorView extends Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
    }
    render() {
        const { open } = this.state;
        return (
            <div>
                <h2>La puerta está {open ? 'Abierta' : 'Cerrada'}</h2>
                <button
                    onClick={
                        () => this.setState({
                            open: !this.state.open
                        })
                    }
                >{open ? 'Cerrar' : 'Abrir'}</button>
            </div>
        );
    }
}

const DoorView = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <h2>La puerta está {open ? 'Abierta' : 'Cerrada'}</h2>
            <button onClick={() => setOpen(!open)}>
                {open ? 'Cerrar' : 'Abrir'}
            </button>
        </div>
    );
}

export default DoorView;