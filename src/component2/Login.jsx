import React,{ useState } from 'react';
import {loginUser} from './ManagerFunction';
import './Login.css';

function Login(props){
    const [login,setLogin]=useState({email:'',password:''});
     
    //submit 
    const submit=(e)=>{
        e.preventDefault()
        loginUser(login).then(res=>{
            alert(res);
            const token=localStorage.usertoken;
            if(token){
                props.history.push('/profile')
            }else{
                props.history.push('/')
            }
        })
    }
    return(
        <div className="container ">
                <div className="row login">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form onSubmit={submit}>
                            <h1 className="h3 mb3 font weight-normal">Please Log-in</h1>
                            <small>Managers Log-In Only</small>
                            <br/>
                            <div className="form-group">
                                <label htmlFor="email">Email</label> 
                                <input type="email"
                                className="form-control"
                                name="email"
                                placeholder="Enter Email"
                                value={login.email}
                                onChange={(e)=>setLogin({...login,email:e.target.value})}
                                required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Password">Password</label>
                                <input type="password"
                                className="form-control"
                                name="password"
                                placeholder="Enter password"
                                value={login.password}
                                onChange={(e)=>setLogin({...login,password:e.target.value})}
                                required
                                />
                            </div>
                            <button type='submit' className="vtn btn-lg btn-primary btn-block">
                                Log-In
                            </button>
                        </form>
                    </div>                    
                </div>
            </div>
    )
}

export default Login;