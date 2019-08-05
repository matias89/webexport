import "regenerator-runtime/runtime";

import React from 'react';

import {
    BrowserRouter,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'

// Routes
import DetailView from '../../pages/DetailView/DetailView';
import HomeView from '../../pages/HomeView/HomeView';
// Components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
// Reducers
import reducers from '../../reducers';
// Saga middleware
const sagaMiddleware = createSagaMiddleware();
// Saga
import mySaga from '../../sagas/sagas';
// Store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(
            sagaMiddleware
        )
    )
    //applyMiddleware(sagaMiddleware)
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

sagaMiddleware.run(mySaga);



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