const increment = dispatch => () => {
    console.log('increment');
    dispatch({
        type: 'INCREMENT',
        payload: {
            incrementValue: 1
        }
    })
}

const decrement = dispatch => () => {
    console.log('decrement');
    dispatch({
        type: 'DECREMENT',
        payload: {
            decrementValue: 1
        }
    })
}

export {
    increment,
    decrement
}