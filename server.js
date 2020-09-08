const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.send('<h1>hello world</h1>');
});

http.listen(process.env.PORT || 3000 , () => {
    console.log('listening on port 3000');
});

io.on('connection', (socket) => {
console.log( 'client connected');
widget1(socket);
widget2(socket);
widget3(socket);
widget4(socket);
widget5(socket);
widget6(socket);
widget10(socket);
socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

function widget1(socket) {
    socket.emit('widget1',  createGround(1, 8));

    setTimeout(() => {
        widget1(socket);
    }, 1000);
}

function widget2(socket) {
    socket.emit('widget2',  createGround(2, 5));

    setTimeout(() => {
        widget2(socket);
    }, 1000);
}

function widget3(socket) {
    socket.emit('widget3',  createGround(1, 5));

    setTimeout(() => {
        widget3(socket);
    }, 1000);
}

function widget4(socket) {
    socket.emit('widget4',  createGround(4, 4));

    setTimeout(() => {
        widget4(socket);
    }, 1000);
}

function widget5(socket) {
    socket.emit('widget5',  createGround(4, 4));

    setTimeout(() => {
        widget5(socket);
    }, 1000);
}

function widget6(socket) {
    socket.emit('widget6',  createGround(1, 5));

    setTimeout(() => {
        widget6(socket);
    }, 1000);
}

function widget10(socket) {
    socket.emit('widget10',  createGround(3, 8));

    setTimeout(() => {
        widget10(socket);
    }, 1000);
}

function createGround(width, height){
    var result = [];
    for (var i = 0 ; i < width; i++) {
        result[i] = [];
        for (var j = 0; j < height; j++) {
            result[i][j] = (Math.random() * 5 | 0) + 6;
        }
    }
    return result;
}