const { Client } = require('../../db')

async function getClient(req, res) {     
         const { id } = req.query; 
    try {
        const data = await Client.findOne({
            where:{ idAuth: id }
        })
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