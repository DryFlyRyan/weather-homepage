require('dotenv').load();

var express = require('express');
var socket = require('socket.io');
var http = require('http');


var app = express();
var server = http.Server(app);
var io = socket(server);


// Sockets
// For frontend connection to the weather

io.on('connection', function(socket){

})

app.use(express.static('./frontend'));

var port = process.env.PORT || 3000;

server.listen(port, function(){
  console.log("Server listening on ", port);
})

module.exports = app;
