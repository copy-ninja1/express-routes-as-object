// let express = require("express");
// const app = express();
// const port = 3000;

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });

const express = require("express");
var bodyParser = require("body-parser");
const customRoute = require("./routes");
const routes = require("./maped-routes");
const app = express();
// app.use(express.json());
// app.use(bodyParser.json()); // support json encoded bodies
// app.use(bodyParser.urlencoded({ extended: true })); //
app.use("/", (req, res) => {
  routes(req, res, customRoute);
});

// routes(app);

// app.use(express.json());

const server = app.listen(4000, () =>
  console.log(`
🚀⭐️ Server ready at: http://localhost:4000`)
);
