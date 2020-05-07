var request = require("request");
var base_url = "http://localhost:3000/";
var server = require("../app.js");

describe("Hello World Server", function() {
  describe("GET /", function() {
    it("returns status code 200", function(done) {
      request.get(base_url, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
        // console.log('passs',response.statusCode);
      });
    });

    it("returns Hello World", function(done) {
      request.get(base_url, function(error, response, body) {
        expect(body).toBe("Hello World!");
        done();
        // console.log('passs');
        server.close();
      });
    });
  });
});
