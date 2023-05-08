import React, { useEffect } from "react";
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import PostsContainer from "../Posts/PostsContainer";
import PostViewContainer from "../PostView/PostViewContainer";
import UsersContainer from "../Users/UsersContainer";
import UserContainer from "../User/UserContainer";
import HeaderContainer from "../Header/HeaderContainer";
import LoginContainer from "../Login/LoginContainer";
import CreatePostContainer from "../CreatePost/CreatePostContainer";
import Reg from "../Reg/Reg";
import { useDispatch, useSelector } from "react-redux";
import { initAppThunkCreator } from "../../redux/thunk/initAppThunk";
import Preloader from "../common/Preloader/Preloader";

function App() {

    const init = useSelector((state) => state.init.init);
    const dispatch = useDispatch();

    let flagInit = false // для инициализации 1 раз иначе 2, но не на что не повлияло
    useEffect(() => {
        if (!flagInit) {
            flagInit = true;
            dispatch(initAppThunkCreator());
        }
    }, [])

    if(!init) {
        return <Preloader />
    }

    return (
        <Router>
            <div className="App" >
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
                        <Route path="/post/:postId" element={<PostViewContainer/>}/>
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
