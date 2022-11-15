const { Client, Countrie } = require('../../db')

async function getClient(req, res) {     
         const { email } = req.query; 
         console.log(email)
    try {
        const data = await Client.findOne(
          {where:{ email: email },include:{
            model:Countrie,
            attributes:['country'],
            trought:{attributes:[]}
          }})
         if (data.length == 0) return res.send('empty db')
         console.log(data)
         res.json(data);
       } catch (error) {
         res.json({error: error + ""})
       } 
 }

module.exports =  {
    getClient
};