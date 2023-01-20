import React, { useState, useEffect } from 'react';
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
import Card from "../../components/Cards/card";
import Footer from '../Footer/index.js';

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
            window.location.href = "/parkingAdm";
            { refreshImg() };
        });
    };

    const handleClickVaga = (values) => {
        Axios.post("http://localhost:3001/vaga", {
            bloco: values.bloco,
            vaga: values.vaga
        }).then((response) => {
            swal({
                icon: 'info',
                title: response.data,
                mButton: false,
            })
            window.location.href = "/parkingAdm";
            { refreshImg() };
        });
    };

    const handleClickExcluiVaga = (values) => {
        Axios.post("http://localhost:3001/excluivaga", {
            bloco: values.bloco,
            vaga: values.vaga
        }).then((response) => {
            swal({
                icon: 'info',
                title: response.data,
                mButton: false,
            })
            window.location.href = "/parkingAdm";
            { refreshImg() };
        });
    };
    console.log(listVagas);
    const [listVagas, setListVagas] = useState();

    useEffect(() => {
        Axios.get("http://localhost:3001/getCards").then((response) => {
            setListVagas(response.data);
        })
    }, [])

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
                    <a><a className='disponivel'></a>  Vaga Livre</a>
                    <a><a className='ocupado'></a>  Vaga Ocupada</a>
                    <a><a className='indisponivel'></a>  Vaga Indisponível</a>
                </div>
                <div id="NomeBloco">
                    <a>Bloco A</a>
                </div>
                <>
                    {refreshImg()}
                </>
                <div id="Planta" /*style={{backgroundImage: `url(${Planta})` }}*/ style={{ backgroundColor: `#161A25` }}>
                    <div className='parent'>
                        {typeof listVagas !== "undefined" && listVagas.map((value) => {
                            return (
                                <Card
                                    key={value.codigo}
                                    listCard={listVagas}
                                    setListVagas={setListVagas}
                                    codigo={value.codigo}
                                    status={value.status}
                                ></Card>);
                        })}
                    </div>
                </div>
                <div className='parent2'>
                    <div className="Stat-box">
                        <h3>Alterar Vaga</h3>
                        <Formik initialValues={{}} onSubmit={handleClickStatus} validationSchema={validationStatus}>
                            <Form name="formStatus" method="post" data-parsley-validate="">
                                <div>
                                    <div>
                                        <h6 for="login">Bloco:</h6>
                                        <Field type="text" name="bloco" id="bloco" class="form-control" />
                                        <ErrorMessage component="span" name="bloco" className="form-erro" />
                                    </div>
                                    <div>
                                        <h6 for="senha">Vaga:</h6>
                                        <Field type="number" name="vaga" id="vaga" class="form-control" min="01" max="50" />
                                        <ErrorMessage component="span" name="vaga" className="form-erro" />
                                    </div>
                                </div>
                                <br />
                                <Button type="submit">Alterar</Button>
                            </Form>
                        </Formik>
                    </div>
                    <div className="Stat-box">
                        <h3>Cadastro de Vaga</h3>
                        <Formik initialValues={{}} onSubmit={handleClickVaga} validationSchema={validationStatus}>
                            <Form name="formStatus" method="post" data-parsley-validate="">
                                <div>
                                    <div>
                                        <h6 for="login">Bloco:</h6>
                                        <Field type="text" name="bloco" id="bloco" class="form-control" />
                                        <ErrorMessage component="span" name="bloco" className="form-erro" />
                                    </div>
                                    <div>
                                        <h6 for="senha">Vaga:</h6>
                                        <Field type="number" name="vaga" id="vaga" class="form-control" min="01" max="50" />
                                        <ErrorMessage component="span" name="vaga" className="form-erro" />
                                    </div>
                                </div>
                                <br />
                                <Button type="submit">Cadastrar</Button>
                            </Form>
                        </Formik>
                    </div>
                    <div className="Stat-box">
                        <h3>Exclusão de Vaga</h3>
                        <Formik initialValues={{}} onSubmit={handleClickExcluiVaga} validationSchema={validationStatus}>
                            <Form name="formStatus" method="post" data-parsley-validate="">
                                <div>
                                    <div>
                                        <h6 for="login">Bloco:</h6>
                                        <Field type="text" name="bloco" id="bloco" class="form-control" />
                                        <ErrorMessage component="span" name="bloco" className="form-erro" />
                                    </div>
                                    <div>
                                        <h6 for="senha">Vaga:</h6>
                                        <Field type="number" name="vaga" id="vaga" class="form-control" min="01" max="70" />
                                        <ErrorMessage component="span" name="vaga" className="form-erro" />
                                    </div>
                                </div>
                                <br />
                                <Button type="submit">Excluir</Button>
                            </Form>
                        </Formik>
                    </div>
                </div>
                <br />
                <div className='sair'>
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
            <Footer />
        </div>
    )
}
