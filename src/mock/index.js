import Mock from 'mockjs';

import login from './login.js';

Mock.mock(/\/login/, login.login);