import postsReducer from './reducers/postsReducer';
import createPostReducer from './reducers/createPostReducer';
import {combineReducers, legacy_createStore as createStore} from "redux";

let rootReducers = combineReducers({
    postsPage: postsReducer,
    createPostPage: createPostReducer
})

let store = createStore(rootReducers)

export default store;