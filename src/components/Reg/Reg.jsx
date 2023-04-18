import React from "react";
import { useDispatch } from "react-redux";
import { regThunkCreator } from "../../redux/thunk/regThunk";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import RegForm from "./RegForm";



const Reg = () => {
    const [redirect, setRedirect] = useState(false);

    const dispatch = useDispatch();

    const onSubmit = (values) => {
        dispatch(regThunkCreator(values.username, values.password));
        // setRedirect(true);
    };

    return (
        <>
            {redirect && <Navigate to="/login" replace={true} />}
            <RegForm onSubmit={onSubmit} />
        </>
    )
}

export default Reg;