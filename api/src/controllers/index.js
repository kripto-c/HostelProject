const { Room, Type, Countrie, Rent } = require("../db")

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
    }
}