import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { regThunkCreator } from "../../redux/thunk/regThunk";
import { Navigate } from "react-router-dom";
import RegForm from "./RegForm";


const Reg = () => {
    const isReg = useSelector((state) => state.reg.isReg);

    const dispatch = useDispatch();

    const onSubmit = (values) => {
        dispatch(regThunkCreator(values.username, values.password));
        // setRedirect(true);
    };

    return (
        <>
            {isReg && <Navigate to="/login" replace={true} />}
            <RegForm onSubmit={onSubmit} />
        </>
    )
}

export default Reg;