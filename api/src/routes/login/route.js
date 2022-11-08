const { Router} = require('express');
const axios = require('axios')
const route = Router();


route.get('/', (req, res)=>{
  res.send('hello from index route')
})

route.get('/protected', (req, res)=>{
res.send('hello from protected route')
})

route.get('/profile', async (req, res)=>{
 const accesToken = req.headers.authorization.split(' ')[1];
 const responds = await axios.get('https://dev-o7k6sbvjre41wvzb.us.auth0.com/userinfo', {
    headers:{
      authorization:`Bearer ${accesToken}`
    }
 })
 const userinfo = responds.data;
 res.send(userinfo);  
})


module.exports = route;