const path = require('path');

const Multer = require('koa-multer');
const Jimp = require('jimp');
// const FormData = require('form-data');
// const axios = require('axios');
// const fs = require('fs');
const { AVATAR_PATH, PICTURE_PATH, WALLPAPER_PATH } = require('../constants/file-path');

// 处理头像
const avatarStorage = Multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, AVATAR_PATH);
  },
  filename: (req, file, callback) => {
    // callback(null, "foo.png");
    callback(null, Date.now() + path.extname(file.originalname));
  },
});
const avatarUpload = Multer({
  // dest: AVATAR_PATH
  storage: avatarStorage
});
const avatarHandler = avatarUpload.single('avatar');

// 处理文件
const pictureStorage = Multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, PICTURE_PATH);
  },
  filename: (req, file, callback) => {
    // callback(null, "foo.png");
    callback(null, Date.now() + path.extname(file.originalname));
  },
});
const pictureUpload = Multer({
  // dest: PICTURE_PATH
  storage: pictureStorage
});
const pictureHandler = pictureUpload.array('picture', 9);

// 处理图片尺寸  
const pictureResize = async (ctx, next) => {
  // 1、获取所有的图像信息
  const files = ctx.req.files;

  // 2、对图像进行处理（sharp/jimp）
  for(let file of files){
    const destPath = path.join(file.destination, file.filename.replace(path.extname(file.originalname),''));
    Jimp.read(file.path).then(image => {
      image.resize(1280, Jimp.AUTO).write(`${destPath}-large${path.extname(file.originalname)}`);
      image.resize(640, Jimp.AUTO).write(`${destPath}-middle${path.extname(file.originalname)}`);
      image.resize(320, Jimp.AUTO).write(`${destPath}-small${path.extname(file.originalname)}`);
    });
  }

  await next();
}

module.exports = {
  avatarHandler,
  pictureHandler,
  pictureResize
}