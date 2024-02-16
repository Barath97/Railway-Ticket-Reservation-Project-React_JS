import React from 'react';
import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import BookTicket from './BookTicket/BookTicket';
import CancelTicket from './CancelTicket/CancelTicket';
import Home from './HomePage/Home';
import AboutUs from './AboutUs/AboutUs';
import Register from './RegisterPage/Register';
import Login from './LoginPage/Login';
import RouteMap from './routeMap/RouteMap';

 


function App() {
  return (
    <div>
      <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/Register" element={<Register/>}></Route>
                    <Route path="/login" element={<Login/>}></Route>
                    <Route path="/home" element={<Home/>}></Route>
                    <Route path="/bookTicket" element={<BookTicket/>}></Route>
                    <Route path="/cancelTicket" element={<CancelTicket/>}></Route>
                    <Route path="/aboutUs" element={<AboutUs/>}></Route>
                    <Route path="/routeMap" element={<RouteMap/>}></Route>
                </Routes>
            </div>
          </BrowserRouter>
    </div>  
  );
}

export default App;
