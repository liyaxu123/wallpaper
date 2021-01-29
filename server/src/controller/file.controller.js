const fileService = require('../service/file.service');
const userService = require('../service/user.service');
const {
  AVATAR_PATH
} = require('../constants/file-path');
const {
  APP_HOST,
  APP_PORT
} = require('../app/config');

class FileController {
  async saveAvatarInfo(ctx, next) {
    // 1、获取图像相关的信息
    const {
      filename,
      mimetype,
      size
    } = ctx.req.file;
    const {
      id
    } = ctx.user;

    // 2、将图像信息数据保存到数据库中
    const result = await fileService.createAvatar(filename, mimetype, size, id);

    // 3、将图片地址保存到user表中
    const avatarUrl = `${APP_HOST}:${APP_PORT}/users/${id}/avatar`;
    await userService.updateAvataerUrlById(avatarUrl, id);

    // 4、返回结果
    ctx.body = {
      statusCode: 200,
      message: '上传头像成功'
    };
  }

  async savePictureInfo(ctx, next) {
    // 1、获取图像信息
    const files = ctx.req.files;
    const {
      id
    } = ctx.user;
    const {
      momentId
    } = ctx.query;

    // 2、将所有的文件信息保存到数据库中
    for (let file of files) {
      const {
        filename,
        mimetype,
        size
      } = file;
      await fileService.createFile(filename, mimetype, size, id, momentId);
    }
    ctx.body = '动态配图上传完成~';
  }

  // 保存壁纸信息到数据库 
  async saveWallpaperInfo(ctx, next) {
    // 1、获取壁纸信息
    const {
      id,
      path,
      size
    } = ctx.request.body;
    console.log('壁纸信息：', id, path, size);
    // 2、将壁纸信息保存到数据库
    const result = await fileService.saveWallpaperInfo(id, path, size);
    ctx.body = {
      statusCode: 200,
      message: '壁纸上传成功',
      imgurl: path
    }
  }
}

module.exports = new FileController();