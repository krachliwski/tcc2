import React, { useState } from 'react';
import './incoming.css';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import Timer from '../../components/Timer/timer.js';

export default function Incoming() {
    const navigate = useNavigate();
    const [start, setStart] = useState(true);
    const [stop, setStop] = useState(false);
    const [pay, setPay] = useState(false);

    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(true);
    const [time, setTime] = useState(0);

    React.useEffect(() => {
        let interval = null;

        if (isActive && isPaused === false) {
            interval = setInterval(() => {
                setTime((time) => time + 10);
            }, 10);
        } else {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    }, [isActive, isPaused]);

    const timerStart = () => {
        setIsActive(true);
        setIsPaused(false);
    };

    const timerStop = () => {
        setIsActive(false);
        setIsPaused(true);
    };

    const ToPayment = () => {
        navigate('/payment');
        setTime(0);
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
        { handleStart() }
        { timerStart() }
    };

    const paraTempo = (stat) => {
        Axios.post("http://localhost:3001/paraTempo", {
            stat: 'Z',
        }).then((response) => {
            console.log(response.data)
        });
        { handleStop() }
        { timerStop() }
    };

    const liberaVaga = (stat) => {
        Axios.post("http://localhost:3001/liberaVaga", {
            stat: 'Z',
        }).then((response) => {
            console.log(response.data)
        });
        { ToPayment() }
    };

    return (
        <div className='container-incoming'>
            <div className='border-incoming'>
                <h3>Bem-Vindo ao atendimento virtual!</h3>
                <div className="tabela-precos">
                    <table class="darkTable">
                        <thead>
                            <tr>
                                <th>Tabela de Preços</th>
                                <th>Valor</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Menos de 10 Minutos</td><td>Gratuito</td></tr>
                            <tr>
                                <td>De 10 à 30 Minutos</td><td>R$5,00</td></tr>
                            <tr>
                                <td>De 30 Minutos à 1 Hora</td><td>R$10,00</td></tr>
                            <tr>
                                <td>De 1 Hora à 3 Horas</td><td>R$15,00</td></tr>
                            <tr>
                                <td>Mais de 3 Horas</td><td>R$20,00</td></tr>
                        </tbody>
                    </table>
                </div>
                <h3>VAGA 01</h3>
                {start && (
                    <button class='btn' onClick={iniciaTempo}>INICIAR TEMPO</button>
                )}
                {stop && (
                    <>
                        <Timer time={time} />
                        <button class='btn' onClick={paraTempo}>PARAR TEMPO</button>
                    </>
                )}
                {pay && (
                    <>
                        <Timer time={time} />
                        <button class='btn' onClick={liberaVaga}>PAGAMENTO</button>
                    </>
                )}
            </div>
        </div>
    );
}
