const Router = require('koa-router');

const authRouter = new Router();

const {
  login,
  success
} = require('../controller/auth.controller');

const {
  verifyLogin,
  verifyAuth
} = require('../middleware/auth.middleware');

authRouter.post('/login', verifyLogin, login);
authRouter.get('/test', verifyAuth, success);

module.exports = authRouter;