import axios from '../util/axios.js';

export function login(username, password) {
    return axios.post('/login', {username: username, password: password});
}

export function getInfo() {
    return axios.get('/account/info');
}