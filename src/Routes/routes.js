import Main from '../Pages/Main.vue';
import Index from '../Pages/Index.vue';
import Login from '../Pages/Login.vue';

export default [
    {
        path: '/',
        component: Main,
        meta: {name: '容器'},
        children: [
            {
                path: '',
                component: Index,
                meta: {name: '首页'}
            },
            {
                path: '/login',
                component: Login,
                meta: {name: '登陆'}
            }
        ]
    },
    {
        path: '/tt',
        meta: {name: '容器2'}
    },
    {
        path: '/tt',
        meta: {name: '容器3'}
    },
    {
        path: '/tt',
        meta: {name: '容器4'}
    }
]