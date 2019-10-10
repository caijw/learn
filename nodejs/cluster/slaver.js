const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;
const port = 80;

// Workers can share any TCP connection
// In this case it is an HTTP server
http.createServer((req, res) => {
  let log = `${process.pid}: hello world\n`;
  res.writeHead(200);
  res.end(log);
}).listen(port, function(err) {
  if (err) {
    console.log(`Worker ${process.pid} listen ${port} error.`, err);
  } else {
    console.log(`Worker ${process.pid} listen ${port} success.`);
  }
});

console.log(`Worker ${process.pid} started`);