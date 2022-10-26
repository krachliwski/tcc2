import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import GenerateQRCode from './pages/QRCode';
import Parking from './pages/Parking';
import Error from './pages/Error';
import Login from './pages/Login';

function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/aboutUs" element={<AboutUs />} />
                <Route path="/generateQRCode" element={<GenerateQRCode />} />
                <Route path="/parking" element={<Parking />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;


//------------------------------------------------------------------------------------------------------
/*
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'qwe123',
    database: 'estacionamento'
});

const app = express();

app.get('/usuario', function (req, res) {
    connection.getConnection(function (err, connection) {
        connection.query('SELECT * FROM usuario', function (error, results, fields) {
            res.send(results)
        });
    });
});

// Iniciando o servidor.
app.listen(3000, () => {
    console.log('http://localhost:3000/usuario');
});

export default RoutesApp;
*/