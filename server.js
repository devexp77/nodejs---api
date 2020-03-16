const app = require('../app');
const http = require('http');
const config = require('../config');

const server =  http.createServer(app).listen(config.port, onListening);

function onListening() {
  console.log(`Server listenning on port: ${config.port}!`);
}
