<template>
  <div class="container">
    <div>
      <div class="homework" v-for="homework in homeworks" :key="homework.title">
        <div class="homework-picture"><img v-if="homework.picture" :src="homework.picture" height="150px"/></div>
        <div>
          <div class="homework-title">{{homework.title}}</div>
          <div class="homework-deadline">截止日期：{{formatTime(homework.deadline)}}</div>
          <div class="homework-content">{{homework.content}}</div>
          <Button @click="handleClick(homework.id)">去交作业</Button>
        </div>
      </div>
    </div>
    <!-- <Table :heads="heads" :data="data">
      <template v-slot:column1="row">
        {{row.row['column1'] + '加在第一列'}}
      </template>
    </Table> -->
    <router-view></router-view>
  </div>
</template>
<script>
import Table from "../Components/Table.vue";
import Menu from '../Components/Menu.vue';
import Button from '../Components/Button.vue';
export default {
  components: {
    Table,
    Menu,
    Button,
  },
  data() {
    return {
      heads: ["column1", "column2", "column3"],
      homeworks: [
        {
          id: "1001",
          title: "编译原理第一次作业",
          class: "编译原理",
          date: new Date(),
          deadline: new Date(),
          picture: 'https://cn.vuejs.org/images/logo.png',
          content: ''
        },
        {
          id: "1002",
          title: "编译原理第二次作业",
          class: "编译原理",
          date: new Date(),
          deadline: new Date(),
          picture: 'https://cn.vuejs.org/images/logo.png',
          content: ''
        },
        {
          id: "1003",
          title: "编译原理第三次作业",
          class: "编译原理",
          date: new Date(),
          deadline: new Date(),
          picture: 'https://cn.vuejs.org/images/logo.png',
          content: ''
        }
      ],
      data: [
        {
          column1: "data1-1",
          column2: "data1-2",
          column3: "data1-3"
        },
        {
          column1: "data2-1",
          column2: "data2-2",
          column3: "data2-3"
        }
      ]
    };
  },
  methods: {
    formatTime(date) {
      let year = date.getFullYear();
      let month = date.getMonth()+1;
      let ddate = date.getDate();
      let hour = date.getHours();
      let minute = date.getMinutes();
      let second = date.getSeconds();
      return year+'-'+month+'-'+ddate+' '+hour+':'+minute+':'+second;
    },
    handleClick(id) {
      console.log(id);
      this.$router.push("/detail/"+id)
    }
  }
};
</script>
<style scope>
/* .container {} */
.homework {
  display: flex;
  width: 600px;
  height: 150px;
  border: 1px solid lightblue;
  border-radius: 5px;
  margin: 50px;
  position: relative;
}
.homework-picture {
  height: 150px;
  margin-right: 30px;
  overflow: hidden;
}
.homework-title {
  font-size: 24px;
  margin-bottom: 10px;
}
.homework-deadline {
  margin-bottom: 20px;
}
</style>
