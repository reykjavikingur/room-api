const Router = require('koa-router');
const Util = require('./util');

const EMPTY_MESSAGE = {};

// map of messages based on roomId
let messages = {};

const router = new Router();

// Create a room

router.post('/rooms', (ctx, next) => {
    ctx.body = {
        roomId: Util.generateRoomId(),
    };
    next();
});

// Get the message in a given room

router.get('/rooms/:roomId', (ctx, next) => {
    const { roomId } = ctx.params;
    const message = messages[roomId] || EMPTY_MESSAGE;
    ctx.body = message;
    next();
});

// Update the message in a given from

router.post('/rooms/:roomId', (ctx, next) => {
    const { roomId } = ctx.params;
    const body = ctx.request.body;
    if (!body.type || !body.payload) {
        ctx.response.status = 400;
        ctx.body = 'Invalid room message';
        console.error('Invalid room message', body);
    }
    else {
        const type = String(body.type);
        const payload = body.payload;
        const message = { type, payload };
        messages[roomId] = message;
        ctx.body = message;
    }
    next();
});

// Get the message in a given room and delete it if it existed

router.get('/rooms/:roomId/:type', (ctx, next) => {
    // returns the message in the room of the given type, if it exists, and then deletes it
    const { roomId, type } = ctx.params;
    const message = messages[roomId];
    if (message && message.type === type) {
        ctx.body = message;
        messages[roomId] = EMPTY_MESSAGE;
    }
    else {
        ctx.body = EMPTY_MESSAGE;
    }
    next();
});

module.exports = router;
