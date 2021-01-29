const wallpaperService = require('../service/wallpaper.service');

class WallpaperController {
  // 保存壁纸信息到数据库 
  async saveWallpaperInfo(ctx, next) {
    // 1、获取壁纸信息
    const {
      id,
      path,
      size
    } = ctx.request.body;
    console.log('壁纸信息~：', id, path, size);
    // 2、将壁纸信息保存到数据库
    const result = await wallpaperService.saveWallpaperInfo(id, path, size);
    ctx.body = {
      id: result.insertId,
      statusCode: 200,
      message: '壁纸上传成功',
      imgurl: path
    }
  }

  // 创建壁纸标签
  async creatTag(ctx, next) {
    const {
      name
    } = ctx.request.body;
    const result = await wallpaperService.creatTag(name);
    ctx.body = result;
  }

  // 获取标签列表
  async getTagList(ctx, next) {
    const {
      limit,
      offset
    } = ctx.query;
    const result = await wallpaperService.getTagList(limit, offset);
    ctx.body = result;
  }

  async addTags(ctx, next) {
    // 1、获取标签和动态id
    const {
      tags
    } = ctx;
    const {
      wallpaperId
    } = ctx.params;

    // 2、添加所有的标签
    for (let tag of tags) {
      // 2.1、判断标签是否已经和动态有关系
      const isExist = await wallpaperService.hasTag(wallpaperId, tag.id);
      if (!isExist) {
        await wallpaperService.addTag(wallpaperId, tag.id);
      }
    }

    ctx.body = {
      statusCode: 200,
      message: '给壁纸添加标签成功'
    };
  }

  // 获取某一张壁纸的详情
  async detail(ctx, next) {
    // 1、获取数据（momentID）
    const wallpaperId = ctx.params.wallpaperId;

    // 2、根据id去查询这条数据
    const result = await wallpaperService.getWallpaperById(wallpaperId);
    ctx.body = result;
  }

  async randList(ctx, next) {
    const {
      type,
      size
    } = ctx.request.body;

    // 2、查询列表
    const result = await wallpaperService.getWallpaperRandList(type, size);
    ctx.body = result;
  }

  // 根据壁纸类型获取多张壁纸列表
  async list(ctx, next) {
    // 1、获取数据（offset/size）
    const {
      type,
      offset,
      size
    } = ctx.query;
    console.log(type, offset, size);

    // 2、查询列表
    const result = await wallpaperService.getWallpaperList(type, offset, size);
    ctx.body = result;
  }
}

module.exports = new WallpaperController();