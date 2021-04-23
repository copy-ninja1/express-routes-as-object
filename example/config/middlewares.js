function checkResponse(req, res, next) {
  console.log("the response will be sent by the next function ...");
  next();
}

function greatePost(req, res, next) {
  console.log("calling the create controller");
  next();
}

module.exports = { checkResponse, greatePost };
