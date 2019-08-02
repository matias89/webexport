import React, { Component } from 'react';

import { connect } from 'react-redux';

// Components
import Card from '../../components/Card/Card'

class HomeView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
        }
    }
    componentDidMount() {
        console.log('>>> props', this.props);
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
        const { counter, increment } = this.props;
        const { posts } = this.state;
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
            counter: state.counter.value
        }
    },
    dispatch => {
        return {
            increment: () => dispatch({
                type: 'INCREMENT',
                payload: {
                    incrementValue: 1
                }
            })
        }
    }
)(HomeView);
