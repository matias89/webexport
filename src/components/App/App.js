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
import createSagaMiddleware from 'redux-saga';

import throttle from 'lodash/throttle';

// Services
import { messageService } from '../../utilities/services';

// Routes
import DetailView from '../../pages/DetailView/DetailView';
import HomeView from '../../pages/HomeView/HomeView';
import ContactView from '../../pages/ContactView/ContactView';
import DoorView from '../../pages/DoorView/DoorView';
import PostsView from '../../pages/PostsView/PostsView';
// Components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
// Reducers
import reducers from '../../reducers';
// Saga middleware
const sagaMiddleware = createSagaMiddleware();
// Saga
import mySaga from '../../sagas/sagas';
// Storage
import { loadState, saveState } from '../../utilities/localStorage';
const persitedState = loadState();
// Store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const _store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(
            sagaMiddleware
        )
    )
);

const createStoreWithMiddleWare = compose(
    applyMiddleware(sagaMiddleware)
)(createStore);

const store = createStoreWithMiddleWare(
    reducers,
    persitedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(throttle(() => {
    () => {
        saveState(store.getState());
    }
}, 1000))

sagaMiddleware.run(mySaga);



class App extends React.Component {

    constructor(props) {
        super(props);
        this.subscription = null;
        this.state = {
            messages: []
        }
    }

    componentDidMount() {
        this.subscription = messageService
            .getMessage()
            .subscribe(message => {
                if(message) {
                    this.setState({
                        messages: [...this.state.messages, message]
                    });
                } else {
                    this.setState({
                        messages: []
                    });
                }
            })
    }

    componentWillUnmount() {
        this.subscription.unsubscribe();
    }
    
    render() {
        const { messages } = this.state;
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <main>
                        <Header />
                            <div style={{marginTop: '80px'}}>
                                <div id="notifications">
                                    {messages.map((message, index) => {
                                        return (
                                            <div key={index} className="alert alert-success">
                                                <p>{message.text}</p>
                                            </div>
                                        );
                                    })}
                                </div>
                                <Switch>
                                    <Route path="/home" component={HomeView} />
                                    <Route path="/contact" component={ContactView} />
                                    <Route path="/door" component={DoorView} />
                                    <Route path="/posts" component={PostsView} />
                                    <Route path="/detail/:id" exact component={DetailView} />
                                    <Route component={() => <h1>Error</h1>} />
                                </Switch>
                            </div>
                        <Footer />
                    </main>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;