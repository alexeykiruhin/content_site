import {Navigate} from "react-router-dom";

export const withAuthRedirect = (WrappedComponent) => {
    return (props) => {
        if (!props.isAuth) return <Navigate to="/login" replace={true} />;
        return <WrappedComponent {...props} />
    }
}