import axios from '../util/axios.js';

export function addHomework(homeworkName, className, deadline, files) {
    return axios.post('/homework', {homeworkName: homeworkName, className: className, deadline: deadline, files: files});
}

export function getHomeworks() {
    return axios.get('/homeworks');
}

export function getHomeworkById(id) {
    return axios.get('/homework/id', {params: {id: id}});
}

export function deleteHomeworkById(id) {
    return axios.delete('/homework/id', {params: {id: id}});
}