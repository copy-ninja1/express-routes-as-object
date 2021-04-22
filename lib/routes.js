module.exports = {
  routes: {
    "POST /account/create": {
      middleware: [checkResponse, say],
      action: "controllers/create",
    },
    "PATCH /account/update": { action: "/account/update" },
    "POST /account/delete": { middleware: [], action: "/account/delete" },
  },
};

function checkResponse(req, res, next) {
  console.log("the response will be sent by the next function ...");
  next();
}

function say(req, res, next) {
  console.log("said ...");
  next();
}
