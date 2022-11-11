const { Router} = require('express');
const { getClient } = require('./controller');
const axios = require('axios');
const {  Client } = require('../../db');
const route = Router();

route.get('/', (req, res)=>{
  res.send('hello from index route')
})

route.get('/client', getClient)

// route.get('/users', getClient)

route.post('/userEdit', async(req, res)=>{    
        const {email, personalID, nationality, phoneNumber, observation} = req.body;    
        try {
          const client = await Client.findOne({where: {email: email}});
           await client.update({personalID, nationality, });
           client.personalID = personalID;
           client.nationality = nationality;
           client.phoneNumber = phoneNumber;
           client.observation = observation;

           await client.save();

           res.send(client)
        } catch (error) {
          res.json({error: error + ""})
        }
})

route.get('/setClient', async (req, res)=>{
  try {
     const accesToken = req.headers.authorization.split(' ')[1];
     const responds = await axios.get('https://dev-o7k6sbvjre41wvzb.us.auth0.com/userinfo', {
        headers:{
          authorization:`Bearer ${accesToken}`
        }
     })
     const userinfo = responds.data;
        const {email, name } = userinfo 
         if (name && email && accesToken) {
          const clients = await Client.findAll({});
          
          if (clients.find(e=> e.email == email )) return res.json({message:"ya existe un usuario registrado con este email", email});

          let newRegister = await Client.create({
             name,
             email,
             password:accesToken
          })
          res.json(newRegister);
         }else res.send('faltan datos requeridos')
        } catch (error) {
          res.json({error: error + ""})
        }
})


module.exports = route;