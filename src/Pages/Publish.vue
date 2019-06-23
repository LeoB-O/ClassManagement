<template>
    <div class="container">
        <el-form label-width="80px">
            <el-form-item label="作业名称">
                <el-input v-model="homework.homeworkName"></el-input>
            </el-form-item>
            <el-form-item label="课程名称">
                <el-input v-model="homework.className"></el-input>
            </el-form-item>
            <el-form-item label="截止时间">
                <el-date-picker type="datetime" placeholder="选择截止时间" v-model="homework.deadline"></el-date-picker>
            </el-form-item>
            <el-form-item :label="'文件'+index" v-for="(file,index) in homework.files" :key="index">
                <el-input class="short" v-model="homework.files[index]"></el-input>
                <el-button v-if="index>0" @click="handleDelete(file)" type="danger">删除</el-button>
                <el-button v-if="index==homework.files.length-1" @click="handleAdd">添加文件</el-button>
            </el-form-item>
            <el-form-item>
                <el-button @click="handleSubmit" type="primary">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import {addHomework} from '../api/homework.js';
export default {
    data() {
        return {
            homework: {
                homeworkName: "",
                className: "",
                deadline: "",
                files: [""]
            }
        }
    },
    methods: {
        handleAdd() {
            this.homework.files.push("");
        },
        handleDelete(file) {
            this.homework.files.splice(this.homework.files.indexOf(file), 1);
        },
        async handleSubmit() {
            await addHomework(this.homework.homeworkName, this.homework.className, this.homework.deadline, '', '', this.homework.files);
        }
    }
}
</script>
<style scoped>
.short {
    width: auto;
}
</style>
