import React, { useState } from 'react';
import './payment.css';
import PIX from "react-qrcode-pix";
import geraExtrato from '../../components/Functions/extrato';
import Axios from 'axios';
//import { response } from 'express';

const now = new Date().getTime().toString();

export default function PaymentArea() {
    const [generate, setGenerate] = useState(false);

    const handleGenerate = () => {
        setGenerate(true);
    }

    const [fullPIX, setFullPIX] = useState("");

    const calculaTempo = () => {
        Axios.post("http://localhost:3001/calculaTempo", {
        }).then((response) => {
            console.log(response.data)
        });
        {handleGenerate()}
    };

    return (
        <>
            <div className='container-payment'>
                <div className='border-payment'>
                    <div className='payment-title'>
                        <h3>Bem-vindo ao pagamento automatizado</h3>
                    </div>

                    <div className='payment-body'>
                        {!generate && (
                            <div className='payment-title'>
                                <span>Ao clicar no botão abaixo será gerado o QRCode para pagamento por Pix</span>
                                <br />
                                <button class="btn-parking" onClick={calculaTempo}>GERAR QRCODE</button>
                            </div>
                        )}

                        {generate && (
                            <div className='qrcode-area'>
                                <span>Escaneie o QRCode abaixo no aplicativo de seu banco para realizar o pagamento por Pix</span>
                                <div className='qrcode'>
                                    <PIX
                                        pixkey="prkrachliwski10@gmail.com"
                                        merchant="Paulo Ricardo Krachliwski"
                                        city="Campo Mourão"
                                        cep="87.308-510"
                                        code={"RQP" + now}
                                        amount={25}
                                        onLoad={setFullPIX}
                                        resize={280}
                                        padding={30}
                                    />
                                </div>
                                <button button class='btn-parking' onClick={geraExtrato}>GERAR PDF</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
