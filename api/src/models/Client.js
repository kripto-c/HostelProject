const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('client', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    personalID: { //documento/pasaporte
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING,
    },
    nationality: {
        type: DataTypes.STRING
    },
    phoneNumber: {
        type: DataTypes.INTEGER,
    },
    email: {
        type: DataTypes.STRING,
    },
    observation: {
        type: DataTypes.STRING,
        allowNull: true,
    },
  },
  {
    timestamps: false
  }) 
}