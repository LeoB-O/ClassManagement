const users = {
    "3160608005": "123456"
}

// @params options: {url, type, body}

export default {
    login: function(options) {
        options.body = JSON.parse(options.body);
        let ret = {
            success: true,
            code: 200,
            msg: '',
            data: {}
        }
        if(!options.body.username || !options.body.password || users[options.body.username]!=options.body.password) {
            ret.success = false;
            ret.code = 1001;
            ret.msg = "用户名/密码错误";
        }
        return ret;
    }
}