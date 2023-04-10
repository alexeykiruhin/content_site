import axios from "axios";
import Cookies from 'js-cookie';


const instance = axios.create({
    baseURL: 'http://127.0.0.1:5000/'
});

const token = Cookies.get('access-token');
console.log(token)
if (token) {
    instance.defaults.headers.common['Authorization'] = token;
}

export const login = (username, password) => {
    return instance.post(`login`, {
        username: username,
        password: password
    }).then((response) => response.data)
}

export const getUser = (userId) => {
    return instance.get(`user/${userId}`)
        .then((response) => response.data)
}

export const getUsers = () => {
    return instance.get(`users`)
        .then((response) => response.data)
}

export const getPosts = (currentPage) => {
    return instance.get(`posts?page=${currentPage}&page_size=2`)
        .then((response) => response.data)
}