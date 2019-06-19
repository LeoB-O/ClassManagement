<template>
    <div>
        <Table :heads="heads" :data="students">
            <template #action="scope">
                <span class="action" @click="handleClick(scope.row)">
                    <a v-if="scope.row.permission=='admin'">取消管理权限</a>
                    <a v-else>设为管理员</a>
                </span>
            </template>
        </Table>
    </div>
</template>
<script>
import Table from '../Components/Table.vue';
export default {
    components: {
        Table
    },
    data() {
        return {
            heads: [{name: '学号', prop: 'id'},{name: '姓名', prop: 'name'},{name: '权限', prop: 'permission'}, {name: '操作', prop: 'action'}],
            students: [
                {
                    id: '3160608005',
                    name: '刘波波',
                    permission: 'admin'
                }
            ]
        }
    },
    methods: {
        handleClick(student) {
            let index = this.students.indexOf(student);
            this.students[index].permission = this.students[index].permission=="admin"?"normal":"admin";
        }
    }
}
</script>
<style scoped>
.action {
    cursor: pointer;
    color: #409eff;
}
</style>
