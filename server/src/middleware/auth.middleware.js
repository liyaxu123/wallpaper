const jwt = require('jsonwebtoken');

const errorType = require('../constants/error-types');
const service = require('../service/user.service');
const authService = require('../service/auth.service');
const md5password = require('../utils/password-handle');
const { PUBLIC_KEY } = require('../app/config');

const verifyLogin = async (ctx, next) => {
  // 1、获取用户名和密码
  const {
    name,
    password
  } = ctx.request.body;

  console.log('verifyLogin', name, password);

  // 2、判断用户名或者密码不能为空
  if (!name || !password) {
    const error = new Error(errorType.NAME_OR_PASSWORD_IS_REQUIRED);
    return ctx.app.emit('error', error, ctx);
  }

  // 3、判断用户是否存在（用户不存在抛出异常）
  const result = await service.getUserByName(name);
  const user = result[0];
  // console.log(user);
  if (!user) {
    const error = new Error(errorType.USER_DOES_NOT_EXISTS);
    return ctx.app.emit('error', error, ctx);
  }

  // 4、判断密码是否和数据库中的密码是否一致（加密）
  if (md5password(password) !== user.password) {
    const error = new Error(errorType.PASSWORD_IS_INCORRENT);
    return ctx.app.emit('error', error, ctx);
  }

  ctx.user = user;
  await next();
}

// 验证授权的中间件
const verifyAuth = async (ctx, next) => {
  console.log("验证授权的中间件~");
  // 1.获取token
  const authorization = ctx.headers.authorization;
  if (!authorization) {
    const error = new Error(errorType.UNAUTHORIZATION);
    return ctx.app.emit('error', error, ctx);
  }
  const token = authorization.replace('Bearer ', '');

  // 2.验证token(id/name/iat/exp)
  try {
    const result = jwt.verify(token, PUBLIC_KEY, {
      algorithms: ["RS256"]
    });
    ctx.user = result;
    await next();
  } catch (err) {
    const error = new Error(errorType.UNAUTHORIZATION);
    ctx.app.emit('error', error, ctx);
  }
}

/* 
 * 1、很多的内容都需要验证权限：修改、删除动态，修改、删除评论
 * 2、接口：业务接口系统、后端管理系统
 * 3、一对一：user -> role
 * 4、 多对多：role -> menu(删除动态/修改动态)
*/
const verifyPermission = async (ctx, next) => {
  console.log('验证权限的中间件~');
  // 1、获取参数
  const [resourceKey] = Object.keys(ctx.params);
  const tableName = resourceKey.replace('Id','');
  const resourseId = ctx.params[resourceKey];
  const { id } = ctx.user;
  // 2、查询是否具备权限
  try {
    const isPermission = await authService.checkResource(tableName, resourseId, id);
    if(!isPermission) throw new Error();
    await next();
  } catch (err) {
    const error = new Error(errorType.UNPERMISSION);
    return ctx.app.emit('error', error, ctx);
  }
}

module.exports = {
  verifyLogin,
  verifyAuth,
  verifyPermission
}