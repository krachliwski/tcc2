import React, { useState } from 'react';
import './parkingAdm.css';
import Menu from '../../components/Menu/menu';
import Planta from '../../images/Planta.png';
import Free from '../../images/Free.png';
import Ocup from '../../images/Occup.png';
import Indisp from '../../images/Indisp.png';
import { Button } from 'react-bootstrap';
import swal from 'sweetalert';
import Axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

export default function Parking() {
    const handleClickStatus = (values) => {
        Axios.post("http://localhost:3001/status", {
            bloco: values.bloco,
            vaga: values.vaga
        }).then((response) => {
            swal({
                icon: 'info',
                title: response.data,
                mButton: false,
            })
            window.location.href = "/parking2";
            { refreshImg() };
        });
    };

    const validationStatus = yup.object().shape({
        bloco: yup
            .string()
            .required("Campo Obrigatório"),
        vaga: yup
            .string()
            .required("Campo Obrigatório!"),
    });

    const refreshImg = (stat) => {
        Axios.post("http://localhost:3001/mapa", {
            stat: 'Z',
        }).then((response) => {
            if (response.data[5].status == 'O') {
                { Ocupado() }
            } else if (response.data[5].status == 'I') {
                { Indisponivel() }
            } else {
                { Disponivel() }
            }
            //////////////////////////////////////////////////////////////
            if (response.data[4].status == 'O') {
                { Ocupado2() }
            } else if (response.data[4].status == 'I') {
                { Indisponivel2() }
            } else {
                { Disponivel2() }
            }
            //////////////////////////////////////////////////////////////
            if (response.data[3].status == 'O') {
                { Ocupado3() }
            } else if (response.data[3].status == 'I') {
                { Indisponivel3() }
            } else {
                { Disponivel3() }
            }
            //////////////////////////////////////////////////////////////
            if (response.data[0].status == 'O') {
                { Ocupado4() }
            } else if (response.data[0].status == 'I') {
                { Indisponivel4() }
            } else {
                { Disponivel4() }
            }
        });
    };

    const [dis, setDisp] = useState(false);

    const Disponivel = () => {
        setDisp(true);
        setIndisp(false);
        setOcup(false);
    };

    const [indis, setIndisp] = useState(false);

    const Indisponivel = () => {
        setIndisp(true);
        setDisp(false);
        setOcup(false);
    };

    const [ocupp, setOcup] = useState(false);

    const Ocupado = () => {
        setOcup(true);
        setDisp(false);
        setIndisp(false);
    };

    //////////////////////////////////////////////////////////

    const [dis2, setDisp2] = useState(false);

    const Disponivel2 = () => {
        setDisp2(true);
        setIndisp2(false);
        setOcup2(false);
    };

    const [indis2, setIndisp2] = useState(false);

    const Indisponivel2 = () => {
        setIndisp2(true);
        setDisp2(false);
        setOcup2(false);
    };

    const [ocupp2, setOcup2] = useState(false);

    const Ocupado2 = () => {
        setOcup2(true);
        setDisp2(false);
        setIndisp2(false);
    };

    //////////////////////////////////////////////////////////

    const [dis3, setDisp3] = useState(false);

    const Disponivel3 = () => {
        setDisp3(true);
        setIndisp3(false);
        setOcup3(false);
    };

    const [indis3, setIndisp3] = useState(false);

    const Indisponivel3 = () => {
        setIndisp3(true);
        setDisp3(false);
        setOcup3(false);
    };

    const [ocupp3, setOcup3] = useState(false);

    const Ocupado3 = () => {
        setOcup3(true);
        setDisp3(false);
        setIndisp3(false);
    };

    //////////////////////////////////////////////////////////

    const [dis4, setDisp4] = useState(false);

    const Disponivel4 = () => {
        setDisp4(true);
        setIndisp4(false);
        setOcup4(false);
    };

    const [indis4, setIndisp4] = useState(false);

    const Indisponivel4 = () => {
        setIndisp4(true);
        setDisp4(false);
        setOcup4(false);
    };

    const [ocupp4, setOcup4] = useState(false);

    const Ocupado4 = () => {
        setOcup4(true);
        setDisp4(false);
        setIndisp4(false);
    };

    const ocup = <img src={Ocup} alt="Ocup" width="20" height="25" />;
    const disp = <img src={Free} alt="Free" width="20" height="25" />;
    const indisp = <img src={Indisp} alt="Indisp" width="20" height="25" />;

    return (
        <div class="main">
            <Menu />
            <div class="div-h1">
                <h1>Estacionamento - Administração</h1>
                <div id="Legenda">
                    <a><img alt="Free" src={Free} width="28" height="40" />  Vaga Livre</a>
                    <a><img alt="Ocup" src={Ocup} width="28" height="40" />  Vaga Ocupada</a>
                    <a><img alt="Indisp" src={Indisp} width="28" height="40" />  Vaga Indisponível</a>
                </div>
                <>
                    {refreshImg()}
                </>
                <div id="Planta" style={{ backgroundImage: `url(${Planta})` }}>
                    <button id="A61a" className="spots">
                        {dis4 && (
                            disp
                        )}
                        {indis4 && (
                            indisp
                        )}
                        {ocupp4 && (
                            ocup
                        )}
                    </button>
                    <button id="A62a" className="spots">
                        {ocup}
                    </button>
                    <button id="A63a" className="spots">
                        {ocup}
                    </button>
                    <button id="A64a" className="spots">
                        {dis3 && (
                            disp
                        )}
                        {indis3 && (
                            indisp
                        )}
                        {ocupp3 && (
                            ocup
                        )}
                    </button>
                    <button id="A65a" className="spots">
                        {dis2 && (
                            disp
                        )}
                        {indis2 && (
                            indisp
                        )}
                        {ocupp2 && (
                            ocup
                        )}
                    </button>
                    <button id="A66a" className="spots">
                        {dis && (
                            disp
                        )}
                        {indis && (
                            indisp
                        )}
                        {ocupp && (
                            ocup
                        )}
                    </button>
                </div>
                <div className="Stat-box">
                    <h3>Alterar Vaga</h3>
                    <Formik initialValues={{}} onSubmit={handleClickStatus} validationSchema={validationStatus}>
                        <Form name="formStatus" method="post" data-parsley-validate="">
                            <div>
                                <div>
                                    <label for="login">Bloco:</label>
                                    <Field type="text" name="bloco" id="bloco" class="form-control" />
                                    <ErrorMessage component="span" name="bloco" className="form-erro" />
                                </div>
                                <div>
                                    <label for="senha">Vaga:</label>
                                    <Field type="number" name="vaga" id="vaga" class="form-control" min="61" max="66" />
                                    <ErrorMessage component="span" name="vaga" className="form-erro" />
                                </div>
                            </div>
                            <br />
                            <Button type="submit">Alterar</Button>
                        </Form>
                    </Formik>
                    <br />
                    <Button onClick={() => {
                        swal({
                            title: "Quer mesmo sair?",
                            icon: "warning",
                            buttons: true,
                            dangerMode: true,
                        })
                            .then((willDelete) => {
                                if (willDelete) {
                                    window.location.href = "/";
                                } else {
                                    swal("Cancelado", {
                                        icon: "error"
                                    });
                                }
                            });
                    }}>Sair</Button>
                </div>
            </div>
        </div>
    )
}
