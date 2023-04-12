import CreatePost from "./CreatePost";
import {useSelector} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const CreatePostWithRedirect = withAuthRedirect(CreatePost)

const CreatePostContainer = () => {
    // isAuth нужен для сокрытия компонента, если юзер не авторизован
    const isAuth = useSelector((state) => state.auth.isAuth);

    return (
        // Не забываем передать isAuth в хок
        <CreatePostWithRedirect isAuth={isAuth}/>
    )
}


export default CreatePostContainer;