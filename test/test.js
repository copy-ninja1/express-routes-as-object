let chai = require("chai");
let chaiHttp = require("chai-http");
var should = chai.should();
chai.use(chaiHttp);
let server = require("../lib/index");
//Our parent block
describe("Podcast", () => {
  describe("/GET media", () => {
    it("It should return with a response", (done) => {
      chai
        .request(server)
        .post("/account/create")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.podcasts.length.should.be.eql(1);
          done();
        });
    });
  });
});
