var http = require("http");
var server = http.createServer(function (req, res) {
res.writeHead(200);
res.end("Hello world!!! /n Simi is a badt guy");
});
server.listen(3000);