const connection = require('../app/database');

class UserService {
  async create(user) {
    const {
      name,
      password
    } = user;

    const statement = `INSERT INTO user (name, password) VALUES(?,?);`;

    const result = await connection.execute(statement, [name, password]);

    // 将user存储到数据库中
    return result[0];
  }

  async getUserByName(name) {
    const statement = `SELECT * FROM user WHERE name = ?;`;
    const result = await connection.execute(statement, [name]);

    return result[0];
  }

  async updateAvataerUrlById(avatarUrl, userId){
    const statement = `UPDATE user SET avatar_url = ? WHERE id = ?;`;
    const result = await connection.execute(statement, [avatarUrl, userId]);
    return result;
  }
}

module.exports = new UserService();