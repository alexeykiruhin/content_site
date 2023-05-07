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
        async getPostView(postId) {
            const response = await instance.get(`post/${postId}`);
            return response.data;
        },
        async getPosts(currentPage) {
            const response = await instance.get(`posts?page=${currentPage}&page_size=2`);
            return response.data;
        },
        async getSubsPosts(currentPage) {
            const response = await instance.get(`subs_posts?page=${currentPage}&page_size=2`);
            return response.data;
        },
        async sendScore(postId, score) {
            const response = await instance.put(`post_rating`, {
                post_id: postId,
                score: score
            });
            return response.data;
        }
    },

    PostComments: {
        async getComments(postId) {
            const response = await instance.get(`comments/${postId}`);
            return response.data;
        }
    },

    User: {
        // подписка на юзера
        async subscribe(to_user_id) {
            const response = await instance.put(`subscribe`, {
                to_user_id: to_user_id
            });
            return response.data;
        },
        // отписка от юзера
        async unsubscribe(to_user_id) {
            const response = await instance.put(`unsubscribe`, {
                to_user_id: to_user_id
            });
            return response.data;
        }
    },

    async checkAuth() {
        console.log('checkAuth');
        const response = await axios.get(`${BASE_URL}refresh`, {
            withCredentials: true,
        });
        return response.data;
    },

    async register(username, password) {
        const response = await instance.post(`register`, {
            username, password
        });
        return response.data;
    },

    async login(username, password) {
        const response = await instance.post(`login`, {
            username: username,
            password: password
        });
        return response.data;
    },

    async logout() {
        const response = await instance.get(`logout`);
        return response.data;
    },

    async getUser(userId) {
        const response = await instance.get(`user/${userId}`);
        console.log(`resUser - ${response}`);
        return response.data;
    },

    async updUser(userId, statusText) {
        const response = await instance.post(`user/${userId}`, {
            statusText: statusText,
        });
        return response.data;
    },

    async getUsers() {
        const response = await instance.get(`users`);
        return response.data;
    },


    async createPost(dataPost) {
        const response = await instance.post(`posts`, {
            text: dataPost
        });
        return response.data;
    }
}