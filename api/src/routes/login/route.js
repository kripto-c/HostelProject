const { Router} = require('express');
const { getClient } = require('./controller');
const axios = require('axios');
const {  Client } = require('../../db');
const route = Router();


route.get('/client',getClient)


route.post('/userEdit',async(req, res)=>{    
  try {
          const accesToken = req.headers.authorization.split(' ')[1];
          const responds = await axios.get('https://dev-o7k6sbvjre41wvzb.us.auth0.com/userinfo', {
             headers:{authorization:`Bearer ${accesToken}`}
           })
           const userinfo = responds.data;
           const { sub } = userinfo;
          const {name, lastname, personalID, nationality, phoneNumber, observation,countrieId} = req.body;
          const id = sub.split('|')[1];
          const client = await Client.findOne({where: {idAuth: id}});
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
       headers:{authorization:`Bearer ${accesToken}`}
     })
     const userinfo = responds.data;
     console.log(responds.data);
        const { email, given_name, family_name, sub } = userinfo;
        const id = sub.split('|')[1];
         if ( email && id ) {
          const clients = await Client.findAll({});
          if (clients.find(e=> e.idAuth == id && e.email == email)) return res.json({message:"logeado correctamente", id}
          );
 
          let newRegister = await Client.create({
             name:given_name,
             lastname:family_name,
             email,
             idAuth:id 
          }) 
          res.json({message:"usuario registrado correctamente ", user:id});
         }else res.send('faltan datos requeridos')
        } catch (error) {
          res.json({error: error + ""})
        }
})



module.exports = route;