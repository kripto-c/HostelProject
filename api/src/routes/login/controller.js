const { Client } = require('../../db')

async function getClient(req, res) {     
         const { email } = req.body; 
    try {
        const data = await Client.findAll({
            where:{ email }
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