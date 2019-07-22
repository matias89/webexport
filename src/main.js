import React from 'react';
import { render } from 'react-dom';
import Card from './components/Card/Card';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            test: '',
            posts: [],
            reloj: new Date().toLocaleTimeString()
        }
        /*
        window.setInterval(() => {
            this.setState({
                //reloj: new Date().toLocaleTimeString()
            });
        }, 1000);
        */
    }
    componentDidMount() {
        window.fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                response.json()
                    .then(posts => {
                        this.setState({
                            posts
                        });
                    })
            })
            .catch(error => {
                console.log('Error', error);
            })
    }
    render() {
        const { posts } = this.state;
        return (
            <div className="container">
            {this.state.test}
                <div className="alert alert-primary">
                    {this.state.reloj}
                </div>
                {(posts.length) ? (
                    posts.map((item) => {
                        const { title, body, id } = item;
                        return (
                            <Card
                                title={title}
                                //description={body}
                                key={id}
                            />
                        );
                    })
                ) : (
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div> 
                )}
            </div>
        );
    }
}

render(
    <App />,
    document.getElementById('app')
);