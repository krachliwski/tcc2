import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Parking from './pages/Parking';
import Parking2 from './pages/ParkingAdm';
import Error from './pages/Error';
import Login from './pages/Login';
import Signin from './pages/Signin';
import Payment from './pages/Payment';
import Incoming from './pages/Incoming';

function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/aboutUs" element={<AboutUs />} />
                <Route path="/parking" element={<Parking />} />
                <Route path="/parking2" element={<Parking2 />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/incoming" element={<Incoming />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;
