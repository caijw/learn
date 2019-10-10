const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

// Workers can share any TCP connection
// In this case it is an HTTP server
http.createServer((req, res) => {
  global.testKey = global.testKey || [];
  global.testKey.push("slaver");
  global.testKey.push(process.pid);
  let result = `${process.pid}: hello world\n`;
  console.log(global.testKey);
  console.log(result);
  res.writeHead(200);
  res.end(result);
}).listen(8000);

console.log(`Worker ${process.pid} started`);
global.testKey = global.testKey || [];
console.log(global.testKey);