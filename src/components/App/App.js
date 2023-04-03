import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import CreatePost from "../CreatePost/CreatePost";
import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import PostsContainer from "../Posts/PostsContainer";

function App() {
    return (
        <div className="App">
            <Header />
            <NavBar />
            <Router>
                <Routes>
                    <Route path="/" element={<PostsContainer/>}/>
                    <Route path="/create" element={<CreatePost/>}/>
                </Routes>
            </Router>
            <Footer />
        </div>
    );
}

export default App;
