import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import CreatePost from "../CreatePost/CreatePost";
import React from "react";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import PostsContainer from "../Posts/PostsContainer";
import Users from "../Users/Users";

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
                        <Route path="/users" element={<Users/>}/>
                    </Routes>

                </div>
            </div>
        </Router>
    );
}

export default App;
