const { Room, Type } = require("../db")

module.exports = {
    getRoomInfo: async function() {
        let rooms = await Room.findAll({
            include: {
                model: Type
            }
        })
        return rooms
    },
    postRoomInfo: async function(beds, description, image, bathroom, price, observation, status) {
        if(!beds || !description || !image || !bathroom || !price || !observation || !status) {
            return "Faltan ingresar datos"
        }
        else {
            let newBed = await Room.create({
                beds, description, image, bathroom, price, observation, status
            })
            return newBed
            
        }
    }
}