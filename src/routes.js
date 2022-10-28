import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import GenerateQRCode from './pages/QRCode';
import Parking from './pages/Parking';
import Error from './pages/Error';
import Login from './pages/Login';
import Signin from './pages/Signin';

function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/aboutUs" element={<AboutUs />} />
                <Route path="/generateQRCode" element={<GenerateQRCode />} />
                <Route path="/parking" element={<Parking />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;
