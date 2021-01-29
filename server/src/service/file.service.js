const connection = require('../app/database');

class FileService {
  async createAvatar(filename, mimetype, size, userId) {
    const statement = `INSERT INTO avatar (filename, mimetype, size, user_id) VALUES (?, ?, ?, ?);`;
    const [result] = await connection.execute(statement, [filename, mimetype, size, userId]);
    return result;
  }

  async getAvatarByUserId(userId) {
    const statement = `SELECT * FROM avatar WHERE user_id = ?;`;
    const [result] = await connection.execute(statement, [userId]);
    return result.pop();
  }

  async createFile(filename, mimetype, size, userId, momentId) {
    const statement = `INSERT INTO file (filename, mimetype, size, user_id, moment_id) VALUES (?, ?, ?, ?, ?);`;
    const [result] = await connection.execute(statement, [filename, mimetype, size, userId, momentId]);
    return result;
  }

  async getFileByFilename(filename) {
    const statement = `SELECT * FROM file WHERE filename = ?;`;
    const [result] = await connection.execute(statement, [filename]);
    return result[0];
  }

  async saveWallpaperInfo(id, path, size) {
    const statement = `INSERT INTO wallpaper (img_id, img_url, size) VALUES (?, ?, ?);`;
    const [result] = await connection.execute(statement, [id, path, size]);
    return result;
  }
}

module.exports = new FileService();