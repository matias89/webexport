const initialState = {
    counter: {
        value: 0
    }
}


function counterReducer(state = initialState, action) {
    switch(action.type) {
        case 'INCREMENT':
            return state + action.payload.incrementValue;
        case 'DECREMENT':
            return state - action.payload.decrementValue;
        default:
            return state;
    }
}

export default counterReducer;