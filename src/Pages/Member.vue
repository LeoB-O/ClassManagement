<template>
  <div>
    <Table :heads="heads" :data="students">
        <template #permission="scope">
            {{scope.row.permission.join(", ")}}
        </template>
      <template #action="scope">
        <span class="action" @click="handleClick(scope.row)">
          <a v-if="hasPermission(scope.row.permission, 'admin')">取消管理权限</a>
          <a v-else>设为管理员</a>
          <el-button
            @click="handleDelete(scope.row)"
            type="danger"
            icon="el-icon-delete"
            size="mini"
            circle
          ></el-button>
        </span>
      </template>
    </Table>
    <el-dialog title="新增成员" :visible="dialogVisible">
      <el-form :model="form" ref="form" label-width="120px">
        <el-form-item label="学号" prop="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="权限" prop="permission">
          <el-select v-model="form.permission" placeholder="请选择权限" multiple>
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
import Table from "../Components/Table.vue";
import Button from "../Components/Button.vue";
import { getMembers, addMember, deleteMemberById, updateMemberById } from "../api/member.js";
import {
  hasPermission,
  addPermission,
  deletePermission
} from "../util/index.js";
export default {
  components: {
    Table,
    Button
  },
  data() {
    return {
      dialogVisible: false,
      heads: [
        { name: "学号", prop: "username" },
        { name: "姓名", prop: "name" },
        { name: "权限", prop: "permission" },
        { name: "操作", prop: "action" }
      ],
      students: [],
      form: {
        username: "",
        name: "",
        permission: []
      }
    };
  },
  async created() {
    let response = await getMembers();
    this.students = response.data.data.members;
  },
  methods: {
    hasPermission: hasPermission,
    async handleClick(student) {
      let index = this.students.indexOf(student);
      if (!student) return;
      this.students[index].permission = hasPermission(
        student.permission,
        "admin"
      )
        ? deletePermission(student.permission, "admin")
        : addPermission(student.permission, "admin");
      await updateMemberById(this.students[index].id, this.students[index]);
    },
    async handleDelete(student) {
      let index = this.students.indexOf(student);
      this.students.splice(index, 1);
      await deleteMemberById(student.id);
    },
    handleAdd() {
      this.dialogVisible = true;
    },
    async handleConfirm() {
      this.students.push(JSON.parse(JSON.stringify(this.form)));
      await addMember(this.form.name, this.form.username, '123456', this.form.permission);
      this.$refs["form"].resetFields();
      this.dialogVisible = false;
    }
  }
};
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
