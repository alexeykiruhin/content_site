import React from "react";
import './Login.css'

const Login = (props) => {

    return (
        <div>
            <div>
                <label htmlFor={'login'}>Логин</label>
                <input name={'login'} type="text" value={props.username} onChange={props.handlerUpdateLogin}/>
            </div>
            <div>
                <label htmlFor={'password'}>Пароль</label>
                <input name={'password'} type="password" value={props.password} onChange={props.handlerUpdatePassword}/>
            </div>
            <button type="submit" onClick={props.handlerSubmit}>Войти</button>
        </div>
    )
}

export default Login;