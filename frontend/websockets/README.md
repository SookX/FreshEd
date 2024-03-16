
## Pre-requirements
 - node / npm

## Installation 
```
npm i 
```

## Startup 
Running nodemon a hot reloading service for nodejs. 
```
npm start 
```

## Idea behing 
Educational for WebSockets.
The idea behind it: 
Server creates the socket connection on port 8080
Clients are 2 types and they should be identified. 

1. student.html - clients, which will be write into an input field and send data to server

2. teacher.html - identified as teacher


Student types and sends a message --> Server consumes the messages from all users and sends them to the teacher --> teacher receives a message

The idea is many students to send messaging to a single teacher. 
IF the browser is refreshed the messages are being lost. So either:
1) store the messages to the db 
2) store in local / session storage
3) store them in the browser db
