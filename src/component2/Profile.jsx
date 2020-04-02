import React,{ useState,useEffect } from 'react';
import axios from 'axios';
import Popup from "reactjs-popup";
import './Popup.css';
import jwt_decode from 'jwt-decode';



function Profile(props){
    const [manager,setManager]=useState({manager_id:'',first_name:'',last_name:'',email:''});
    const [employee,setEmployee]=useState({emp_id:'',emp_firstname:'',last_name:'',address:'',dob:'',mobile:'',city:''})

    useEffect(()=>{
        const token=localStorage.usertoken;
         if(token){
            const decode=jwt_decode(token)
            setManager({
                manager_id:decode.manager_id,
                first_name:decode.first_name,
                last_name:decode.last_name,
                email:decode.email
            });
            axios.get('http://localhost:4500/employee')
             .then(res=>{
                 setEmployee(res.data)
             })
        }else{
            props.history.push('/')
        }  
    },[]);

    //submit Route for add new employee
    const submit=()=>{
        axios.post('http://localhost:4500/addemployee',{employee:employee})
        .then(res=>{
            alert(res.data);
        })
    }

    //Update data On state Index
    const updateData=(e,id)=>{
        const array=[...employee]
        array[id][e.target.name]=e.target.value
        setEmployee(array);
    }

    //Upadate Route
    const onUpdate=(e,id)=>{
        axios.post(`http://localhost:4500/updateEmployee`,{employee:employee[id]})
        .then(res=>{
            alert(res.data);
        })
    }

    //Delete Record Route
    const deletedata=(emp_id)=>{
        let conf= window.confirm("You want to delete This record");
        if(conf==true){
             axios.get(`http://localhost:4500/deleteEmp/${emp_id}`)
             .then(res=>{
                 alert(res.data);
             })
         }
     }
    
   
    return(
        <div className="container">
           <div >
                <Popup trigger={<button className="btn btn-primary">Add Employee</button>} modal>
                        <div className="container">
                            <div class="card">
                                <div className="card-header">
                                    Add Employee
                                </div>
                                <div class="card-body">
                                <form onSubmit={submit}>
                                    <div class="form-group">
                                        <label for="email">First Name</label>
                                            <input type="text"
                                            className="form-control a" 
                                            name="first_name" 
                                            value={employee.first_name}  
                                            onChange={(e)=>setEmployee({...employee,[e.target.name]: e.target.value})}
                                            required
                                            />
                                    </div>
                                    <div class="form-group">
                                        <label for="email">Last Name</label>
                                            <input type="text"
                                            className="form-control a" 
                                            name="last_name" 
                                            value={employee.last_name}  
                                            onChange={(e)=>setEmployee({...employee,[e.target.name]: e.target.value})}
                                            required
                                            />
                                    </div>  
                                    <div class="form-group">
                                        <label for="email">Address</label>
                                            <input type="text"
                                            className="form-control a" 
                                            name="address" 
                                            value={employee.address}  
                                            onChange={(e)=>setEmployee({...employee,[e.target.name]: e.target.value})}
                                            required
                                            />
                                    </div>
                                    <div class="form-group">
                                        <label for="email">DOB</label>
                                            <input type="date"
                                            className="form-control a" 
                                            name="DOB" 
                                            value={employee.date}  
                                            onChange={(e)=>setEmployee({...employee,[e.target.name]: e.target.value})}
                                            required
                                            />
                                    </div>
                                    <div class="form-group">
                                        <label for="email">mobile</label>
                                            <input type="text"
                                            className="form-control a" 
                                            name="mobile" 
                                            value={employee.mobile}  
                                            onChange={(e)=>setEmployee({...employee,[e.target.name]: e.target.value})}
                                            required
                                            />
                                    </div>
                                    <div class="form-group">
                                        <label for="email">City</label>
                                            <input type="text"
                                            className="form-control a" 
                                            name="city" 
                                            value={employee.city}  
                                            onChange={(e)=>setEmployee({...employee,[e.target.name]: e.target.value})}
                                            required
                                            />
                                    </div>
                                    <button type='submit' className="btn btn-primary">Add Employee</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </Popup>
                 </div>
                 <table className='table'>
                    <thead>
                        <tr>
                            <th>Employee Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Address</th>
                            <th>DOB</th>
                            <th>mobile</th>
                            <th>City</th>
                            <th>edit</th>
                        </tr>
                    </thead>
                    <tbody>
                            {
                                employee.length && employee.map((emp,index)=>(
                                    <tr>
                                        <td  key={index}>{emp.emp_id}</td>
                                        <td>{emp.emp_firstname}</td>
                                        <td>{emp.emp_lastname}</td>
                                        <td>{emp.emp_address}</td>
                                        <td>{emp.emp_dob}</td>
                                        <td>{emp.emp_mobile}</td>
                                        <td>{emp.emp_city}</td>
                                        <td>
                                        <Popup trigger={<button className="btn btn-primary">Edit Employee</button>} modal>
                                            <div className="container">
                                                <div class="card">
                                                    <div className="card-header">
                                                        Edit Employee
                                                    </div>
                                                    <div class="card-body">
                                                    <form >
                                                        <div class="form-group ">
                                                            <label for="email">First Name</label>
                                                                <input type="text"
                                                                className="form-control a" 
                                                                name="emp_firstname" 
                                                                value={emp.emp_firstname}  
                                                                onChange={(e)=>updateData(e,index)}
                                                                />
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="email">Last Name</label>
                                                                <input type="text"
                                                                className="form-control a" 
                                                                name="emp_lastname" 
                                                                value={emp.emp_lastname}
                                                                onChange={(e)=>updateData(e,index)}
                                                                required  
                                                                />
                                                        </div>  
                                                        <div class="form-group">
                                                            <label for="email">Address</label>
                                                                <input type="text"
                                                                className="form-control a" 
                                                                name="emp_address" 
                                                                value={emp.emp_address}  
                                                                onChange={(e)=>updateData(e,index)}
                                                                required
                                                                />
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="email">DOB</label>
                                                                <input type="date"
                                                                className="form-control a" 
                                                                name="emp_dob" 
                                                                value={emp.emp_dob}  
                                                                onChange={(e)=>updateData(e,index)}
                                                                required
                                                                />
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="email">mobile</label>
                                                                <input type="text"
                                                                className="form-control a" 
                                                                name="emp_mobile" 
                                                                value={emp.emp_mobile}  
                                                                onChange={(e)=>updateData(e,index)}
                                                                required
                                                                />
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="email">City</label>
                                                                <input type="text"
                                                                className="form-control a" 
                                                                name="city" 
                                                                value={emp.emp_city}  
                                                                onChange={(e)=>updateData(e,index)}
                                                                required
                                                                />
                                                        </div>
                                                        <button className="btn btn-primary" onClick={(e)=>onUpdate(e,index)}>Upadate</button>
                                                        <button className="btn btn-dark" onClick={()=>deletedata(emp.emp_id)} >Delete</button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </Popup>
                                        </td>
                                    </tr>
                                ))
                            }                   
                    </tbody>
                </table>
            </div>   
        )
    }

export default Profile;