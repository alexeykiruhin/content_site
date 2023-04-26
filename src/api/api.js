import axios from "axios";
import { setInfo } from "../redux/actions/authActions";
import store from "../redux/store";

const BASE_URL = 'http://127.0.0.1:5000/api/';

const instance = axios.create({
    withCredentials: true,
    baseURL: BASE_URL
});

instance.interceptors.request.use((config) => {
    const access_token = localStorage.getItem('access_token');
    config.headers.Authorization = `Bearer ${access_token}`;
    // console.log('add header Auth');
    return config
})

instance.interceptors.response.use(
    (config) => {
        // console.log('interceptor');
        return config
    },
    async (error) => {
        const originalRequest = error.config;
        console.log(`error status - ${error.response.status}`);
        if (error.response.status === 401) {
            try {
                await axios.get(`${BASE_URL}refresh`, {
                    withCredentials: true,
                    // headers: {'Authorization': `Bearer ${localStorage.getItem('refresh_token')}`}
                }).then((response) => {
                    localStorage.setItem('access_token', response.data.access_token);
                    console.log('set access');
                    return response.data
                }).catch((error) => {
                    console.log(`ошибка - ${error.response.status}`);
                    console.log(`ошибка - logoutThunk`);
                });
                console.log('set local');
                return instance.request(originalRequest);
            } catch (error) {
                console.log('Ошибка авторизации', error);
                store.dispatch(setInfo(false, { id: null, img: null, username: '' })); // тут нужно затереть данные в auth
                // попробовать затереть локалсторедж ацесс токен
                // window.location.href = '/login';
                return Promise.reject(error);
            }
        } else {
            // window.location.href = '/login';
            console.log('ошибка если удален рефреш токен, после логаута если пойти на страницу защищенную');
            return null
        }
    }
)

export const API = {

    Post: {
        sendScore(postId, score) {
            return instance.put(`post_rating`, {
                post_id: postId,
                score: score
            }).then((response) => response.data)
        }
    },

    checkAuth() {
        console.log('checkAuth');
        return axios.get(`${BASE_URL}refresh`, {
            withCredentials: true,
            // headers: {'Authorization': `Bearer ${localStorage.getItem('refresh_token')}`}
        }).then((response) => response.data)
    },

    register(username, password) {
        return instance.post(`register`, {
            username, password
        }).then((response) => response.data)
    },

    login(username, password) {
        return instance.post(`login`, {
            username: username,
            password: password
        }).then((response) => response.data)
    },

    logout() {
        return instance.get(`logout`)
            .then((response) => response.data)
    },

    getUser(userId) {
        return instance.get(`user/${userId}`)
            .then((response) => {
                console.log(`resUser - ${response}`);
                return response.data
            })
    },

    updUser(userId, statusText) {
        return instance.post(`user/${userId}`, {
            statusText: statusText,
        })
            .then((response) => response.data)
    },

    async getUsers() {
        const response = await instance.get(`users`);
        return response.data;
    },

    getPosts(currentPage) {
        return instance.get(`posts?page=${currentPage}&page_size=2`)
            .then((response) => {
                return response.data
            })
    },

    createPost(dataPost) {
        return instance.post(`posts`, {
            text: dataPost
        }).then((response) => response.data)
    }
}