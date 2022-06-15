const ALPHABET = 'ABCDEFGHIJLKMNOPQRSTUVWXYZ'.split('');

const Util = {

    generateRoomId() {
        const len = ALPHABET.length;
        const roomId = Array(4).fill().map(() => {
            const i = Math.floor(Math.random() * len);
            return ALPHABET[i];
        }).join('');
        return roomId;
    }
};

module.exports = Util;
