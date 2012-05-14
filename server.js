var http = require('http');
var socketIO = require('socket.io').listen(8080);;
var httpRouter = require('./httpRouter.js');

var requestHandler = function(req, res) {
    httpRouter(req, res);
};

var server = http.createServer(requestHandler);
server.listen(8000);

socketIO.sockets.on('connection', function(socket) {
    console.log('connection');
    socket.emit('connect', 'ok');
    socket.on('message', function(data) {
        socket.emit('message', data);
        socket.broadcast.emit('message', data);
        console.log(data);
    });
    socket.on('test', function(data) {
        console.log(data);
    });
        
});
