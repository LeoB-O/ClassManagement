<template>
    <table>
        <thead>
            <tr>
                <th v-for="head in heads" :key="head.prop || head" scope="col">{{head.name || head}}</th>
            </tr>
        </thead>
        <tr v-for="(row,index) in data" :key="index">
            <td v-for="head in heads" :key="head.prop || head">
                <slot :name="head.prop || head" :row="row">{{row[head.prop || head]}}</slot>
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
    /* border: 1px solid; */
    width: 100%;
    border-collapse: collapse;
}
th {
    color: #909399;
    font-weight: normal;
    text-align: left;
}
td, th {
    border-bottom: 1px solid #ebeef5;
    padding: 10px 20px;
    font-size: 14px;
}
tr {
    height: 50px;
}
</style>
