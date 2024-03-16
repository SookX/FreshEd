import asyncio
import websockets
import requests
import json

async def echo(websocket, path):
    async for message in websocket:
        print(f"Received message from client: {message}")
        
        # Process the message to extract student_id and test_id
        msg = "Vasi Svej 1 1:" + message
        msg = msg.split(':')[0]
        msg = msg.split(' ')
        student_id = msg[2]
        test_id = msg[3]

        # Create the dictionary to be sent in the POST request
        data = {
            'student_id': student_id,
            'test_id': test_id
        }

        url = 'http://localhost:8000/sockets/log/'  
        response = requests.post(url, json=data)

        if response.status_code == 200:
            print('POST request sent successfully')
        else:
            print('Failed to send POST request')

        await websocket.send(message)

start_server = websockets.serve(echo, "localhost", 8765)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
