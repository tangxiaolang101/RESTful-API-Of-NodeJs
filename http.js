const http = require('http');
const url = require('url');
const router = require('./router.js');

http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  var pathname = url
    .parse(request.url)
    .pathname;
  var msg = router.route(pathname);
  response.end(msg);
}).listen(8888);
