import Login from "./Login";
import {useDispatch} from "react-redux";
import {authThunkCreator} from "../../redux/thunk/authThunk";
import {useState} from "react";
import {Navigate} from "react-router-dom";

const LoginContainer = () => {
    const [redirect, setRedirect] = useState(false);

    const dispatch = useDispatch();

    const onSubmit = (values) => {
        dispatch(authThunkCreator(values.username, values.password));
        setRedirect(true);
    };

    return (
        <>
            {redirect && <Navigate to="/" replace={true}/>}
            <Login onSubmit={onSubmit}/>
        </>
    )
}

export default LoginContainer;