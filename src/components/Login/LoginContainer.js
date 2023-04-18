import Login from "./Login";
import Reg from "../Reg/Reg";
import {useDispatch} from "react-redux";
import {authThunkCreator} from "../../redux/thunk/authThunk";
import {useState} from "react";
import {Navigate} from "react-router-dom";

const LoginContainer = () => {
    const [redirect, setRedirect] = useState(false);
    const [isReg, setReg] = useState(false);

    const dispatch = useDispatch();

    const toReg = () => {
        setReg(true);
    }

    const onSubmit = (values) => {
        dispatch(authThunkCreator(values.username, values.password));
        setRedirect(true);
    };

    return (
            <>
            {isReg && <Reg/>}
            {redirect && <Navigate to="/" replace={true}/>}
            {!isReg && <Login onSubmit={onSubmit} toReg={toReg}/>}
            </>
    )
}

export default LoginContainer;