require("dotenv").config();
const { expressjwt: jwt } = require("express-jwt");
const jwks = require("jwks-rsa");
const { JWK_URI, JWK_AUDIENCE, JWK_ISUER } = process.env;

let jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: JWK_URI,
  }),
  audience: JWK_AUDIENCE,
  issuer: JWK_ISUER,
  algorithms: ["RS256"],
}).unless({ path: ["/getroomdetail", "/rent", "/info", "/rooms", '/countries', "/feedback", "/reviews", "/faq", "/owner/gethome"] });

module.exports = jwtCheck;