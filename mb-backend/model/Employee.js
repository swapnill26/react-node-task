const Sequelize=require('sequelize');
const db=require('../connection/connection');

//Schema Defined For Employee
var Employee=db.sequelize.define(
    'employee',
    {
        emp_id:{
            type:Sequelize.INTEGER,
            autoIncrement: true,            
            primaryKey:true
        },
        emp_firstname:{
            type:Sequelize.STRING
        },
        emp_lastname:{
            type:Sequelize.STRING
        },
        emp_address:{
            type:Sequelize.STRING
        },
        emp_dob:{
            type:Sequelize.DATE
        },
        emp_mobile:{
            type:Sequelize.INTEGER
        },
        emp_city:{
            type:Sequelize.STRING
        }
    },
    {
        timestamp:false
    }
)

module.exports=Employee;