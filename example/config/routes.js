const middleware = require("../config/middlewares");
module.exports = {
  routes: {
    "POST /account/create": {
      middleware: [middleware.checkResponse, middleware.greatePost],
      action: "/example/controllers/user/create",
    },
    "GET /account/get": {
      middleware: [middleware.checkResponse, middleware.greatePost],
      action: "/example/controllers/user/find",
    },
  },
};
