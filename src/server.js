let express = require('express');
let app = express();
let server = require('http').Server(app);
let io = require('socket.io')(server);
let stream = require('./ws/stream.js');
let path = require('path');
let favicon = require('serve-favicon');

//express-middlewares
app.use(favicon(path.join(__dirname, 'icon.ico')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/',(req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.of('/stream').on('connection', stream);
var PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`)
});