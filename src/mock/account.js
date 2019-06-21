const users = {
    "3160608005": "123456"
}

export default {
    login: function(options, ret) {
        if(!options.body.username || !options.body.password || users[options.body.username]!=options.body.password) {
            ret.success = false;
            ret.code = 1001;
            ret.msg = "用户名/密码错误";
        }
        ret.data.permission = 'admin';
        ret.data.username = options.body.username;
        ret.data.name = '刘波波';
    },
    getInfo(options, ret) {
        ret.data = {
            username: '3160608005',
            name: '刘波波',
            permission: 'admin'
        }
    },
    logout(options, ret) {
        ret.data = {
            username: '3160608005',
            name: '刘波波',
            permission: 'admin'
        }
    }
}