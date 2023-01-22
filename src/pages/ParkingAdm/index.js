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
import Carousel from 'react-bootstrap/Carousel';

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
            if (response.data[0]) {
                { VagasA() }
            }
        })
    }, [])

    const [temVagaA, setTemVagasA] = useState(false);

    const VagasA = () => {
        setTemVagasA(true);
    };
    ///////////////////////////////////////////////////////////////////////////////////////////////////
    console.log(listVagasB);
    const [listVagasB, setListVagasB] = useState();

    useEffect(() => {
        Axios.get("http://localhost:3001/getCardsB").then((response) => {
            setListVagasB(response.data);
            if (response.data[0]) {
                { VagasB() }
            }
        })
    }, [])

    const [temVagaB, setTemVagasB] = useState(false);

    const VagasB = () => {
        setTemVagasB(true);
    };
    ////////////////////////////////////////////////////////////////////////////////////////////////////
    console.log(listVagasC);
    const [listVagasC, setListVagasC] = useState();

    useEffect(() => {
        Axios.get("http://localhost:3001/getCardsC").then((response) => {
            setListVagasC(response.data);
            if (response.data[0]) {
                { VagasC() }
            }
        })
    }, [])

    const [temVagaC, setTemVagasC] = useState(false);

    const VagasC = () => {
        setTemVagasC(true);
    };
    /////////////////////////////////////////////////////////////////////////////////////////////////////
    console.log(listVagasD);
    const [listVagasD, setListVagasD] = useState();

    useEffect(() => {
        Axios.get("http://localhost:3001/getCardsD").then((response) => {
            setListVagasD(response.data);
            if (response.data[0]) {
                { VagasD() }
            }
        })
    }, [])

    const [temVagaD, setTemVagasD] = useState(false);

    const VagasD = () => {
        setTemVagasD(true);
    };
    /////////////////////////////////////////////////////////////////////////////////////////////////////

    console.log(listVagasE);
    const [listVagasE, setListVagasE] = useState();

    useEffect(() => {
        Axios.get("http://localhost:3001/getCardsE").then((response) => {
            setListVagasE(response.data);
            if (response.data[0]) {
                { VagasE() }
            }
        })
    }, [])

    const [temVagaE, setTemVagasE] = useState(false);

    const VagasE = () => {
        setTemVagasE(true);
    };

    /////////////////////////////////////////////////////////////////////////////////////////////////////
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
                <>
                    {refreshImg()}
                </>
                <Carousel>
                    {temVagaA ? <Carousel.Item interval={100000}>
                        <div id="NomeBloco">
                            <a>Bloco A</a>
                        </div>
                        <div id="Planta" style={{ backgroundColor: `#161A25` }}>
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
                    </Carousel.Item> : ""}
                    {temVagaB ? <Carousel.Item interval={100000}>
                        <div id="NomeBloco">
                            <a>Bloco B</a>
                        </div>
                        <div id="Planta" style={{ backgroundColor: `#161A25` }}>
                            <div className='parent'>
                                {typeof listVagasB !== "undefined" && listVagasB.map((value) => {
                                    return (
                                        <Card
                                            key={value.codigo}
                                            listCard={listVagasB}
                                            setListVagasB={setListVagasB}
                                            codigo={value.codigo}
                                            status={value.status}
                                        ></Card>);
                                })}
                            </div>
                        </div>
                    </Carousel.Item> : ""}
                    {temVagaC ? <Carousel.Item interval={100000}>
                        <div id="NomeBloco">
                            <a>Bloco C</a>
                        </div>
                        <div id="Planta" style={{ backgroundColor: `#161A25` }}>
                            <div className='parent'>
                                {typeof listVagasC !== "undefined" && listVagasC.map((value) => {
                                    return (
                                        <Card
                                            key={value.codigo}
                                            listCard={listVagasC}
                                            setListVagasC={setListVagasC}
                                            codigo={value.codigo}
                                            status={value.status}
                                        ></Card>);
                                })}
                            </div>
                        </div>
                    </Carousel.Item> : ""}
                    {temVagaD ? <Carousel.Item interval={100000}>
                        <div id="NomeBloco">
                            <a>Bloco D</a>
                        </div>
                        <div id="Planta" style={{ backgroundColor: `#161A25` }}>
                            <div className='parent'>
                                {typeof listVagasD !== "undefined" && listVagasD.map((value) => {
                                    return (
                                        <Card
                                            key={value.codigo}
                                            listCard={listVagasD}
                                            setListVagasD={setListVagasD}
                                            codigo={value.codigo}
                                            status={value.status}
                                        ></Card>);
                                })}
                            </div>
                        </div>
                    </Carousel.Item> : ""}
                    {temVagaE ? <Carousel.Item interval={100000}>
                        <div id="NomeBloco">
                            <a>Bloco E</a>
                        </div>
                        <div id="Planta" style={{ backgroundColor: `#161A25` }}>
                            <div className='parent'>
                                {typeof listVagasE !== "undefined" && listVagasE.map((value) => {
                                    return (
                                        <Card
                                            key={value.codigo}
                                            listCard={listVagasE}
                                            setListVagasE={setListVagasE}
                                            codigo={value.codigo}
                                            status={value.status}
                                        ></Card>);
                                })}
                            </div>
                        </div>
                    </Carousel.Item> : ""}
                </Carousel>
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
