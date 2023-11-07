import React from "react";
import "../CancelTicket/CancelTicket.css"
import TicketServices from '../services/TicketServices';
import { useState } from "react";
import Swal from "sweetalert2";
import Navbar from "../NavBar/Navbar";

const CancelTicket = () => {
  const [formData, setFormData] = useState({
    id: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  const cancelTicket = (data) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to cancel the ticket",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await TicketServices.deleteId(data);
          Swal.fire(
            'Cancel successful!',
            'Your ticket has been Cancelled.',
            'success'
          );
        } catch (error) {
          Swal.fire({
            icon: 'warning',
            title: 'Oops... Invalid Ticket ID',
            footer: '<h2>Enter a valid Ticket ID</h2>'
          });
          console.log(error.message);
        }
      }
    });
  }
  

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors(validateForm(formData));
    setIsSubmitted(true);
    if (Object.keys(formErrors).length === 0 && isSubmitted) {
      cancelTicket(formData);
    }
  };

  const validateForm = (formData) => {
    const errors = {};

    if (!formData.id) {
      errors.id = 'Ticket ID is required';
    }

    return errors;
  }

  return (
    <>
      <Navbar />
      <div className="container">
      <form id="form" onSubmit={handleSubmit}>
        <h1>Cancel Ticket</h1>
        <div className="input-group">
          <label htmlFor="id">Ticket ID</label>
          <input type="number" id="id" name="id" value={formData.id} onChange={handleChange} />
          <b style={{ color: 'red' }}>{formErrors.id}</b>
        </div>
        {/* <div className="input-group">
          <label htmlFor="reason">Reason for Cancellation</label>
          <input type="text" id="reason" name="reason" value={formData.reason} onChange={handleChange} />
        </div> */}
        <button type="submit">Cancel</button>
      </form>
    </div>
    </>
    
  );
};


export default CancelTicket;
