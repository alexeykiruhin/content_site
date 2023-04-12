import CreatePost from "./CreatePost";
import {useSelector} from "react-redux";
import {withRedirect} from "../../hoc/redirectHoc";

const CreatePostWithRedirect = withRedirect(CreatePost)

const CreatePostContainer = () => {

    const isAuth = useSelector((state) => state.auth.isAuth );

    // const CreatePostContainerWithRedirect = withRedirect(CreatePost)

    return (
        <CreatePostWithRedirect isAuth={isAuth}/>
    )
}


export default CreatePostContainer;