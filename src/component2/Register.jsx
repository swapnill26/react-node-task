import React from 'react';
import { useState } from 'react';
import {register} from './ManagerFunction'
import './Register.css'

function Register(props){
    const [userRegister,setRegister]=useState({first_name:'',last_name:'',email:'',password:'',address:'',dob:'',company:''});
    
   const Submit=e=>{
        e.preventDefault()
        register(userRegister).then(res=>{
            if(res){
                props.history.push('/')
            }
        })
    }
       
    return(
        <div className="container">
                <div className="row register">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form onSubmit={Submit}>
                            <h1 className="h3 mb3 font weight-normal">Please Sign Up</h1>
                            <div className="form-group">
                                <label htmlFor="email">First Name</label>
                                <input type="text"
                                className="form-control"
                                name="first_name"
                                placeholder="Enter first Name"
                                value={register.first_name}
                                onChange={e=>setRegister({...userRegister,[e.target.name]:e.target.value})}
                                required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Last Name</label>
                                <input type="text"
                                className="form-control"
                                name="last_name"
                                placeholder="Enter Last Name"
                                value={register.last_name}
                                onChange={e=>setRegister({...userRegister,[e.target.name]:e.target.value})}
                                required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email"
                                className="form-control"
                                name="email"
                                placeholder="Enter Email"
                                value={register.email}
                                onChange={e=>setRegister({...userRegister,[e.target.name]:e.target.value})}
                                required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Password">Password</label>
                                <input type="password"
                                className="form-control"
                                name="password"
                                placeholder="Enter password"
                                value={register.password}
                                onChange={e=>setRegister({...userRegister,[e.target.name]:e.target.value})}
                                required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="address">Address</label>
                                <input type="text"
                                className="form-control"
                                name="address"
                                placeholder="Enter Address"
                                value={register.address}
                                onChange={e=>setRegister({...userRegister,[e.target.name]:e.target.value})}
                                required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="dob">DOB</label>
                                <input type="date"
                                className="form-control"
                                name="dob"
                                placeholder="Enter DOB"
                                value={register.dob}
                                onChange={e=>setRegister({...userRegister,[e.target.name]:e.target.value})}
                                required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="company">Company</label>
                                <input type="text"
                                className="form-control"
                                name="company"
                                placeholder="Enter Company"
                                value={register.company}
                                onChange={e=>setRegister({...userRegister,[e.target.name]:e.target.value})}
                                required
                                />
                            </div>
                            <button type='submit'  className="vtn btn-lg btn-primary btn-block">
                                Register
                            </button>
                        </form>
                    </div>                    
                </div>
        </div>
        )
}

export default Register;