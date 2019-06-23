import {
    Random
} from 'mockjs';

export default {
    add(options, ret) {},
    getAll(options, ret) {
        let homeworks = [];
        for (let i = 0; i < 20; i++) {
            homeworks.unshift({
                id: Random.increment(),
                title: Random.ctitle(),
                class: Random.ctitle(),
                date: new Date(),
                deadline: new Date(),
                picture: Random.dataImage(),
                content: Random.cparagraph()
            })
        }
        ret.data = {
            homeworks: homeworks
        }
    },
    getById(options, ret) {
        ret.homework = {
            id: "1001",
            title: "编译原理第一次作业",
            class: "编译原理",
            date: new Date(),
            deadline: new Date(),
            picture: 'https://cn.vuejs.org/images/logo.png',
            content: '',
            files: [{
                    id: "1",
                    name: "实验报告",
                    status: "未提交",
                    uploaded: [{
                        name: '123.png'
                    }]
                },
                {
                    id: "2",
                    name: "实验源代码",
                    status: "未提交",
                    uploaded: []
                }
            ]
        }
    },
    deleteById(options, ret) {
        ret.success = true;
        ret.msg = "";
    },
    uploadFile(options, ret) {

    }
}