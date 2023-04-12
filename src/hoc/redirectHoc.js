import {Navigate} from "react-router-dom";

export const withRedirect = (WrappedComponent) => {
    return (props) => {
        if (!props.isAuth) return <Navigate to="/login" replace={true} />;
        return <WrappedComponent {...props} />
    }
}