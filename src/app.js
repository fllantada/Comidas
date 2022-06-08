const express = require("express");
const morgan = require("morgan");
const routes = require("./routes/index.routes");

const server = express();
server.use(morgan("tiny"));
server.use(express.json());
server.use("/", routes);
server.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = { app: server };
