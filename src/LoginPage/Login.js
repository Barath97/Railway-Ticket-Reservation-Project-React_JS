import React, { useState } from 'react';
import '../LoginPage/Login.css'
import TicketServices from "../services/TicketServices";
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();
  
  const [formData,setFormData] = useState({
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
    setFormErrors(validateForm(formData));
    setIsSubmitted(true);
    console.log(Object.keys(formErrors).length)
    if(Object.keys(formErrors).length===0 && isSubmitted){
      login(formData);
    }
    
}

const login = (data)=>{
    TicketServices.login(data)
      .then(response =>{
        console.log(response.status)
        Swal.fire({
          position: "center",
          icon: "success",
          title: "login Successfully",
          showConfirmButton: false,
          timer: 1500
        }); 
        navigate('/home');
      })
      .catch(e =>{
        Swal.fire({
          icon: 'error',
          title: 'Oops... Invalid User'
        })
        console.log(e.message)
      })
}

const validateForm=(formData)=>{
    const errors={}
    if(!formData.email)
       errors.email='email id required'
    if(!formData.password)
        errors.password='password is required'
      return errors;
  }


  return (
    <div className="container">
      <form action="" id="form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}/>
          <b style={{color:'red'}}>{formErrors.email}</b>
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
          <b style={{color:'red'}}>{formErrors.password}</b>
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default Login;
