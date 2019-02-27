/* eslint-disable linebreak-style */
/* eslint-disable no-console */
// My test file for when I got this ... Error: listen EADDRINUSE :::3306
const http = require('http');

const server = http.createServer((req, res) => {
  res.end('test');
});

server.on('listening', () => {
  console.log('ok, server is running');
});

server.listen(80);
