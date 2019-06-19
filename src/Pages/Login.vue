<template>
    <div class="container">
        <!-- TODO 希望这个标题能够替换 -->
        <h1 class="title">Homeworkability</h1>
        <Form labelWidth="80px">
            <Input label="学号" placeholder="学号" v-model="username"/>
            <Input label="密码" placeholder="密码" type="password" v-model="password"/>
            <Button class="center" @click="handleClick"/>
        </Form>
    </div>
</template>
<script>
import axios from '../util/axios.js';
import Input from '../Components/Input.vue';
import Form from '../Components/Form.vue';
import Button from '../Components/Button.vue';
export default {
    components: {
        Form,
        Input,
        Button
    },
    data() {
        return {
            username: "",
            password: "",
        }
    },
    methods: {
        async handleClick() {
            try {
                let response = await axios.post('/login', {username: this.username, password: this.password});
                this.$router.push("/");
            } catch(e) {}
        }
    }
}
</script>
<style scoped>
.container {
    width: 800px;
    margin: 0 auto;
}

.title {
    font-size: 4em;
    text-align: center;
    margin: 20% 20% 10%;
}

.center {
    display: block;
    width: 40%;
    height: 60px;
    margin: 10% auto;
    font-size: 24px;
}
</style>
