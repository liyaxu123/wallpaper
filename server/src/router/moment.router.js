const Router = require('koa-router');

const momentRouter = new Router({prefix: '/moment'});

const {
  create,
  detail,
  list,
  update,
  remove,
  addLabels,
  fileInfo
} = require('../controller/moment.controller.js');

const {
  verifyAuth,
  verifyPermission
} = require('../middleware/auth.middleware');

const {
  verifyLabelExists
} = require('../middleware/label.middleware');

momentRouter.post('/', verifyAuth, create);
momentRouter.get('/', list);
momentRouter.get('/:momentId', detail);

// 1、用户必须登录， 2、用户具备权限
momentRouter.patch('/:momentId', verifyAuth, verifyPermission, update);
// 删除
momentRouter.delete('/:momentId', verifyAuth, verifyPermission, remove);
// 给动态添加标签
momentRouter.post('/:momentId/labels', verifyAuth, verifyPermission, verifyLabelExists, addLabels);

// 动态配图的服务
momentRouter.get('/images/:filename', fileInfo);

module.exports = momentRouter;