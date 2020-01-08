const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http);


let users = [];

io.on('connection', function (socket) {
  console.log('a user connected');
  const user= {}

  socket.on('join', function ({ room, username }) {
    user.username=username
    users.push(username);
    console.log(room, username, users)
    socket.join(room)
    io.to(room).emit('join', users)
  })

  socket.on('message', function (message) {
    console.log(message);
    io.emit('message', message);
  })

  socket.on('disconnect', function (t) {
    console.log("discon",user)
    users = users.filter(u => u !== user.username)
  });
});



http.listen(3000, () => console.log('the app is running on localhost:3000'))
