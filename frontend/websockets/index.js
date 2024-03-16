const express = require('express')
var cors = require('cors')
const WebSocketServer  = require('ws').WebSocketServer

const port = 3000;

const app = express();
app.use(cors());


const wss = new WebSocketServer({ port: 8080 });

const teachers = [];
wss.on('connection', function connection(ws) {

  ws.on('error', console.error);

  ws.on('message', function message(data) {
    console.log('received: %s', data);
 
    if (data == 'teacher-123') {
        console.log('teacher is connected')
        teachers.push(ws);
    }
    
    teachers.forEach(c => {
        c.send('Server response: ' +  data) ;
    }) 
  });
});


app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})