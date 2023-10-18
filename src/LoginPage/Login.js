import React from 'react';
import '../LoginPage/Login.css'

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    
  };

  return (
    <div className="container">
      <form action="" id="form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default Login;
