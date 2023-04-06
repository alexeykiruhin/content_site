import postsReducer from './reducers/postsReducer';
import createPostReducer from './reducers/createPostReducer';
import {combineReducers, legacy_createStore as createStore} from "redux";
import usersReducer from "./reducers/usersReducer";
import userReducer from "./reducers/userReducer";

let rootReducers = combineReducers({
    postsPage: postsReducer,
    createPostPage: createPostReducer,
    usersPage: usersReducer,
    userPage: userReducer
})

let store = createStore(rootReducers)

export default store;