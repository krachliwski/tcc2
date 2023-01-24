import React, { useState } from 'react';
import './payment.css';
import PIX from "react-qrcode-pix";
import geraExtrato from '../../components/Functions/extrato';
import Axios from 'axios';
import swal from 'sweetalert2';

const now = new Date().getTime().toString();

var codigo = "";
var Perm = '';
var ValorPagar = Valor;
var Valor = 0;
var Bloco = '';
var Vaga = '';
var DataE = '';
var HoraE = '';
var DataS = '';
var HoraS = '';

export default function PaymentArea() {
    const [generate, setGenerate] = useState(false);

    const handleGenerate = () => {
        setGenerate(true);
    }

    const [fullPIX, setFullPIX] = useState("");

    const permanencia = () => {
        Axios.post("http://localhost:3001/permanencia", {
        }).then((response) => {

            Perm = response.data[0].permanencia;
        });
    };

    const calculaValor = () => {
        Axios.post("http://localhost:3001/calculaTempo", {
        }).then((response) => {
            codigo = response.data[0].TEMPO;

            if (codigo == "0") {
                ValorPagar = 0;
                {naoPaga()}
            } else if (codigo == "1") {
                ValorPagar = 5;
                {Paga()}
            } else if (codigo == "2") {
                ValorPagar = 10;
                {Paga()}
            } else if (codigo == "3") {
                ValorPagar = 15;
                {Paga()}
            } else {
                ValorPagar = 20;
                {Paga()}
            }
        });
        { handleGenerate() }
    }

    const dadosExtrato = () => {
        Axios.post("http://localhost:3001/dadosExtrato", {
        }).then((response) => {

            Bloco = response.data[0].bloco;
            Vaga = response.data[0].codigo;
            DataE = response.data[0].data_chegada;
            HoraE = response.data[0].hora_chegada;
            DataS = response.data[0].data_saida;
            HoraS = response.data[0].hora_saida;
        });
        { permanencia() }
    };

    { dadosExtrato() }

    const chamaExtrato = () => {
        const res = geraExtrato(Bloco, Vaga, DataE, HoraE, DataS, HoraS, ValorPagar, Perm);
    }

    const naoPaga = () => {
        swal.fire({
            icon: 'info',
            title: "Permanência Gratuita!",
            text: 'Permanência: ' + Perm,
            confirmButtonText: 'OK'
        });
    }

    const Paga = () => {
        swal.fire({
            icon: 'info',
            title: 'Valor a Pagar: R$' + ValorPagar,
            text: 'Permanência: ' + Perm,
            confirmButtonText: 'OK'
        });
    }

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
                                <button class="btn" onClick={calculaValor}>GERAR QRCODE</button>
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
                                        amount={ValorPagar}
                                        onLoad={setFullPIX}
                                        resize={280}
                                        padding={30}
                                    />
                                </div>
                                <button button class='btn' onClick={chamaExtrato}>GERAR EXTRATO</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
