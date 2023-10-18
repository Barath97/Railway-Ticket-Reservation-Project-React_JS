import React from "react";
import '../NavBar/Navbar.css';
import Trainlogo from '../image/log.jpg';

const Navbar = () => {
    return (
        <>
            <div>
                <nav>
                    <img className="logo" src={Trainlogo} alt="Logo" width="50px" height="50px" />
                    <div className="logo">
                        <a href="">American Railways</a>
                    </div>
                    <ul className="list">
                        <li><a href="">Book Ticket</a></li>
                        <li><a href="">Cancel Tickets</a></li>
                        <li><a href="">About Us</a></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navbar;
