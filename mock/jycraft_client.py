import asyncio
import websockets


@asyncio.coroutine
def jycraft_handler():
    ws = yield from websockets.connect('ws://127.0.0.1:44446/')
    if not ws.open:
        return
    yield from ws.send('{"type":"login", "password":"swordfish"}')
    res = yield from ws.recv()
    print(res)
    command = input('>>> ')
    # available types: login, interactive, logout (file is not implemented yet)
    yield from ws.send('{"type":"interactive", "command":"%s"}' % str(command))
    result = yield from ws.recv()
    print(result)


asyncio.get_event_loop().run_until_complete(jycraft_handler())
asyncio.get_event_loop().run_forever()
