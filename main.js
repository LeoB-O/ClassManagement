import './style.css';
import Vue from 'vue';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Router from 'vue-router';
import App from './app.vue';

import router from './src/Routes/index.js';

import './src/mock/index.js';

Vue.use(Router);
Vue.use(Element);

const app = new Vue({
    router,
    render: h=>h(App)
}).$mount('#app');

export default app;