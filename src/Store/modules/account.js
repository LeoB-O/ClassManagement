import {login, logout, getInfo} from '../../api/account.js';

const state = {
    name: '',
    username: '',
    permission: [],
}

const getters = {
    isLoggedIn: state => {
        return !!state.username && !!state.permission
    }
}

const actions = {
    async login ({commit, getters}, {username, password}) {
        if (getters.isLoggedIn) return;
        if (localStorage.getItem("hw")) {
            let response = await getInfo();
            commit('login', response.data.data);
            return;
        }
        if (!username || !password) return;
    
        let response = await login(username, password);
        localStorage.setItem("hw", response.data.data.token);
        commit('login', response.data.data);
        return response;
    },
    async logout({commit, getters}) {
        commit('logout');
        await logout();
    }
}

const mutations = {
    login (state, payload) {
        state.name = payload.name;
        state.username = payload.username;
        state.permission = payload.permission;
    },
    logout (state) {
        state.name = '1';
        state.username = '';
        state.permission = '';
        localStorage.clear();
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}