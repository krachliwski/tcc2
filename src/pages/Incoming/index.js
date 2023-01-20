import React, { useState } from 'react';
import './incoming.css';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

export default function Incoming() {
    const navigate = useNavigate();
    const [start, setStart] = useState(true);
    const [stop, setStop ] = useState(false);
    const [pay, setPay ] = useState(false);

    const ToPayment = () => {
        navigate('/payment');
    };

    const handleStart = () => {
        setStart(false);
        setStop(true);
    };

    const handleStop = () => {
        setStop(false);
        setPay(true);
    };

    const iniciaTempo = (stat) => {
        Axios.post("http://localhost:3001/iniciaTempo", {
            stat: 'Z',
        }).then((response) => {
            console.log(response.data)
        });
        {handleStart()}
    };
    
    const paraTempo = (stat) => {
        Axios.post("http://localhost:3001/paraTempo", {
            stat: 'Z',
        }).then((response) => {
            console.log(response.data)
        });
        {handleStop()}
    };

    const liberaVaga = (stat) => {
        Axios.post("http://localhost:3001/liberaVaga", {
            stat: 'Z',
        }).then((response) => {
            console.log(response.data)
        });
        {ToPayment()}
    };

    return (
        <div className='container-incoming'>
            <div className='border-incoming'>
                <h3>Bem-Vindo ao atendimento virtual!</h3>
                <h3>VAGA 01</h3>
                {start && (
                    <button class='btn' onClick={iniciaTempo}>INICIAR TEMPO</button>
                )}
                {stop && (
                    <button class='btn' onClick={paraTempo}>PARAR TEMPO</button>
                )}
                {pay && (
                    <button class='btn' onClick={liberaVaga}>PAGAMENTO</button>
                )}
            </div>
        </div>
    );
}
