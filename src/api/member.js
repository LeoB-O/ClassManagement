import axios from '../util/axios.js';

export function addMember(id, name, permission) {
    return axios.post('/member', {id: id, name: name, permission: permission});
}

export function getMembers() {
    return axios.get('/members');
}

export function getMemberById(id) {
    return axios.get('/member/id', {params: {id: id}});
}

export function getMembersByName(name) {
    return axios.get('/members/name', {params: {name: name}});
}

export function getMembersByPermission(permission) {
    return axios.get('/members/permission', {params: {permission: permission}});
}