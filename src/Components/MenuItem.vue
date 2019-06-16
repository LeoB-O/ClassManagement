<template>
    <div class="container">
        <div @click="handleClick" class="name">{{name}}</div>
        <div
            class="child"
            :class="{collapse: collapse}"
            :style="{marginLeft: level*20+'px'}">
            <MenuItem 
                v-for="child in children"
                :key="child.path"
                :name="child.meta.name" 
                :children="child.children" 
                :level="level+1"></MenuItem>
        </div>
    </div>
</template>
<script>
export default {
    name: "MenuItem",
    props: {
        name: String,
        children: Array,
        level: {type: Number, default: 1}
    },
    data() {
        return {
            collapse: true
        }
    },
    methods: {
        handleClick() {
            this.collapse = !this.collapse;
        }
    }
}
</script>
<style scoped>
.name {
    /* border-bottom: 2px solid #5B5B70; */
    height: 40px; 
    display: flex;
    align-items: center;
    padding-left: 20px;
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
