const Sequelize=require('sequelize');
const db={}

//Databese Connection Using Sequelize
const sequelize=new Sequelize('mb',"root","",{
    host:"localhost",
    dialect:'mysql',
    operatorsAliases:false,
    define: {
        timestamps: false
    },
});

db.sequelize=sequelize;
db.Sequelize=Sequelize;

module.exports=db;