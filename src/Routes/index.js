import VueRouter from "vue-router";
import routes from './routes.js';
import store from '../Store/index.js';
import {hasPermission} from '../util/index.js';

const router = new VueRouter({routes});

const whiteList = new Set(['/login']);


router.beforeEach((to, from, next) => {
    console.log(store.getters);
    if(whiteList.has(to.path)) {
        next();
        return;
    }
    // 是否有足够的权限访问to路由
    // meta无指定permission 默认为normal admin均可访问
    if(!store.getters.isLoggedIn) {
        next({
            path: '/login',
            query: { redirect: to.fullPath }
        });
        return;
    }
    for(let record of to.matched) {
        if(record.meta.permission) {
            if(!hasPermission(store.state.account.permission, record.meta.permission)) {
                next({
                    path: '/login',
                    query: { redirect: to.fullPath }
                });
                return;
            }
        } else {
            if(!hasPermission(store.state.account.permission, ['normal', 'admin'])) {
                next({
                    path: '/login',
                    query: { redirect: to.fullPath }
                });
                return;
            }
        }
    }
    next();
})

export default router;