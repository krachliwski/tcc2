import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Parking from './pages/Parking';
import ParkingAdm from './pages/ParkingAdm';
import Error from './pages/Error';
import Login from './pages/Login';
import Signin from './pages/Signin';
import Payment from './pages/Payment';
import Incoming from './pages/Incoming';
import Usuario from './pages/User';
import AltUsu from './pages/UserAlt';
import AltSenhaUsu from './pages/UserSenha';
import Empresas from './pages/Empresas';
import AlteraEmpresas from './pages/AlteraEmpresa';
import CadastrarUsuario from './pages/UserCad';

function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/parking" element={<Parking />} />
                <Route path="/parkingAdm" element={<ParkingAdm />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/incoming" element={<Incoming />} />
                <Route path="/User" element={<Usuario />} />
                <Route path="/UserAlt" element={<AltUsu />} />
                <Route path="/UserSenha" element={<AltSenhaUsu />} />
                <Route path="/Empre" element={<Empresas />} />
                <Route path="/alterEmp" element={<AlteraEmpresas />} />
                <Route path="/UserCad" element={<CadastrarUsuario />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;
