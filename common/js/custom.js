var socket = io('http://localhost:3000');
var joinButton = document.getElementById("joinButton");
var text = document.getElementById("inputText");
var userList = document.getElementById("userList");
var userBoard = document.getElementById("userBoard");

joinButton.onclick = function(){
	socket.emit("join or create", { username : text.value});
	socket.on('join', function(data){      
       displayUserWithHtml(data.users);
	});

	socket.on("leaveUser", function(leaveUser){
       displayUserWithHtml(leaveUser.users);
	});
};

function displayUserWithHtml(data){
	   var users='';
       data.forEach(function(row){
          users += row +'-';
       });
       userList.innerHTML = users;
       userBoard.style.display = 'none';
}