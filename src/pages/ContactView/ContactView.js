import React, { Component } from 'react';

class ContactView extends Component {
    constructor(props) {
        super(props);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.state = {
            value: ''
        }
    }
    handleOnChange(event) {
        this.setState({
            value: event.target.value
        });
    }
    render() {
        return (
            <div>
                <h2>Contact</h2>
                <input
                    type="text"
                    value={this.state.value}
                    className="form-control mt-4 mb-4"
                    onChange={this.handleOnChange}
                />
            </div>
        );
    };
}

export default ContactView;