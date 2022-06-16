const Koa = require('koa');
const koaBody = require('koa-body');
const logger = require('koa-logger');
const rooms = require('./rooms');

const app = new Koa();

app.use(logger());

app.use(koaBody());

app.use(rooms.routes());

app.listen(3000);

