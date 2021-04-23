const express = require("express");

const customRoute = require("./config/routes");
const routes = require("../lib");
const app = express();

app.use("/", (req, res) => {
  routes(req, res, customRoute);
});

const server = app.listen(4000, () =>
  console.log(`
🚀⭐️ Server ready at: http://localhost:4000`)
);
