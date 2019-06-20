<template>
    <div class="menu">
        <MenuItem v-for="route in routesShouldRender" :key="route.path" :name="route.meta.name" :children="route.children" :path="route.path"></MenuItem>
    </div>
</template>
<script>
import MenuItem from './MenuItem.vue';
import {hasPermission} from '../util/index.js';
export default {
    components: {
        MenuItem
    },
    data() {
        return {
            routes: JSON.parse(JSON.stringify(this.$router.options.routes))
        }
    },
    created() {
        console.log(this.$route);
        let temp = [];
        for(let i=0;i<this.routes.length;i++) {
            if(!this.routes[i].meta || this.routes[i].meta.hide) {
                temp = temp.concat(this.routes.splice(i, 1)[0].children);
            }
        }
        this.routes.unshift(...temp);
    },
    computed: {
        routesShouldRender() {
            return this.routes.filter(v=>!!v.meta&&!v.meta.hide&&hasPermission(this.$store.state.account.permission, v.meta.permission || ['admin', 'normal']));
        }
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
