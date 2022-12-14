const Koa = require('koa');
const koaBody = require('koa-body');
const logger = require('koa-logger');
const rooms = require('./rooms');

const app = new Koa();

app.use(logger());

app.use(koaBody());

app.use(rooms.routes());

/*
app.use(async (ctx, next) => {
    console.log('API call', ctx);
    next();
});
//*/

const port = process.env.PORT || 3000;

app.listen(port);
