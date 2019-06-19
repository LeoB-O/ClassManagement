import App from '../../app.vue';
import Main from '../Pages/Main.vue';
import Index from '../Pages/Index.vue';
import Detail from '../Pages/Detail.vue';
import Member from '../Pages/Member.vue';
import Publish from '../Pages/Publish.vue';
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
                component: App,
                children: [
                    {
                        path: '/admin/member',
                        component: Member,
                        meta: {name: '成员管理'}
                    },
                    {
                        path: '/admin/publish',
                        component: Publish,
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