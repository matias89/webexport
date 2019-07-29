import React from 'react';
import { render } from 'react-dom';

import {
    BrowserRouter,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom';
// Routes
import DetailView from './pages/DetailView/DetailView';
import HomeView from './pages/HomeView/HomeView';
// Components

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

class App extends React.Component {
    
    render() {
        return (
            <BrowserRouter>
                <main>
                    <Header />
                    <Switch>
                        <Route path="/home" component={HomeView} />
                        <Route path="/detail/:id" exact component={DetailView} />
                        <Route component={() => <h1>Error</h1>} />
                    </Switch>
                    <Footer />
                </main>
            </BrowserRouter>
        );
    }
    v1render() {
        return (
            <BrowserRouter>
                <div>
                    <ul>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/detail/136">Detail</Link>
                        </li>
                    </ul>
                    
                </div>
            </BrowserRouter>
        );
    }
}

render(
    <App />,
    document.getElementById('app')
);