const Koa = require('koa');
const koaBody = require('koa-body');
const rooms = require('./rooms');

const app = new Koa();

app.use(koaBody());

app.use(rooms.routes());

app.listen(3000);

