import asyncio
import websockets


@asyncio.coroutine
def handler():
    websocket = yield from websockets.connect('ws://localhost:8765/')
    if not websocket.open:
        return

    while True:
        name = input('What is your name? ')
        yield from websocket.send(name)
        message = yield from websocket.recv()
        if message is None:
            break
        print('< {}'.format(message))

    yield from websocket.close()


asyncio.get_event_loop().run_until_complete(handler())
asyncio.get_event_loop().run_forever()
