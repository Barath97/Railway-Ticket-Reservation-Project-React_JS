  import React, { useState } from 'react';
import './Register.css';
import TicketServices from "../services/TicketServices";
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import '../HomePage/Home.js';
import { Link } from 'react-router-dom';


const Register = () => {

  const navigate = useNavigate();

    const [formData,setFormData] = useState({
        userName:'',
        email:'',
        password:''
    });

    const[formErrors,setFormErrors]=useState({});
    const[isSubmitted,setIsSubmitted]=useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      };

    const handleSubmit =(event) =>{
        event.preventDefault();
        console.log(formData);
        setFormErrors(validateForm(formData));
        console.log(formErrors)
        setIsSubmitted(true);
        console.log(Object.keys(formErrors).length)
        if(Object.keys(formErrors).length===0 && isSubmitted)
        register(formData);
    }

    const register = (data)=>{
        TicketServices.register(data)
          .then(response =>{
            console.log(response.status)
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Register Successfully",
              showConfirmButton: false,
              timer: 1500
            }); 
            navigate('/home');
          })
          .catch(e =>{
            Swal.fire({
              icon: 'error',
              title: 'Oops... Error occured'
            })
            console.log(e.message)
          })
    }

    const validateForm=(formData)=>{
        const errors={}
        if(!formData.userName)
           errors.userName='userName is required'
        if(!formData.email)
           errors.email='email id required'
        if(!formData.password)
            errors.password='password is required'
          return errors;
      }
    
    return (
        <>
            <div className="container">
                <form action="" id="form" onSubmit={handleSubmit}>
                    <h1>Sign Up</h1>
                    <div className="input-group">
                        <label htmlFor="userName">Username</label>
                        <input type="text" id="userName" name="userName" value={formData.userName} onChange={handleChange}/>
                        <b style={{color:'red'}}>{formErrors.userName}</b>
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
                        <b style={{color:'red'}}>{formErrors.email}</b>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
                        <b style={{color:'red'}}>{formErrors.password}</b>
                    </div>
                    <button type="submit">Register</button>
                    Already registered? <Link to="/login">Sign In</Link>
                </form>
            </div>
        </>
    );
}

export default Register;
