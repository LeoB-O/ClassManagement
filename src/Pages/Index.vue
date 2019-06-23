<template>
  <div class="container">
    <div>
      <div class="homework" v-for="homework in homeworks" :key="homework.title">
        <div class="homework-picture"><img v-if="homework.picture" :src="homework.picture" width="150px"/></div>
        <div>
          <div class="homework-title">{{homework.title}}</div>
          <div class="homework-id">编号：{{homework.id}}</div>
          <div class="homework-deadline">截止日期：{{formatTime(homework.deadline)}}</div>
          <div class="homework-content">{{homework.content}}</div>
          <Button @click="handleClick(homework.id)">去交作业</Button>
          <el-button @click="handleDelete(homework)" v-if="hasPermission($store.state.account.permission, 'admin')" type="danger" icon="el-icon-delete" size="mini" circle></el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Table from "../Components/Table.vue";
import Menu from '../Components/Menu.vue';
import Button from '../Components/Button.vue';
import {getHomeworks, deleteHomeworkById} from '../api/homework.js';
import {hasPermission} from '../util/index.js';
export default {
  components: {
    Table,
    Menu,
    Button,
  },
  data() {
    return {
      homeworks: []
    };
  },
  async created() {
    let response = await getHomeworks();
    this.homeworks = response.data.data.homeworks;
  },
  methods: {
    formatTime(date) {
      date = new Date(date);
      let year = date.getFullYear();
      let month = date.getMonth()+1;
      let ddate = date.getDate();
      let hour = date.getHours();
      hour = hour<10?'0'+hour:hour;
      let minute = date.getMinutes();
      minute = minute<10?'0'+minute:minute;
      let second = date.getSeconds();
      second = second<10?'0'+second:second;
      return year+'-'+month+'-'+ddate+' '+hour+':'+minute+':'+second;
    },
    handleClick(id) {
      this.$router.push("/detail/"+id)
    },
    async handleDelete(homework) {
      let index = this.homeworks.indexOf(homework);
      if(!this.homeworks[index]) return;
      await deleteHomeworkById(homework.id);
      this.homeworks.splice(index, 1);
      this.$message.success('删除成功');
    },
    hasPermission: hasPermission
  }
};
</script>
<style scope>
/* .container {} */
.homework {
  display: flex;
  width: 800px;
  min-height: 150px;
  border: 1px solid lightblue;
  border-radius: 5px;
  margin: 50px;
  position: relative;
}
.homework-picture {
  width: 150px;
  margin-right: 30px;
  /* overflow: hidden; */
}
.homework-title {
  font-size: 24px;
  margin-bottom: 10px;
}
.homework-id {
  color: #666666;
  font-size: 12px;
}
.homework-deadline {
  margin-bottom: 20px;
}
.homework-content {
  margin-bottom: 20px;
}
</style>
