import {Navigate} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export const withAuthRedirect = (WrappedComponent) => {
    return connect(mapStateToProps)((props) => {
        if (!props.isAuth) return <Navigate to="/login" replace={true} />;
        return <WrappedComponent {...props} />
    })
}
// export const withAuthRedirect = (WrappedComponent) => {
//     return (props) => {
//         let access_token = localStorage.getItem('access_token');
//         // console.log(`access_token - ${access_token}`);
//         if (!access_token) return <Navigate to="/login" replace={true} />;
//         return <WrappedComponent {...props} />
//     }
// }