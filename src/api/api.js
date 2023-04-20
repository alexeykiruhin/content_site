import axios from "axios";
import jwt_decode from 'jwt-decode';
import Cookies from 'js-cookie';


const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://127.0.0.1:5000/api/'
});


// const token = localStorage.getItem('token');
// console.log(token);
// if(token){
//     instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
// }


export const API = {

    getUser(userId) {
        return instance.get(`user/${userId}`)
            .then((response) => response.data)
            .catch((error) => {
                console.log('кэтч');
                console.log(error);
                // console.log(error.response.status);
                // if (error.response && error.response.status === 401) {
                // Обработка ошибки 401 (Unauthorized)
                console.log('Обработка ошибки 401');
                // Здесь вы можете выполнить логику обновления токена
                // Например, отправить запрос на обновление токена и повторить исходный запрос
                // после успешного обновления токена
                const token = localStorage.getItem('refresh_token');
                console.log(`token-${token}`);
                instance.post(`refresh`, {
                    refresh_token: token
                }, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }).then(response => {
                    // Ваш код обновления токена
                    instance.defaults.headers.common['Authorization'] = `Bearer ${response.data.access_token}`;
                })
                // Возвращаем повторный запрос с обновленным токеном
                return instance.get(`user/${userId}`);
                // }
            });
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

    createPost(userId, dataPost) {
        return instance.post(`posts`, {
            author_id: userId,
            text: dataPost
        }).then((response) => response.data)
    },

    login(username, password) {
        return instance.post(`login`, {
            username: username,
            password: password
        }).then((response) => {
            if (response.data) {
                const refresh_token = response.data.refresh_token; // запись рефреш токена
                // Cookies.set('refresh_token', refresh_token, {
                //     path: '/', // путь, на котором будут доступны куки
                //     domain: 'localhost', // домен, на котором будут доступны куки
                //   });
                // console.log(response.data.refresh_token);
                instance.defaults.headers.common['Authorization'] = `Bearer ${response.data.access_token}`;
                document.cookie = `refresh_token=${refresh_token}; HttpOnly; Secure; SameSite=Strict;`
                console.log(document.cookie);
                localStorage.setItem('refresh_token', response.data.refresh_token); // сохранение токена в localStorage
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