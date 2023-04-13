import axios from "axios";
// import Cookies from 'js-cookie';


const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://127.0.0.1:5000/'
});

let token = null;
console.log(token)
if (token) {
    instance.defaults.headers.common['Authorization'] = token;
}

export const API = {

    getUser(userId) {
        return instance.get(`user/${userId}`)
            .then((response) => response.data)
    },

    updUser(userId, statusText) {
        return instance.post(`user/${userId}`, {
            statusText: statusText,
        })
            .then((response) => response.data)
    },

    getUsers() {
        return instance.get(`users`)
            .then((response) => response.data)
    },

    getPosts(currentPage) {
        return instance.get(`posts?page=${currentPage}&page_size=2`)
            .then((response) => response.data)
    },

    login(username, password) {
        return instance.post(`login`, {
            username: username,
            password: password
        }).then((response) => {
            token = response.headers['access-token'];
            instance.defaults.headers.common['Authorization'] = token;
            console.log(response.data)
            return response.data
        })
    },
}
