import axios from 'axios';


//Add Manager Route
export const register=newUser=>{
    return(
        axios.post('http://localhost:4500/register',{
            first_name:newUser.first_name,
            last_name:newUser.last_name,
            email:newUser.email,
            password:newUser.password,
            address:newUser.address,
            dob:newUser.dob,
            company:newUser.company
        })
        .then(res=>{
            return res
            // alert(res.data);
        })
    )
}

//Login Route
export const loginUser=user=>{
    return(
        axios.post('http://localhost:4500/login',{
            email:user.email,
            password:user.password
        })
        .then(res=>{
            localStorage.setItem("usertoken",res.data)
            return res.data
        })
        .catch(err=>{
            console.log(err)
        })
    )
}

//Add employee route
export const addEmployee=newEmployee=>{
    return(
        axios.post('http://localhost:4500/addEmployee',{
            first_name:newEmployee.first_name,
            last_name:newEmployee.last_name,
            email:newEmployee.email,
            address:newEmployee.address,
            dob:newEmployee.dob,
            mobile:newEmployee.mobile,
            city:newEmployee.city
        })
        .then(res=>{
            return res.data
        })
    )
}