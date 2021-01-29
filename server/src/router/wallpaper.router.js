const Router = require('koa-router');

const wallpaperRouter = new Router({prefix: '/wallpaper'});

const {
  verifyTagExists
} = require('../middleware/wallpaper.middleware');

const {
  saveWallpaperInfo,
  creatTag,
  getTagList,
  addTags,
  detail,
  randList,
  list
} = require('../controller/wallpaper.controller');

// 上传壁纸
wallpaperRouter.post('/upload', saveWallpaperInfo);

// 创建壁纸标签
wallpaperRouter.post('/creatTag', creatTag);

// 获取壁纸标签列表
wallpaperRouter.get('/getTagList', getTagList);

// 壁纸添加标签接口
wallpaperRouter.post('/:wallpaperId/tags', verifyTagExists, addTags);

// 获取单张壁纸
wallpaperRouter.get('/:wallpaperId', detail);

// 根据标签随机返回指定条数的壁纸列表查询
wallpaperRouter.post('/rand', randList);

// 根据标签（分类）获取多张壁纸集合
wallpaperRouter.get('/', list);

module.exports = wallpaperRouter;

