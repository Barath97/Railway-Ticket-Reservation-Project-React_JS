import React, { useState } from 'react';
import '../BookTicket/BookTicket.css';

const BookTicket = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    berthPreference: '',
    trainNo: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <div className="container"> 
      <form id="form" onSubmit={handleSubmit}>
        <h1>Book Ticket</h1>
        <div className="input-group">
          <label htmlFor="name">Enter Passenger Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="input-group">
          <label htmlFor="age">Age</label>
          <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} />
        </div>
        <div className="input-group">
          <label htmlFor="gender">Gender</label>
          <input type="text" id="gender" name="gender" value={formData.gender} onChange={handleChange} />
        </div>
        <div className="input-group">
          <label htmlFor="berthPreference">BerthPreference</label>
          <input type="text" id="berthPreference" name="berthPreference" value={formData.berthPreference} onChange={handleChange} />
        </div>
        <div className="input-group">
          <label htmlFor="trainNo">Train No</label>
          <input type="number" id="trainNo" name="trainNo" value={formData.trainNo} onChange={handleChange} />
        </div>
        <button type="submit">Book</button>
      </form>
    </div>
  );
};

export default BookTicket;
