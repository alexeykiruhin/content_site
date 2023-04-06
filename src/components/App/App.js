import React from "react";
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import CreatePost from "../CreatePost/CreatePost";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import PostsContainer from "../Posts/PostsContainer";
import UsersContainer from "../Users/UsersContainer";
import UserContainer from "../User/UserContainer";

function App() {
    return (
        <Router>
            <div className="App">
                <Header/>
                <div className={'Content'}>
                    <NavBar/>
                    <Routes>
                        <Route path="/" element={<PostsContainer/>}/>
                        <Route path="/create" element={<CreatePost/>}/>
                        <Route path="/users" element={<UsersContainer/>}/>
                        <Route path="/user/1" element={<UserContainer/>}/>
                    </Routes>

                </div>
            </div>
        </Router>
    );
}

export default App;
