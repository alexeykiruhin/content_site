import Login from "./Login";
import {useDispatch, useSelector} from "react-redux";
import {updateLogin, updatePswd} from "../../redux/actions/authActions";
import {authThunkCreator} from "../../redux/thunk/authThunk";

const LoginContainer = () => {

    const username = useSelector((state) => state.auth.username);
    const password = useSelector((state) => state.auth.password);
    const dispatch = useDispatch();

    const handlerUpdateLogin = (event) => {
        let updateUserName = event.target.value;
        dispatch(updateLogin(updateUserName))
    };

    const handlerUpdatePassword = (event) => {
        let updatePassword = event.target.value;
        dispatch(updatePswd(updatePassword))
    };

    const handlerSubmit = () => {
        dispatch(authThunkCreator(username, password));
    };

    // useEffect(() => {
    //     dispatch(authThunkCreator(username, password));
    // },[dispatch, username, password])

    return <Login
        username={username}
        password={password}
        handlerUpdateLogin={handlerUpdateLogin}
        handlerUpdatePassword={handlerUpdatePassword}
        handlerSubmit={handlerSubmit}
    />
}

export default LoginContainer;