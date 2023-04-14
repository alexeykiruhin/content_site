import React from "react";
import './Login.css'

const Login = (props) => {
    // добавить редирект после успешного логина
    return (
        <div>
            <h1>Login</h1>
            <div>
                <label htmlFor={'login'}>Логин</label>
                <br/>
                <input name={'login'} type="text" value={props.username} onChange={props.handlerUpdateLogin}/>
            </div>
            <div>
                <label htmlFor={'password'}>Пароль</label>
                <br/>
                <input name={'password'} type="password" value={props.password}
                       onChange={props.handlerUpdatePassword}/>
            </div>
            <div>
                <button type="submit" onClick={props.handlerSubmit}>Войти</button>
            </div>
        </div>
    )
}

export default Login;