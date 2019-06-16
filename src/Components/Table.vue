<template>
    <table>
        <thead>
            <tr>
                <th v-for="head in heads" :key="head" scope="col">{{head}}</th>
            </tr>
        </thead>
        <tr v-for="(row,index) in data" :key="index">
            <td v-for="head in heads" :key="head">
                <slot :name="head" :row="row">{{row[head]}}</slot>
            </td>
        </tr>
    </table>
</template>
<script>
export default {
    props: {
        heads: Array,
        data: Array,
    }
}
</script>
<style scoped>
table {
    border: 1px solid;
    border-collapse: collapse;
}
td, th {
    border: 1px solid;
    padding: 10px 20px;
}
</style>
