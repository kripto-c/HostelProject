const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('rent', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    dateIn: {
        type: DataTypes.DATE,
    },
    dateOut: {
        type: DataTypes.DATE,
    },
    price: {
        type: DataTypes.DOUBLE,
    },
    observation: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    pago_id:{
      type: DataTypes.STRING
    }
  },
  {
    timestamps: false
  });
};