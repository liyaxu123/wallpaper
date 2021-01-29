const Router = require('koa-router');

const {
  create,
  avatarInfo
} = require('../controller/user.controller');

// 引入自定义中间件
const {
  verifyUser,
  handlePassword
} = require('../middleware/user.middleware');

const userRouter = new Router({
  prefix: '/users'
});

userRouter.post('/', verifyUser, handlePassword, create);
userRouter.get('/:userId/avatar', avatarInfo);

module.exports = userRouter;