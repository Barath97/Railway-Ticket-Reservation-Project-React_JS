import React from 'react';
import './Register.css';

const Register = () => {
    return (
        <>
            <div className="container">
                <form action="" id="form">
                    <h1>Sign Up</h1>
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="cpassword">Confirm Password</label>
                        <input type="password" id="cpassword" name="cpassword" />
                    </div>
                    <button type="submit">Register</button>
                    Already registered? <a href="../Html/login.html">Sign In</a>
                </form>
            </div>
        </>
    );
}

export default Register;
