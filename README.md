# express-routes-as-object

## Table of Contents

- [Installing](#installing)
- [Example](#example)
- [Credits](#credits)
- [License](#license)

## Installing

Using npm:

```bash
$ npm i express-routes-as-object
```

Using yarn:

```bash
$ yarn add express-routes-as-object
```

# Example

## Server

### note: For now This package only covers for reast-api use case

```js
//server.js

const express = require("express");

const customRoute = require("./config/routes");
const exrouteObject = require("express-routes-as-object");
const app = express();

app.use("/", (req, res) => {
  exrouteObject(req, res, customRoute);
});

const server = app.listen(4000, () =>
  console.log(`
🚀⭐️ Server ready at: http://localhost:4000`)
);
```

# Custom routes

### note

Every route configuration consists of an **address** and a **target**, for example:

```js
'GET /foo/bar': {action: "/controllers/foo/bar"}
^^^address^^^   ^^^^^^^^^^^^target^^^^^^^^^^^^^^
```

```js
// routes.js

module.exports = {
  routes: {
    "POST /account/create": {
      middleware: [firstMiddleware, secondeMiddleware],
      action: "/controllers/user/create",
    },
    "GET /account/find": {
      middleware: [checkResponse, greatePost],
      action: "/controllers/user/find-one",
    },
  },
};

function firstMiddleware(req, res, next) {
  console.log("this is the first middleware function");
  next();
}

function secondeMiddleware(req, res, next) {
  console.log("after the first middleware come the second middleware");
  next();
}
```

# Controller file

### Note:

Before using this package, you have to create a controller directory on the root of your project directory

```
📦Project
 ┣ 📂controllers
 ┃ ┗ 📂user
 ┃ ┃ ┗ 📜find-one.js
 ┣ 📂node_modules
 ┃ ┗ 📜...
 ┣ 📜server.js
 ┣ 📜package.json
 ┗ 📜routes.js
```

Every route configuration consists of an **address** and a **target**, for example:

```js
module.exports = (req, res) => {
  res.send("Hello from express");
};
// /controllers/user/find-one.js
```

###### NOTE

The `qs` library is preferable if you need to stringify nested objects, as the `querystring` method has known issues with that use case (https://github.com/nodejs/node-v0.x-archive/issues/1665).

## Credits

express-routes-as-object is heavily inspired by the [Routes](https://sailsjs.com/documentation/concepts/routes) provided in [sailsjs.com](https://sailsjs.com/). Ultimately express-routes-as-object is an effort to provide same routing method in sailsjs to expressjs

## License

[MIT](LICENSE)
