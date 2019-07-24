import React from 'react';
import { render } from 'react-dom';

import {
    BrowserRouter,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom';

import Card from './components/Card/Card';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

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
    v1render() {
        const { posts } = this.state;
        return (
            <main>
                <Header />
                <div className="container">
                    {this.state.test}
                    <div className="alert alert-primary">
                        {this.state.reloj}
                    </div>
                    {(posts.length) ? (
                        <div className="row">
                            {
                                posts.map((item) => {
                                    const { title, body, id } = item;
                                    return (
                                        <div className="col-4 mt-4" key={id}>
                                            <Card
                                                title={title}
                                                description={body}
                                            />
                                        </div>
                                    );
                                })
                            }
                        </div>
                    ) : (
                        <div className="d-flex justify-content-center">
                            <div className="spinner-border" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div> 
                    )}
                </div>
                <Footer />
            </main>
        );
    }
    render() {
        return (
            <BrowserRouter>
                <div>
                    <ul>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/contact">contact</Link>
                        </li>
                        <li>
                            <Link to="/detail/136">Detail</Link>
                        </li>
                    </ul>
                    <Switch>
                        <Route path="/home" component={() => {
                            return (
                                <h2>Home</h2>
                            );
                        }} />
                        <Route path="/contact" exact component={() => {
                            return (
                                <h2>Contact</h2>
                            );
                        }} />
                        <Route path="/detail/:id" exact component={props => {
                            const { match: { params } } = props;
                            return (
                                <h2>Detail { params.id } </h2>
                            );
                        }} />
                        <Route path="/admin" component={() => {
                            return <BrowserRouter basename="/admin" >
                                <div>
                                    <Route path="/users" component={() => {
                                        return (
                                            <h1>Users</h1>
                                        )
                                    }} />
                                </div>
                            </BrowserRouter>
                        }} />
                        <Route component={() => <h1>Error</h1>} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

render(
    <App />,
    document.getElementById('app')
);