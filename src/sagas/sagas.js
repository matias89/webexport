import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

const apiCall = () => {
    return window.fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            return response.json()
                .then(posts => {
                    return posts;
                })
        })
        .catch(error => {
            return error;
        })
}

function* fetchPost(action) {
 try {
     const posts = yield call(apiCall);
     yield put({type: 'POST_SUCCEDED', posts});
 } catch (error) {
     yield put({type: 'POST_FAILED', error})
 }
}


function* mySaga() {
    yield takeLatest('POST_REQUESTED', fetchPost);
}

export default mySaga;