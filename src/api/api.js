import axios from "axios";
import jwt_decode from 'jwt-decode';
// import Cookies from 'js-cookie';


const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://127.0.0.1:5000/api/'
});


const token = localStorage.getItem('token');
console.log(token);
if(token){
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
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
            .then((response) => {
                return response.data
            })
    },

    login(username, password) {
        return instance.post(`login`, {
            username: username,
            password: password
        }).then((response) => {
            if (response.data) {
                const token = response.data.access_token; // запись токена
                localStorage.setItem('token', token); // сохранение токена в localStorage
                instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                // console.log(token);
            }
            return response.data
        })
    },

    register(username, password) {
        return instance.post(`register`, {
            username, password
        }).then((response) => response.data)
    }
}
// продолжить с авторизацией, сейчас токен получаю, записываю в локал сторедж, отправляю с запросами на сервер в заголовках токен
// добавить логаут и переписать логику кнопки логинв хедере
// добавить регистрацию, перенести авторизацию из хедера в апп