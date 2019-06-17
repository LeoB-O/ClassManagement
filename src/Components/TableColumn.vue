<template v-slot:column1="data">
    <div>
        <slot :row="data"></slot>
    </div>
</template>
<script>
export default {
    props: {
        prop: String
    },
    created() {
        console.log(this.prop);
    }
}
</script>
