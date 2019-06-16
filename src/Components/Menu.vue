<template>
    <div class="menu">
        <MenuItem v-for="route in routes" :key="route.path" :name="route.meta.name" :children="route.children"></MenuItem>
    </div>
</template>
<script>
import MenuItem from './MenuItem.vue';
export default {
    components: {
        MenuItem
    },
    data() {
        return {
            routes: this.$router.options.routes
        }
    },
    created() {
        console.log(this.routes[0].children)
    }
}
</script>
<style scoped>
div.menu {
    float: left;
    width: 200px;
    /* background: #2B2B33; */
    /* color: black; */
    height: 100vh;
    border-right: 1px solid #e6e6e6;
}
</style>
