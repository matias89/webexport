const initialState = {
    counter: {
        value: 0
    }
}


function counterReducer(state = initialState, action) {
    switch(action.type) {
        case 'INCREMENT':
            return {
                ...state,
                counter: {
                    value: state.counter.value + action.payload.incrementValue
                }
            }
        case 'DECREMENT':
        return {
            ...state,
            counter: {
                value: state.counter.value - action.payload.decrementValue
            }
        }
        default:
            return state;
    }
}

export default counterReducer;