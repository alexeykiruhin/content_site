import postsReducer from './reducers/postsReducer';
import createPostReducer from './reducers/createPostReducer';
import {combineReducers, legacy_createStore as createStore} from "redux";

let rootReducers = combineReducers({
    posts: postsReducer,
    createPost: createPostReducer
})

let store = createStore(rootReducers)

export default store;