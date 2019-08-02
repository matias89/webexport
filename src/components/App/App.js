import React from 'react';

import {
    BrowserRouter,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

// Routes
import DetailView from '../../pages/DetailView/DetailView';
import HomeView from '../../pages/HomeView/HomeView';
// Components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
// Reducers
import counterReducer from '../../reducers';
// Store
const store = createStore(
    counterReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends React.Component {
    
    render() {
        return (
            <Provider store={store}>
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
            </Provider>
        );
    }
}

export default App;