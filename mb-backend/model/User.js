const Sequelize=require('sequelize');
const db=require('../connection/connection');

//Schema Defined For Manager
module.exports=db.sequelize.define(
    'manager',
    {
        manager_id:{
            type:Sequelize.INTEGER,
            autoIncrement: true,            
            primaryKey:true
        },
        email:{
            type:Sequelize.STRING
        },
        first_name:{
            type:Sequelize.STRING
        },
        last_name:{
            type:Sequelize.STRING
        },
        password:{
            type:Sequelize.STRING
        },
        dob:{
            type:Sequelize.DATE
        },
        company:{
            type:Sequelize.STRING
        }
    },
    {
        timestamp:false
    }
)