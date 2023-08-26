const http = require("http");

http.createServer((_, res) => res.end("Im alive..")).listen(8080)
