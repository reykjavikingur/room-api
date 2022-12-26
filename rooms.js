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

// Update the message in a given room

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

// Get a message in a given room of a given type

router.get('/rooms/check/:roomId/:type', (ctx, next) => {
    // returns the message in the room of the given type, if it exists
    const { roomId, type } = ctx.params;
    ctx.body = messageStore.checkMessage(roomId, type);
    next();
});

// Take a message in a given room of a given type (side-effectually removing it)

router.get('/rooms/:roomId/:type', (ctx, next) => {
    // returns the message in the room of the given type, if it exists, and then deletes it
    const { roomId, type } = ctx.params;
    ctx.body = messageStore.removeMessage(roomId, type);
    //console.log('\tbody', ctx.body);
    next();
});

module.exports = router;
