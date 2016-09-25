var express = require('express');
var app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

http.listen(port, function(){
	console.log("chat server connect to 127.0.0.1:"+port);
});

app.use(express.static(__dirname));

io.on("connection", function(socket){
   socket.on("join or create", function(data){
      socket.join();
   });
});