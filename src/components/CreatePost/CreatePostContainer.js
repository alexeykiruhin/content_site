import CreatePost from "./CreatePost";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";


const CreatePostContainer = () => {

    const isAuth = useSelector((state) => state.auth.isAuth );

    if (!isAuth) return <Navigate to="/login" replace={true} />;

    return (
        <CreatePost />
    )
}

export default CreatePostContainer;