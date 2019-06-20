import {Random} from 'mockjs';

export default {
    add(options, ret) {},
    getAll(options, ret) {
        let homeworks = [];
        for(let i=0;i<20;i++) {
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
    deleteById(options, ret) {
        ret.success = false;
        ret.msg = "网络错误";
    }
}