const { Client, Countrie } = require('../../db')

async function getClient(req, res) {     
         const { id } = req.query; 
    try {
        const data = await Client.findOne(
          {where:{ idAuth: id },include:{
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