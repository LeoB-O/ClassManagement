import Vue from 'vue';
import Router from 'vue-router';

import Element from 'element-ui';

import App from './app.vue';
import router from './src/Routes/index.js';
import store from './src/Store/index.js';

import 'element-ui/lib/theme-chalk/index.css';
import './style.css';
import './src/mock/index.js';

Vue.use(Router);
Vue.use(Element);

const app = new Vue({
    store,
    router,
    render: h=>h(App)
}).$mount('#app');

export default app;