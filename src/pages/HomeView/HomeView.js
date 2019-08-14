import React, { Component } from 'react';

import { connect } from 'react-redux';

// Components
import Card from '../../components/Card/Card';

// Actions
import { increment, decrement, fetchPosts } from '../../actions/counterActions';

// Services
import { messageService } from '../../utilities/services';

class HomeView extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchPosts();
    }
    sendMessage() {
        window.setTimeout(() => {
            messageService
            .sendMessage('Has recibido un nuevo mensaje!');
        }, 3000);
    }
    clearMessage() {
        messageService.clearMessage();
    }
    render() {
        const { counter, increment, decrement, posts } = this.props;
        return (
            <div className="container">
                <div>
                    <button
                        onClick={this.sendMessage}
                        className="btn btn-success"
                    >
                        Enviar Mensaje
                    </button>
                    <button
                        onClick={this.clearMessage}
                        className="btn btn-danger"
                    >
                        Borrar Mensajes
                    </button>
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
                                            id={id}
                                            initialValue={counter}
                                            incrementFn={increment}
                                            decrementFn={decrement}
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
        );
    };
}

export default connect(
    state => {
        return {
            counter: state.counterReducer.counter.value,
            posts: state.postsReducer.posts
        }
    },
    dispatch => {
        return {
            increment: increment(dispatch),
            decrement: decrement(dispatch),
            fetchPosts: fetchPosts(dispatch)
        }
    }
)(HomeView);
