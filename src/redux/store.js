import {composeWithDevTools} from 'redux-devtools-extension';
import postsReducer from './reducers/postsReducer';
import createPostReducer from './reducers/createPostReducer';
import {combineReducers, legacy_createStore as createStore, applyMiddleware} from "redux";
import usersReducer from "./reducers/usersReducer";
import userReducer from "./reducers/userReducer";
import authReducer from "./reducers/authReducer";
import thunk from 'redux-thunk'
import regReducer from './reducers/regReducer';
import appReducer from './reducers/appReducer';
import postViewReducer from './reducers/postViewReducer';

let rootReducers = combineReducers({
    init: appReducer,
    postView: postViewReducer,
    postsPage: postsReducer,
    createPostPage: createPostReducer,
    usersPage: usersReducer,
    userPage: userReducer,
    auth: authReducer,
    reg: regReducer
})

let store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)))

export default store;