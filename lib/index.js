const routes = require("express").Router();
const reqControllers = require("app-root-path").require;

module.exports = (req, res, custom) => {
  let verb = req.method;
  let pathname = req._parsedUrl.pathname;
  let path = req._parsedUrl.path;
  let query = Object.keys(req.query);

  let routeFound = custom.routes[transformRoute(verb, path, pathname, query)];
  if (routeFound) {
    let _action = reqControllers(routeFound.action);
    routes[verb.toLowerCase()](
      req._parsedUrl.pathname,
      routeFound.middleware,
      _action
    );
  } else {
    routes[verb.toLowerCase()](req._parsedUrl.pathname, (req, res) => {
      res.status(404).send("not found");
    });
  }
  return routes(req, res);
};

function transformRoute(verb, path, pathname, query) {
  if (query.length > 0 && verb == "GET") {
    // console.log("verb : ", verb);

    return `${verb} ${path.split("?")[0]}/:${query.join("/:")}`;
  } else {
    return `${verb} ${pathname}`;
  }
}
