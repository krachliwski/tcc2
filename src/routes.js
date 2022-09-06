import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import GenerateQRCode from './pages/QRCode';
import Error from './pages/Error';

function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/aboutUs" element={<AboutUs />} />
                <Route path="/generateQRCode" element={<GenerateQRCode />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;