var express = require('express');
var path = require('path');
var handleRequest = require('./request-handler');

var server = express();
var port = 3000;

server.get('/classes/messages', handleRequest.requestHandler);
server.post('/classes/messages', handleRequest.requestHandler);

server.use(express.static('client/2016-06-chatterbox-client/client'));

server.listen(port, function() {
  console.log('listening to Duke');
});

// server.get('/', function(req, res) {
//   console.log('got GET request');
//   res.send('Thank you for asking, here is the information requested');
// });

// server.post('/', function(req, res) {
//   res.send('Thank you for sending me something');
// });