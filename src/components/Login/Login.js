import React from "react";
import LoginForm from "./LoginForm";

const Login = (props) => {
    return <LoginForm onSubmit={props.onSubmit}/>
}

export default Login;