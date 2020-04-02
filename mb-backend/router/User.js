const express=require('express');
const users=express.Router();
const cors=require('cors');
const jwt=require('jsonwebtoken');


const User=require('../model/User');
const Employee=require('../model/Employee');
users.use(cors());

process.env.SECRET_KEY='secret';

//Route for Manager Registration
users.post('/register',(req,res)=>{
    const userData={
        email:req.body.email,
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        password:req.body.password,
        address:req.body.address,
        dob:req.body.dob,
        company:req.body.company
    }
    User.findOne({
        where:{
            email:req.body.email
        }
    })
    .then(manager=>{
        if(!manager){
            User.create(userData)
                .then(user=>{
                    res.send('registered')
                })
                .catch(err=>{
                    res.send('error:'+err)
                })
        }else{
            res.json({error:"user alredy exist"})
        }
    })
    .catch(err=>{
        res.send('error:'+err)
    })
})

//Route For Manager Login
users.post('/login',(req,res)=>{
    console.log(req.body);
    User.findOne({
        where:{
            email:req.body.email
        }
    })
    .then(manager=>{
        if(manager){
            if(req.body.password==manager.password){
                let token=jwt.sign(manager.dataValues,'secret',{
                    expiresIn:1440
                })
                 res.send(token);
            }else{
                res.send('invalid email or password')
            }
        }else{
            res.send("user not exist")
        }
     })
     .catch(err=>{
         res.status(400).json({error:err})
     })
});

//Route FOr Display Employee List
users.get('/employee',(req,res)=>{
        Employee.findAll()
        .then(result=>{
            res.send(result);
        })
        .catch(err=>{
            res.status(400).json     
        })
})

//Route FOr Delete Employee
users.get('/deleteEmp/:emp_id',(req,res)=>{
    Employee.destroy({
        where:{
            emp_id:req.params.emp_id
        }
    })
    .then(result=>{
        res.send("record deletes")
    })
});

//Route FOr Add Employee 
users.post('/addemployee',(req,res)=>{
        const newEmployee={
            emp_firstname:req.body.employee.first_name,
            emp_lastname:req.body.employee.last_name,
            emp_address:req.body.employee.address,
            emp_dob:req.body.employee.dob,
            emp_mobile:req.body.employee.mobile,
            emp_city:req.body.employee.city
        }
        Employee.create(newEmployee)
        .then(result=>{
            res.send('employee Added')
        })
        .catch(err=>{
            res.json({err})
        }) 
})


//Route FOr Update Employee List
users.post('/updateEmployee',(req,res)=>{       
    Employee.update({
      emp_firstname:req.body.employee.emp_firstname,
      emp_lastname:req.body.employee.emp_lastname,
      emp_address:req.body.employee.emp_address,
      emp_dob:req.body.employee.emp_dob,
      emp_mobile:req.body.employee.emp_mobile,
      emp_city:req.body.employee.emp_city
  
    },{
        where:{
          emp_id:req.body.employee.emp_id
        }
    })
    .then(result=>{
        res.send("1 Record Updated Success");
    })
  })




module.exports=users;