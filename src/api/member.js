import axios from '../util/axios.js';

export function addMember(name, username, password, permission) {
    return axios.post('/admin/member', {name: name, username: username, password: password, permission: permission});
}

export function deleteMemberById(id) {
    return axios.delete('/admin/member/id', {params: {id: id}});
}

export function updateMemberById(id, member) {
    return axios.put('/admin/member/id', {id: id, member: member});
}

export function getMembers() {
    return axios.get('/admin/members');
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