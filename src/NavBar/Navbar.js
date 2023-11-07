import React from "react";
import '../NavBar/Navbar.css';
import { Link } from 'react-router-dom';
import image from '../image/MR-logo.png';


const Navbar = () => {
    return (
        <>
            <div>
            <nav>
                    <img className="logoImage" src={image} alt="Logo" width="50px" height="50px" />
                    <div className="logo">
                        <a href="">Maharaja Express</a>
                    </div>
                    <ul className="list">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/bookTicket">BookTicket</Link></li>
                        <li><Link to="/cancelTicket">CancelTicket</Link></li>
                        <li><Link to="/aboutUs">AboutUs</Link></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navbar;