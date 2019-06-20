import Vuex from 'vuex';
import Vue from 'vue';
import account from './modules/account';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        account
    }
})