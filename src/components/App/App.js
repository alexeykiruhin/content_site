import React from "react";
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import PostsContainer from "../Posts/PostsContainer";
import UsersContainer from "../Users/UsersContainer";
import UserContainer from "../User/UserContainer";
import HeaderContainer from "../Header/HeaderContainer";
import Login from "../Login/Login";
import CreatePostContainer from "../CreatePost/CreatePostContainer";

function App() {
    return (
        <Router>
            <div className="App">
                <HeaderContainer />
                <div className={'Content'}>
                    <NavBar/>
                    <Routes>
                        <Route path="/" element={<PostsContainer/>}/>
                        <Route path="/login" element={<Login/>}/>
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
