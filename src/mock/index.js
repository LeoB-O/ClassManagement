import Mock from 'mockjs';

import homework from './homework.js';
import account from './account.js';
import member from './member.js';

// 通过包装函数注入ret，这样就不用每个函数都重复写一个ret模版了
// TODO 有没有更优雅的方法？
function wrapper(func) {
    return (options) => {
        // options.body = JSON.parse(options.body);
        console.log(options.body);
        let ret = {
            success: true,
            code: 200,
            msg: '',
            data: {}
        };
        func(options, ret);
        return ret;
    }
}

Mock.mock(/\/login/, wrapper(account.login));
Mock.mock(/\/logout/, wrapper(account.logout));
Mock.mock(/\/account\/info/, wrapper(account.getInfo));

Mock.mock(/\/homeworks$/, wrapper(homework.getAll));
Mock.mock(/\/homework\/id/, 'DELETE', wrapper(homework.deleteById));
Mock.mock(/\/homework\/id/, 'GET', wrapper(homework.getById));
Mock.mock(/\/homework\/upload/, wrapper(homework.uploadFile));

Mock.mock(/\/members$/, wrapper(member.getAllMembers));