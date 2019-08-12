import React, { Component, useState, useEffect } from 'react';

class _PostsView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }


    componentDidMount() {
        this.getPosts();
    }

    getPosts() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => this.setState({ posts }))
            .catch(error => console.log(error.message))
    }

    render() {
        const { posts } = this.state;
        return (
            <div>
                <ul>
                    {posts.map(post => <li key={post.id}>{post.title}</li>)}
                </ul>
            </div>
        );
    }
}

const PostsView = () => {
    const [posts, setPosts] = useState([]);

    function getPosts() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => setPosts(posts))
            .catch(error => console.log(error.message))
    }

    useEffect(() => {
        getPosts()
    }, []);

    return (
        <div>
            <ul>
                {posts.map(post => <li key={post.id}>{post.title}</li>)}
            </ul>
        </div>
    );
}

export default PostsView;