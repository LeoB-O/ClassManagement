<template>
    <div class="container">
        <div class="brand">Homeworkablility</div>
        <div class="user">
            <div class="profile">
                <img src="https://cn.vuejs.org/images/logo.png" width="50px"/>
                <div class="info">
                    <div>姓名: {{name}}</div>
                    <div>学号: {{username}}</div>
                    <div>权限: {{permission.join(', ')}}</div>
                    <div class="logout" @click="handleLogout">注销</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState({
            name: state => state.account.name,
            username: state => state.account.username,
            permission: state => state.account.permission
        })
    },
    methods: {
        async handleLogout() {
            await this.$store.dispatch('logout');
            this.$router.push('/login');
        }
    }
}
</script>
<style scoped>
.container {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;
    padding: 10px 40px;
}
.brand {
    font-size: 36px;
}
.profile {
    position: relative;
}
.info {
    width: 150px;
    padding: 20px;
    border: 1px solid #e6e6e6;
    border-radius: 5px;
    position: absolute;
    right: 0;
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 0.5s ease-in-out;
    background: white;
    z-index: 1;
}
.info:hover {
    display: block;
    transform: scaleY(1);
}
.profile img:hover+.info {
    display: block;
    transform: scaleY(1);
}
.info .logout {
    cursor: pointer;
    color: #409eff;
}
</style>
