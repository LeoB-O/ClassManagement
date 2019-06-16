<template>
    <div>
        <Menu></Menu>
        <div class="content">
            <NavBar></NavBar>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import Menu from '../Components/Menu.vue';
import NavBar from '../Components/NavBar.vue';
export default {
    components: {
        Menu,
        NavBar
    }
}
</script>
<style scoped>
.content {
    margin-left: 200px;
    display: flow-root;
}
</style>
