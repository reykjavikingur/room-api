const data = {};

const EMPTY_MESSAGE = {};

class MessageStore {

    createMessage(roomId, message) {
        const {type, payload} = message;
        if (!data[roomId]) {
            data[roomId] = {};
        }
        data[roomId][type] = message;
    }

    removeMessage(roomId, type) {
        if (data.hasOwnProperty(roomId)) {
            if (data[roomId].hasOwnProperty(type)) {
                const message = data[roomId][type];
                delete data[roomId][type];
                return message;
            }
            else {
                return EMPTY_MESSAGE;
            }
        }
        else {
            return EMPTY_MESSAGE;
        }
    }
}

module.exports = new MessageStore();
