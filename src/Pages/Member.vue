<template>
    <div>
        <Table :heads="heads" :data="students">
            <template #action="scope">
                <span class="action" @click="handleClick(scope.row)">
                    <a v-if="scope.row.permission=='admin'">取消管理权限</a>
                    <a v-else>设为管理员</a>
                    <el-button @click="handleDelete(scope.row)" type="danger" icon="el-icon-delete" size="mini" circle></el-button>
                </span>
            </template>
        </Table>
        <el-dialog title="新增成员" :visible="dialogVisible">
            <el-form :model="form" ref="form" label-width="120px">
                <el-form-item label="学号" prop="id">
                    <el-input v-model="form.id"></el-input>
                </el-form-item>
                <el-form-item label="姓名" prop="name">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="权限" prop="permission">
                    <el-select v-model="form.permission" placeholder="请选择权限">
                        <el-option label="普通权限" value="normal"></el-option>
                        <el-option label="管理员权限" value="admin"></el-option>
                        <el-option label="root" value="root"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer">
                <el-button @click="dialogVisible = false">取消</el-button>
                <el-button type="primary" @click="handleConfirm">确定</el-button>
            </div>
        </el-dialog>
        <Button class="add" @click="handleAdd">新增成员</Button>
    </div>
</template>
<script>
import Table from '../Components/Table.vue';
import Button from '../Components/Button.vue';
export default {
    components: {
        Table,
        Button
    },
    data() {
        return {
            dialogVisible: false,
            heads: [{name: '学号', prop: 'id'},{name: '姓名', prop: 'name'},{name: '权限', prop: 'permission'}, {name: '操作', prop: 'action'}],
            students: [
                {
                    id: '3160608005',
                    name: '刘波波',
                    permission: 'admin'
                }
            ],
            form: {
                id: '',
                name: '',
                permission: ''
            }
        }
    },
    methods: {
        handleClick(student) {
            let index = this.students.indexOf(student);
            if (!this.students[index]) return;
            this.students[index].permission = this.students[index].permission=="admin"?"normal":"admin";
        },
        handleDelete(student) {
            let index = this.students.indexOf(student);
            this.students.splice(index, 1);
        },
        handleAdd() {
            this.dialogVisible = true;
        },
        handleConfirm() {
            this.students.push(JSON.parse(JSON.stringify(this.form)));
            this.$refs['form'].resetFields();
            this.dialogVisible = false;
        }
    }
}
</script>
<style scoped>
.action {
    cursor: pointer;
    color: #409eff;
}
.add {
    margin: 20px;
}
</style>
