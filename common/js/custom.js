var socket = io('http://localhost:3000');
var joinButton = document.getElementById("joinButton");
var text = document.getElementById("inputText");

joinButton.onclick = function(){
	socket.emit("join or create", text.value);
};