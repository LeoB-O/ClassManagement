import axios from 'axios';
import Router from '../Routes/index.js';
import app from '../../main.js';
import config from '../../config.js';

axios.defaults.baseURL = config.baseURL;
axios.defaults.withCredentials = true;

// 拦截请求，添加Authorization
axios.interceptors.request.use(function (config) {
    config.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('hw');
    return config;
})

// 拦截返回值，统一处理错误
axios.interceptors.response.use(function (response) {
    console.log(response);
    let data = response.data;
    console.log(data.code==1002);
    if(data.code==1002 || data.code==1003) app.$store.dispatch('logout');
    if(data.msg) app.$message.error(response.data.msg);
    if(!data.success) return Promise.reject(data);
    return response;
}, function (error) {
    console.log(JSON.stringify(error));
    app.$message.error(error.message);
    return Promise.reject(error);
});

export default axios;