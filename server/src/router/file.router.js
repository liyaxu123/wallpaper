const Router = require('koa-router');


const fileRouter = new Router({prefix: '/upload'});

const {
  verifyAuth
} = require('../middleware/auth.middleware');

const {
  avatarHandler,
  pictureHandler,
  pictureResize
} = require('../middleware/file.middleware');

const {
  saveAvatarInfo,
  savePictureInfo,
  saveWallpaperInfo
} = require('../controller/file.controller');

fileRouter.post('/avatar', verifyAuth, avatarHandler, saveAvatarInfo);
fileRouter.post('/picture', verifyAuth, pictureHandler, pictureResize, savePictureInfo);
// 上传壁纸
fileRouter.post('/wallpaper', saveWallpaperInfo);

module.exports = fileRouter;