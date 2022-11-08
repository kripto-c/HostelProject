const {Router} = require("express");
const express = require('express');
const login = require('./login/route');
const router = Router();

// auth0 backend
const {  expressjwt : jwt  }  =  require ( "express-jwt" )
const jwks = require('jwks-rsa');

// router.get("/", async(req, res) =>{
//     console.log("si")
//     res.send("estamos listos!");

// })

let jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://dev-o7k6sbvjre41wvzb.us.auth0.com/.well-known/jwks.json'
  }),
  audience: 'route-protected',
  issuer: 'https://dev-o7k6sbvjre41wvzb.us.auth0.com/',
  algorithms: ['RS256']
  }).unless({ path:['/login']});
  
router.use(jwtCheck);

router.use(express.json());

router.use('/login', login);


module.exports = router;

