const { expressjwt: jwt } = require("express-jwt");
const jwks = require("jwks-rsa");


let jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://dev-o7k6sbvjre41wvzb.us.auth0.com/.well-known/jwks.json",
  }),
  audience: "route-protected",
  issuer: "https://dev-o7k6sbvjre41wvzb.us.auth0.com/",
  algorithms: ["RS256"],
}).unless({ path: ["/getroomdetail", "/info", "/rooms", '/reviews','/countries',"/feedback","/owner","/owner/get","/owner/post"] });

module.exports = jwtCheck;