import {Navigate} from "react-router-dom";
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