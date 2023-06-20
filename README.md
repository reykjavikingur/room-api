# Room API

Simple gaming room-based messaging API.

Based on guidance from https://www.crowdbotics.com/blog/how-to-build-a-rest-api-with-koajs

## Functionality

* Create room and get back randomly generated room code.
  * POST /rooms
* Join room by including it in URL path. 
* Send message of particular type and payload.
  * POST /rooms/{roomId}
* Take latest message of particular type. (Taking involves getting and then deleting.)
  * GET /rooms/{roomId}/{type}

## Endpoints

* `POST /rooms`
  * creates room
  * returns `{ roomId: string }`
* `POST /rooms/{roomId}`
  * creates message in the given room
  * accepts `{type: string, payload: object}`
* `GET /rooms/check/{roomId}/{type}`
  * gets message in the given room of the given type, if it exists
  * returns `{type: string, payload: object}`
* `GET /rooms/{roomId}/{type}`
  * gets latest message in the given room if it matches the given type
  * side-effectually deletes the message in the given room if it matched the given type


## Usage in RPGMaker XP (Ruby Game Scripting System)

### Posting Data

* `responseData = pbPostData(url, requestData)`
  * `url` is a string
  * `requestData` and `responseData` are each a hash mapping string to string
* `responseData = pbDownloadData(url)`
  * `url` is a string
  * `responseData` is a hash mapping string to string


## Roadmap

It is becoming clear that the following use cases will be valuable in a future iteration:

* the ability to just check whether an object of a particular type is on the server but not necessarily delete (so explicit delete)
* the differentiation of sender and receiver of data, so sender can check if its sent data is still there, whereas receiver can "watch" for incoming updates
* the ability to queue multiple items of same type so sender can send multiples that the receiver can receive in sequence
