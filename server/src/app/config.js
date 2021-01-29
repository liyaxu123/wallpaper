const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

dotenv.config();


const PRIVATE_KEY = fs.readFileSync(path.resolve(__dirname, './keys/private.key'));
const PUBLIC_KEY = fs.readFileSync(path.resolve(__dirname, './keys/public.key'));

// console.log(process.env.APP_PORT);

module.exports = {
  APP_HOST,
  APP_PORT,
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_DATABASE,
  MYSQL_USER,
  MYSQL_PASSWORD
} = process.env;

module.exports.PRIVATE_KEY = PRIVATE_KEY;
module.exports.PUBLIC_KEY = PUBLIC_KEY;