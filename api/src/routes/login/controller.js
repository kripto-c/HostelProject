const { Client } = require('../../db')

async function getClient(req, res) {     
         const { email } = req.query; 
          console.log(email);
    try {
        const data = await Client.findOne({
            where:{ email: email }
        })
         if (data.length == 0) return res.send('empty db')
         res.json(data);
       } catch (error) {
         res.json({error: error + ""})
       } 
 }




module.exports =  {
    getClient
};