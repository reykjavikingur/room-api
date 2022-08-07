const Router = require('koa-router');
const Util = require('./util');
const messageStore = require('./message-store');

const router = new Router();

// Create a room

router.post('/rooms', (ctx, next) => {
    ctx.body = {
        roomId: Util.generateRoomId(),
    };
    console.log('\tbody', ctx.body);
    next();
});

// Update the message in a given from

router.post('/rooms/:roomId', (ctx, next) => {
    const { roomId } = ctx.params;
    const body = ctx.request.body;
    if (!body.hasOwnProperty('type') || !body.hasOwnProperty('payload')) {
        ctx.response.status = 400;
        ctx.body = 'Invalid room message';
        console.error('Invalid room message', body);
    }
    else {
        const type = String(body.type);
        const payload = body.payload;
        const message = { type, payload };
        messageStore.createMessage(roomId, message);
        ctx.body = message;
    }
    console.log('\tbody', ctx.body);
    next();
});

// Get the message in a given room and delete it if it existed

router.get('/rooms/:roomId/:type', (ctx, next) => {
    // returns the message in the room of the given type, if it exists, and then deletes it
    const { roomId, type } = ctx.params;
    ctx.body = messageStore.removeMessage(roomId, type);
    console.log('\tbody', ctx.body);
    next();
});

module.exports = router;
