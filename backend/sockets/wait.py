import asyncio
import websockets
import requests

async def echo(websocket, path):
    async for message in websocket:
        print(f"Received message from client: {message}")
        msg = "Vasi Svej" + message
        
        await websocket.send(message)

start_server = websockets.serve(echo, "localhost", 8765)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
