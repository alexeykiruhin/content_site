import React, { useEffect } from "react";
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import PostsContainer from "../Posts/PostsContainer";
import UsersContainer from "../Users/UsersContainer";
import UserContainer from "../User/UserContainer";
import HeaderContainer from "../Header/HeaderContainer";
import LoginContainer from "../Login/LoginContainer";
import CreatePostContainer from "../CreatePost/CreatePostContainer";
import Reg from "../Reg/Reg";
import { useDispatch } from "react-redux";
import { checkAuthThunkCreator } from "../../redux/thunk/checkAuthThunk";

function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        if(localStorage.getItem('access_token')) {
            //делаем запрос на эндпоинт refresh
            dispatch(checkAuthThunkCreator());
        }
    }, [])

    return (
        <Router>
            <div className="App">
                <HeaderContainer />
                <div className={'Content'}>
                    <NavBar/>
                    <Routes>
                        <Route path="/" element={<PostsContainer/>}/>
                        <Route path="/login" element={<LoginContainer/>}/>
                        <Route path="/register" element={<Reg/>}/>
                        <Route path="/create" element={<CreatePostContainer/>}/>
                        <Route path="/users" element={<UsersContainer/>}/>
                        <Route path="/user/:userId" element={<UserContainer/>}/>
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
