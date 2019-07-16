import React from 'react';
import { render } from 'react-dom';
import Card from './components/Card/Card';

import posts from './constants/posts';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            reloj: new Date().toLocaleTimeString()
        }
        window.setTimeout(() => {
            this.setState({
                posts
            });
        }, 3000);
        window.setInterval(() => {
            this.setState({
                reloj: new Date().toLocaleTimeString()
            });
        }, 1000);
    }
    render() {
        const { posts } = this.state;
        return (
            <div className="container">
                <div className="alert alert-primary">
                    {this.state.reloj}
                </div>
                {(posts.length) ? (
                    posts.map((item) => {
                        const { title, body, id } = item;
                        return (
                            <Card
                                title={title}
                                description={body}
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