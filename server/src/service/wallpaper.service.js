const connection = require('../app/database');

class WallpaperService {
  async saveWallpaperInfo(id, path, size) {
    const statement = `INSERT INTO wallpaper (img_id, img_url, size) VALUES (?, ?, ?);`;
    const [result] = await connection.execute(statement, [id, path, size]);
    return result;
  }

  async creatTag(name) {
    const statement = `INSERT INTO tag (name) VALUES (?);`;
    const [result] = await connection.execute(statement, [name]);
    return result;
  }

  async getTagList(limit, offset) {
    const statement = `SELECT * FROM tag LIMIT ?, ?;`;
    const [result] = await connection.execute(statement, [offset, limit]);
    return result;
  }

  async getTagByName(name) {
    const statement = `SELECT * FROM tag WHERE name = ?;`;
    const [result] = await connection.execute(statement, [name]);
    return result[0];
  }

  async hasTag(wallpaperId, tagId) {
    const statement = `SELECT * FROM wallpaper_tag WHERE wallpaper_id = ? AND tag_id = ?`;
    const [result] = await connection.execute(statement, [wallpaperId, tagId]);
    return result[0] ? true : false;
  }

  async addTag(wallpaperId, tagId) {
    const statement = `INSERT INTO wallpaper_tag (wallpaper_id, tag_id) VALUES (?, ?);`;
    const [result] = await connection.execute(statement, [wallpaperId, tagId]);
    return result;
  }

  async getWallpaperById(id) {
    const statement = `
    SELECT
      w.id id, w.img_url imgURL, w.createAt createTime, w.updateAt updateTime,
      IF(COUNT(t.id),JSON_ARRAYAGG(
        JSON_OBJECT('id', t.id, 'name', t.name)
      ),NULL) tags
    FROM wallpaper w 
    LEFT JOIN wallpaper_tag wt ON w.id = wt.wallpaper_id
    LEFT JOIN tag t ON wt.tag_id = t.id
    WHERE w.id = ?
    GROUP BY w.id;
    `;
    const [result] = await connection.execute(statement, [id]);
    return result[0];
  }

  async getWallpaperList(type, offset, size) {
    const statement = `
    SELECT
      w.id id, w.img_url imgURL, w.createAt createTime, w.updateAt updateTime, t.name tagName
    FROM wallpaper w 
		LEFT JOIN wallpaper_tag wt ON w.id = wt.wallpaper_id
		LEFT JOIN tag t ON wt.tag_id = t.id
    WHERE t.name = ?
    GROUP BY w.createAt DESC
		LIMIT ?, ?;  
    `;
    const [result] = await connection.execute(statement, [type, offset, size]);
    return result;
  }

  async getWallpaperRandList(type, size) {
    const statement = `
    SELECT
      w.id id, w.img_url imgURL, w.createAt createTime, w.updateAt updateTime, t.name tagName
    FROM wallpaper w 
		LEFT JOIN wallpaper_tag wt ON w.id = wt.wallpaper_id
		LEFT JOIN tag t ON wt.tag_id = t.id
		WHERE t.name = ?
		ORDER BY RAND()
		LIMIT ?;
    `;
    const [result] = await connection.execute(statement, [type, size]);
    return result;
  }
}

module.exports = new WallpaperService();