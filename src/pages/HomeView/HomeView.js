import React, { Component } from 'react';

import { connect } from 'react-redux';

// Components
import Card from '../../components/Card/Card';

// Actions
import { increment, decrement, fetchPosts } from '../../actions/counterActions';

// Interceptor
const originalFetch = window.fetch;
window.fetch1 = async function(url, options = {}) {
    console.log('>>> fetch intercepted');
    let myFetch = await originalFetch(url, options);
    if(myFetch.status === 200) { // 401
        // Request new token and set new header
        // Then set myFetch again
        const newOptions = {
            headers: {
                //'Content-Type': 'application/json'
            }
        }
        myFetch = await originalFetch(url, newOptions);
    }
    console.log('>>> options', options);
    return myFetch;
}

class HomeView extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchPosts();
    }
    render() {
        const { counter, increment, decrement, posts } = this.props;
        return (
            <div className="container">
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
