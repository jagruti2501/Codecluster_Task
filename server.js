const jsonServer = require('json-server');
const cors = require('cors');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Enable CORS for all routes
server.use(cors());

server.use(middlewares);
server.use(router);

const PORT = 8000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
