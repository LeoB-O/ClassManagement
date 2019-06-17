<template>
    <div class="container">
        <h1>{{homework.title}}<span>-{{id}}</span></h1>
        <div class="homework-deadline">截止日期：{{formatTime(homework.deadline)}}</div>
        <Table :heads="heads" :data="homework.files">
            <template #option="scope">
                <a class="option" @click="handleClick(scope.row.id)">提交</a>
            </template>
        </Table>
    </div>
</template>
<script>
import Table from '../Components/Table.vue';
import Button from '../Components/Button.vue';
export default {
    components: {
        Table,
        Button,
    },
    props: {
        id: String
    },
    data() {
        return {
            homework: {
                id: "1001",
                title: "编译原理第一次作业",
                class: "编译原理",
                date: new Date(),
                deadline: new Date(),
                picture: 'https://cn.vuejs.org/images/logo.png',
                content: '',
                files: [
                    {
                        id: "1",
                        name: "实验报告",
                        status: "未提交"
                    },
                    {
                        id: "2",
                        name: "实验源代码",
                        status: "未提交"
                    }
                ]
            },
            heads: [{name: "文件名称", prop: "name"}, {name: "状态", prop: "status"}, {name: "操作", prop: "option"}]
        }
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
            let input = document.createElement("input");
            input.type = "file";
            input.click();
            input.onchange = function() {
                console.log(input.files);
                alert("上传成功："+input.files[0].name);
            }
        }
    }
}
</script>
<style scoped>
.container {
    margin: 0 5%;
}
.option {
    cursor: pointer;
    color: #409eff;
}
#file {
    position: absolute;
    opacity: 0;
    cursor: pointer;
}
</style>
