var http = require('http');

http.createServer(function (req, res) {
  res.write('btech server!'); //write a response to the client
  res.end(); //end the response
}).listen(5000); 