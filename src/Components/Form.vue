<template>
    <form>
        <slot></slot>
    </form>
</template>
<script>
export default {
    props: {
        labelWidth: String
    }
}
</script>
