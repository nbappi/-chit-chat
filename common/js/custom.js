var socket = io('http://localhost:3000');

var elem = function(el){
   return document.querySelector(el);
};

var joinButton = elem('#joinButton'), 
    text = elem("#inputText"), 
    userList = elem("#userList"),
    userBoard = elem("#userBoard");

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
	   var users='<table>';
       data.forEach(function(row){
          users += '<tr><td><a href="#" onclick="helloClick(row)">'+ row+'</a></td></tr>';
       });
       users += '</table>';
       userList.innerHTML = users;
       userBoard.style.display = 'none';
}

function helloClick(row) {
	console.log('Hello From Chit Chat'+row);
}