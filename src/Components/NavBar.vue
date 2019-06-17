<template>
    <div class="container">
        <div class="brand">Homeworkablility</div>
        <div class="user">
            <div class="profile">
                <img src="https://cn.vuejs.org/images/logo.png" width="50px"/>
                <div class="info">
                    <div>姓名: 刘波波</div>
                    <div>学号: 3160608005</div>
                    <div><router-link to="/login">注销</router-link></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.container {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;
    padding: 10px 40px;
}
.brand {
    font-size: 36px;
}
.profile {
    position: relative;
}
.info {
    width: 150px;
    padding: 20px;
    border: 1px solid #e6e6e6;
    border-radius: 5px;
    position: absolute;
    right: 0;
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 0.5s ease-in-out;
    background: white;
}
.info:hover {
    display: block;
    transform: scaleY(1);
}
.profile img:hover+.info {
    display: block;
    transform: scaleY(1);
}
</style>
