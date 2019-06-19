<template>
    <div>
        <label :style="{width: innerLabelWidth, fontSize: fontSize}">{{label}}:</label>
        <input :placeholder="placeholder" :type="type" :value="value" @input="$emit('input', $event.target.value)">
    </div>
</template>
<script>
export default {
    props: {
        label: String,
        labelWidth: String,
        type: String,
        placeholder: String,
        value: String,
        fontSize: String,
    },
    data() {
        return {
            innerLabelWidth: this.labelWidth
        }
    },
    created() {
        this.innerLabelWidth = this.innerLabelWidth || this.$parent.$props.labelWidth;
    }
}
</script>
<style scoped>
div {
    display: flex;
    align-items: center;
    margin: 40px 0;
}

label {
    width: 100px;
    text-align: right;
    margin-right: 10px;
    font-size: 24px;
}

input {
    border-radius: 5px;
    border-style: solid;
    border-width: 1px;
    border-color: lightblue;
    padding: 5px 10px;
    height: 30px;
    font-size: 20px;
    font-family: PingFangSC-Light, sans-serif;
    flex: 1;
}

input:focus {
    outline: none;
}
</style>

