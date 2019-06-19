import axios from 'axios';
import Router from '../Routes/index.js';
import app from '../../main.js';

// 拦截返回值，统一处理错误
axios.interceptors.response.use(function (response) {
    console.log(response);
    let data = response.data;
    if(data.msg) app.$message.error(response.data.msg);
    if(!data.success) return Promise.reject(data);
    return response;
}, function (error) {
    return Promise.reject(error);
});

export default axios;