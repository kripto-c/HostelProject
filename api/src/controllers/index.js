const { Room, Type, Countrie, Rent, Owner } = require("../db")

module.exports = {
    getRoomInfo: async function() {
        let rooms = await Room.findAll({
            include: {
                model: Type
            }
        })
        return rooms
    },
    postRoomInfo: async function(beds, description, image, bathroom, price, observation) {
        if(!beds || !description || !image || !bathroom || !price || !observation) {
            return "Faltan ingresar datos"
        }
        else {
            let newBed = await Room.create({
                beds, description, image, bathroom, price, observation,
            })
            return newBed
            
        }
    },
    getCountries: async function(){
        let countries = await Countrie.findAll()
        return countries
    },
    postOwner: async function(data){
        const {name, lastName, user, hostelName, city ,
               country, zip, instagram, facebook, twitter} = data
        let owner = await Owner.findAll()
        if (!owner.length){
            let newOwner = await Owner.create({
                name, 
                lastName, 
                user, 
                hostelName, 
                city,
                country, 
                zip, 
                instagram, 
                facebook, 
                twitter
             })
             return newOwner
        }else{
            console.log("Back: Actualizacion")
            let updateOwner = await Owner.findByPk(1)
            await updateOwner.update({
               name:name, 
               lastName:lastName, 
               user:user, 
               hostelName:hostelName, 
               city:city,
               country:country, 
               zip:zip, 
               instagram:instagram, 
               facebook:facebook, 
               twitter:twitter
            })
            await updateOwner.save()
            return updateOwner
        }
    },
    getOwner: async function(){
        let dataOwner = await Owner.findAll()
        return dataOwner[0]
    }
}