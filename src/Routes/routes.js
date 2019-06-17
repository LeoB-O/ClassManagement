import Main from '../Pages/Main.vue';
import Index from '../Pages/Index.vue';
import Detail from '../Pages/Detail.vue'
import Login from '../Pages/Login.vue';

export default [
    {
        path: '/',
        component: Main,
        children: [
            {
                path: '/',
                component: Index,
                meta: {name: '首页'}
            },
            {
                path: '/detail/:id',
                component: Detail,
                props: true
            },
            {
                path: '/admin',
                meta: {name: '管理'},
                children: [
                    {
                        path: '/admin',
                        meta: {name: '权限管理'}
                    },
                    {
                        path: '/admin/publish',
                        meta: {name: '发布作业'}
                    },
                    
                ]
            }
        ]
    },
    {
        path: '/login',
        component: Login,
        meta: {name: '登陆', hide: true}
    }
]