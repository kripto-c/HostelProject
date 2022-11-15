const { Router} = require('express');
const { getClient } = require('./controller');
const axios = require('axios');
const {  Client } = require('../../db');
const route = Router();

route.get('/', (req, res)=>{
  res.send('hello from index route')
})

route.get('/client', getClient)


route.post('/userEdit', async(req, res)=>{    
        const {name, lastname, personalID, nationality, phoneNumber, observation,countrieId} = req.body;
        const { email } = req.query;  
        try {
          const client = await Client.findOne({where: {email: email}});
           await client.update({
              name : name,
              lastname,
              personalID,
              nationality,
              phoneNumber,
              observation,
              countrieId
          });
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
     console.log(userinfo);
        const {email, given_name, family_name } = userinfo;
         if ( email && accesToken) {
          const clients = await Client.findAll({});
          
          if (clients.find(e=> e.email == email )) 
          return res.json({message:"ya existe un usuario registrado con este email", email});

          let newRegister = await Client.create({
             name:given_name,
             lastname:family_name,
             email,
          })
          res.json({message:"usuario registrado correctamente ", email});
         }else res.send('faltan datos requeridos')
        } catch (error) {
          res.json({error: error + ""})
        }
})


module.exports = route;