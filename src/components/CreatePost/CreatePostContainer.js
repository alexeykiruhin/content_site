import CreatePost from "./CreatePost";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const CreatePostWithRedirect = withAuthRedirect(CreatePost)

const CreatePostContainer = () => {
    return (
        // Не забываем передать isAuth в хок
        <CreatePostWithRedirect />
    )
}


export default CreatePostContainer;