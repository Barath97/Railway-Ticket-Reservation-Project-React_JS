import React from 'react';
import '../CancelTicket/CancelTicket.css';

const CancelTicket = () => {

  const handleSubmit = (event) => {
    event.preventDefault();  
    console.log('Ticket cancelled!');
  };

  return (
    <div className="container"> 
      <form id="form" onSubmit={handleSubmit}>
        <h1>Cancel Ticket</h1>
        <div className="input-group">
          <label htmlFor="bookingId">Booking ID</label>
          <input type="text" id="bookingId" name="bookingId" required/>
        </div>
        <div className="input-group">
          <label htmlFor="reason">Reason for Cancellation</label>
          <input type="text" id="reason" name="reason" />
        </div>
        <button type="submit">Cancel</button>
      </form>
    </div>
  );
};

export default CancelTicket;
