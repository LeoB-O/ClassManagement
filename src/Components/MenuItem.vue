<template>
    <div class="container">
        <router-link :to="path" tag="div">
        <div @click="handleClick" class="name" :class="{active: $route.fullPath==path&&!children}">
            <span>{{name}}</span>
            <img v-show="children && children.length>0" width="20px" :src="icon"/>
        </div>
        </router-link>
        <div
            class="child"
            :class="{collapse: collapse}"
            :style="{marginLeft: level*20+'px'}">
            <MenuItem 
                v-for="child in childrenShouldRender"
                :path="child.path"
                :key="child.path"
                :name="child.meta.name" 
                :children="child.children" 
                :level="level+1"></MenuItem>
        </div>
    </div>
</template>
<script>
import Down from '../assets/down.svg';
import Left from '../assets/left.svg';
import Right from '../assets/right.svg';
export default {
    name: "MenuItem",
    props: {
        path: String,
        name: String,
        children: Array,
        level: {type: Number, default: 1}
    },
    data() {
        return {
            collapse: true,
            icon: Right
        }
    },
    methods: {
        handleClick() {
            this.collapse = !this.collapse;
            this.icon = this.collapse?Right:Down;
        }
    },
    computed: {
        childrenShouldRender() {
            return this.children && this.children.filter(v=>!!v.meta&&!v.meta.hide);
        }
    }
}
</script>
<style scoped>
.active {
    background: #ecf5ff;
    color: #409eff;
}
.name {
    /* border-bottom: 2px solid #5B5B70; */
    height: 40px; 
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
    cursor: pointer;
}
.name img {
    margin-right: 20px;
}
.child {
    max-height: 120px;
    overflow: hidden;
    /* border-bottom: 1px solid #6B6B80; */
    transition: max-height 0.5s ease-in-out;
}
.child:last-child {
    border: none !important;
}
.collapse {
    max-height: 0;
    border: none;
}
</style>
