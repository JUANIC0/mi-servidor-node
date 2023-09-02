const http = require('http');
const chalk = require('chalk');

const hostname = 'localhost';
const port = 8000; // Puedes cambiarlo a 8080 si lo prefieres

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  const response = {
    nombre: 'Nicolas',
    mensaje: '¡Hola desde mi servidor Node.js!'
  };
  res.end(JSON.stringify(response));
});

server.listen(port, hostname, () => {
  console.log(chalk.green(`El servidor está corriendo en http://${hostname}:${port}/`));
});
