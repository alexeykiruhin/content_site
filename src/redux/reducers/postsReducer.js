let initialState = {
    posts: [
        {id: 1, nameUser: 'user1', textPost: 'Textetxetetdteksdgd'},
        {id: 2, nameUser: 'user2', textPost: 'Textetasdasdxetetdteksdgd'},
        {id: 3, nameUser: 'user3', textPost: 'Textetasdas123dteksdgd'},
    ]
}

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default postsReducer;