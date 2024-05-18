const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const PORT = process.env.PORT || 5000;

const { router: authRouter, authenticateJWT } = require('./auth');

app.use(express.json()); // To parse JSON bodies
app.use('/auth', authRouter);

// Protect routes
app.get('/protected', authenticateJWT, (req, res) => {
  res.send('This is a protected route');
});

app.get('/', (req, res) => {
  res.send('Server is running');
});

io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('message', (message) => {
    io.emit('message', message);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});


server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
