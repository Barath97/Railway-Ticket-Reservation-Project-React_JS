import React, { useState } from 'react';
import '../BookTicket/BookTicket.css';
//import { Navigate } from 'react-router-dom';
import TicketServices from "../services/TicketServices";
import Swal from 'sweetalert2';
import Navbar from '../NavBar/Navbar';


const BookTicket = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: 'Select',
    berthPreference: 'Select',
    trainNumber: 'Select'
  });

  const[formErrors,setFormErrors]=useState({})
  const[isSubmitted,setIsSubmmitted]=useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit =(event) => {
    event.preventDefault();
    console.log(formData);
    setFormErrors(validateForm(formData));
    console.log(formErrors)
    setIsSubmmitted(true);
    console.log(Object.keys(formErrors).length)
    if(Object.keys(formErrors).length===0 && isSubmitted)
    bookTicket(formData);
  };

  const bookTicket=(data)=>{
      TicketServices.create(data)
          .then(response =>{
            console.log(response.status)
            Swal.fire({
              title: 'Booking Confirmed',
              icon:'success',
              showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              },
              footer: '<h2>Enjoy your Travel</h2>'
            })
            setTimeout(() => {
              window.location.reload();
            }, 5000);
          })
          .catch(e =>{
            Swal.fire({
              icon: 'error',
              title: 'Oops... Ticket Full'
            })
            console.log(e.message)
          })
  }

  const validateForm=(formData)=>{
    const errors={}
    if(!formData.name)
      errors.name='Name is required'
    if(!formData.age)
      errors.age='Age id required'
    console.log(formData.gender)
    if(formData.gender==='Select')
      errors.gender='Gender is required'
    if(formData.berthPreference==='Select')
      errors.berthPreference='BerthPreference is required'
    if(formData.trainNumber==='Select')
      errors.trainNumber='Train no is requried'

      return errors;
  }

  return (
    <>
    <Navbar />
    <div className="container"> 
      <form id="form" onSubmit={handleSubmit}>
        <h1>Book Ticket</h1>
        <div className="input-group">
          <label htmlFor="name">Enter Passenger Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
          <b style={{color:'red'}}>{formErrors.name}</b>
        </div>
        <div className="input-group">
          <label htmlFor="age">Age</label>
          <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} />
          <b style={{color:'red'}}>{formErrors.age}</b>
        </div>
        <div className="input-group">
          <label htmlFor="gender">Gender</label>
          <select id="gender" name="gender" value={formData.gender} onChange={handleChange}>
              <option value="Select">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
          </select>
          <b style={{color:'red'}}>{formErrors.gender}</b>
        </div>
        <div className="input-group">
          <label htmlFor="berthPreference">BerthPreference</label>
          <select id="berthPreference" name="berthPreference" value={formData.berthPreference} onChange={handleChange}>
              <option value="Select">Select</option>
              <option value="U">Upper</option>
              <option value="M">Middle</option>
              <option value="L">Lower</option>
          </select>
          <b style={{color:'red'}}>{formErrors.berthPreference}</b>
        </div>
        <div className="input-group">
          <label htmlFor="trainNumber">Train No</label>
          <select id="trainNumber" name="trainNumber" value={formData.trainNo} onChange={handleChange}>
              <option value="Select">Select</option>
              <option value="20232">20232</option>
              <option value="12567">12567</option>
              <option value="76443">76443</option>
          </select>
          <b style={{color:'red'}}>{formErrors.trainNumber}</b>
        </div>
        <button type="submit">Book</button>
      </form>
    </div>
    </>
  );
};

export default BookTicket;
