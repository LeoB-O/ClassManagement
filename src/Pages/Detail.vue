<template>
    <div class="container">
        <h1>{{homework.title}}<span>-{{id}}</span></h1>
        <div class="homework-deadline">截止日期：{{formatTime(homework.deadline)}}</div>
        <Table :heads="heads" :data="homework.files">
            <template #option="scope">
                <el-upload 
                    :action="baseURL+ '/upload'"
                    :headers="headers"
                    :with-credentials="true"
                    :data="{...scope.row, id: homework.id, fileID: scope.row.id}"
                    :file-list="files"
                    :on-success="handleSuccess">
                    <el-button size="small" type="primary">点击上传</el-button>
                    <div slot="tip" class="el-upload__tip"></div>
                </el-upload>
            </template>
        </Table>
    </div>
</template>
<script>
import Table from '../Components/Table.vue';
import Button from '../Components/Button.vue';
import {getHomeworkById} from '../api/homework.js';
import config from '../../config.js';
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
            homework: {},
            heads: [{name: "文件名称", prop: "name"}, {name: "状态", prop: "status"}, {name: "操作", prop: "option"}],
            files: [],
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('hw')
            },
            baseURL: config.baseURL
        }
    },
    async created() {
        this.getData();
    },
    methods: {
        async getData() {
            let response = await getHomeworkById(this.id);
            this.homework = response.data.data.homework;
        },
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
        handleSuccess(response, file, fileList) {
            console.log(fileList);
            file.name = response.data.name;
            this.getData();
            // this.files.push(file);
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
