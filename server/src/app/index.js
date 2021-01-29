const Koa = require('koa');
const bodeParser = require('koa-bodyparser');
const errorHandler = require('./error-handle');
const useRoutes = require('../router');

const app = new Koa();
app.useRoutes = useRoutes;

// 使用 koa-bodyparser 解析前端发送过来的JSON数据
app.use(bodeParser());
app.useRoutes();
app.on('error', errorHandler);

module.exports = app;