import React, { Component } from 'react';

class DetailView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: ''
        }
        console.log('>>> Props', this.props);
    }

    componentDidMount() {
        const { match: { params: { id } } } = this.props;
        window.fetch('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(response => {
                response.json()
                    .then(post => {
                        const { title, body } = post;
                        this.setState({
                            title,
                            description: body
                        });
                        console.log('>>> Post', post);
                    })
            })
            .catch();
    }
    render() {
        const { title, description } = this.state;
        return (
            <div style={{marginTop: '100px'}}>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        );
    };
}

export default DetailView;

/*
props => {
                            const { match: { params } } = props;
                            return (
                                <h2>Detail { params.id } </h2>
                            );
                        }
                        */