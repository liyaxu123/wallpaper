const jwt = require('jsonwebtoken');
const { PRIVATE_KEY } = require('../app/config');

class AuthController {
  async login(ctx, next) {
    const { id, name } = ctx.user;

    // 设置token
    const token = jwt.sign({ id, name }, PRIVATE_KEY, {
      // 设置token过期时间
      expiresIn: 60 * 60 * 24,
      // 设置采用的算法
      algorithm: 'RS256'
    })

    ctx.body = { id, name, token }
  }

  async success(ctx, next){
    ctx.body = '授权成功~';
  }

}

module.exports = new AuthController();