const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;
const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/index.html"))
});

app.get('/startCounter', (req, res) => {
    startCounter();
    res.send('Started Counter!');
});

io.on('connect', function(socket) {
    console.log('a user has connected');
    socket.on('message', function(msg) {
        io.emit('message', msg);
    })
})

function startCounter() {
    var counter = 0;
    return setInterval(() => {
        counter += 1;
        console.log(counter);
    }, 1000);
}

http.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});