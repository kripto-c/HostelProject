const {DataTypes} = require('sequelize')
module.exports =(sequelize)=>{
    sequelize.define('owner',{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        name:{
            type: DataTypes.STRING
        },
        lastName:{
            type:DataTypes.STRING
        },
        user:{
            type:DataTypes.STRING
        },
        hostelName:{
            type:DataTypes.STRING
        }, 
        city:{
            type:DataTypes.STRING
        },
        country:{
            type:DataTypes.STRING
        },
        zip:{
            type:DataTypes.STRING
        },
        instagram:{
            type:DataTypes.STRING
        },
        facebook:{
            type: DataTypes.STRING
        },
        twitter:{
            type:DataTypes.STRING
        }

    });
}