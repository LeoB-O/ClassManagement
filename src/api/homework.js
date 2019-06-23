import axios from '../util/axios.js';

export function addHomework(title, className, deadline, picture, content, files) {
    return axios.post('/admin/homework', {title: title, class: className, deadline: deadline, picture: picture, content: content, files: files});
}

export function getHomeworks() {
    return axios.get('/homeworks');
}

export function getHomeworkById(id) {
    return axios.get('/homework/id', {params: {id: id}});
}

export function deleteHomeworkById(id) {
    return axios.delete('/admin/homework/id', {params: {id: id}});
}

export function uploadHomeworkFile() {}