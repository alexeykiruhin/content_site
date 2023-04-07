import postsReducer from './reducers/postsReducer';
import createPostReducer from './reducers/createPostReducer';
import {combineReducers, legacy_createStore as createStore} from "redux";
import usersReducer from "./reducers/usersReducer";
import userReducer from "./reducers/userReducer";
import authReducer from "./reducers/authReducer";

let rootReducers = combineReducers({
    postsPage: postsReducer,
    createPostPage: createPostReducer,
    usersPage: usersReducer,
    userPage: userReducer,
    auth: authReducer
})

let store = createStore(rootReducers)

export default store;