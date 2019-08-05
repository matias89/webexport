
import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import postsReducer from './postsReducer';

export default combineReducers({
    counterReducer,
    postsReducer
});