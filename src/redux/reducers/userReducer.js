const SET_USER = "SET_USER";


let initialState = {
    userId: null,
    nameUser: '',
    img: '',
    countPosts: 0,
    rating: 100
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                userId: action.userId,
                nameUser: action.nameUser,
                img: action.img
            }
        default:
            return state;
    }
}

export const setUser = (userId, nameUser, img) => ({type: SET_USER, userId, nameUser, img})

export default usersReducer;