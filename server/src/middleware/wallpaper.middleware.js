const service = require('../service/wallpaper.service');

const verifyTagExists = async (ctx, next) => {
  // 1.取出要添加的所有的标签
  const { tags } = ctx.request.body;

  // 2.判断每一个标签在label表中是否存在
  const newTags = [];
  for (let name of tags) {
    const tagResult = await service.getTagByName(name);
    const tag = { name };
    if (!tagResult) {
      // 创建标签数据
      const result = await service.creatTag(name);
      tag.id = result.insertId;
      console.log("新创建的tag:", tag.id);
    } else {
      tag.id = tagResult.id;
    }
    newTags.push(tag);
  }
  ctx.tags = newTags;
  await next();
}

module.exports = {
  verifyTagExists
}