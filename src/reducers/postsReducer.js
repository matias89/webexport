const initialState = {
    posts: [],
    loader: false
};

function postsReducer(state = initialState, action) {
    switch(action.type) {
        case 'POST_REQUESTED':
            return {
                ...state,
                loader: true
            }
        case 'POST_SUCCEDED':
        console.log('>>>', action);
            return {
                ...state,
                posts: action.posts,
                loader: false
            }
        case 'POST_FAILED':
            return {
                ...state,
                loader: false
            }
        default:
            return state;
    }
}

export default postsReducer;