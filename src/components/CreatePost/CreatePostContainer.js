import CreatePost from "./CreatePost";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import { useSelector } from "react-redux";

const CreatePostWithRedirect = withAuthRedirect(CreatePost)

const CreatePostContainer = () => {

    const userId = useSelector((store) => store.auth.userId);

    handleClick = (userId, dataPost) => {
        console.log(userId);
        console.log(dataPost);
    }

    return (
        // Не забываем передать isAuth в хок
        <CreatePostWithRedirect userId={userId}/>
    )
}


export default CreatePostContainer;