# Room API

Simple gaming room-based messaging API.

## Functionality

* Create room and get back randomly generated room code.
  * POST /rooms
* Join room by including it in URL path. 
* Send message of particular type and payload.
  * POST /rooms/{roomId}
* Take latest message of particular type. (Taking involves getting and then deleting.)
  * GET /rooms/{roomId}/{type}

## Endpoints

* `/rooms`
  * POST
    * creates room
    * returns `{ roomId: string }`
* `/rooms/{roomId}`
  * POST
    * creates message
    * accepts `{type: string, payload: object}`
  * GET
    * gets latest message and deletes it
    * returns `{type: string, payload: object}`
