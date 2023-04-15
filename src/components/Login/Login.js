import React from "react";
import './Login.css'
import LoginForm from "./LoginForm";

const Login = (props) => {
    return (
        <div>
            <h1>Login</h1>
            <LoginForm onSubmit={props.onSubmit}/>
        </div>
    )
}

export default Login;