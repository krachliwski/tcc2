import React, { useState } from 'react';
import './parking.css';
import Menu from '../../components/Menu/menu';
import Planta from '../../images/Planta1.png';
import Free from '../../images/Free.png';
import Ocup from '../../images/Occup.png';
import Indisp from '../../images/Indisp.png';
import EFree from '../../images/EFree.png';
import EOcup from '../../images/EOccup.png';
import EIndisp from '../../images/EIndisp.png';
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
            swal({ icon: 'info', title: response.data, mButton: false, timer: 2000, });
            window.location.href = "/parking2";
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

    const ocup = <img src={Ocup} alt="Ocup" width="20" height="25" />;
    const disp = <img src={Free} alt="Free" width="20" height="25" />;
    const indisp = <img src={Indisp} alt="Indisp" width="20" height="25" />;

    return (
        <div class="main">
            <Menu />
            <div class="div-h1">
                <h1>Parking Administration</h1>
                <div id="Legenda">
                    <a><img alt="Free" src={Free} width="28" height="40" />  Vaga Livre</a>
                    <a><img alt="Ocup" src={Ocup} width="28" height="40" />  Vaga Ocupada</a>
                    <a><img alt="Indisp" src={Indisp} width="28" height="40" />  Vaga Indisponível</a>
                </div>
                <div id="Planta" style={{ backgroundImage: `url(${Planta})` }}>
                    <button id="A61a" className="spots">
                        {disp}
                    </button>
                    <button id="A62a" className="spots">
                        {ocup}
                    </button>
                    <button id="A63a" className="spots">
                        {ocup}
                    </button>
                    <button id="A64a" className="spots">
                        {indisp}
                    </button>
                    <button id="A65a" className="spots">
                        {disp}
                    </button>
                    <button id="A66a" className="spots">
                        {disp}
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
                            <Button type="submit">Alterar</Button>
                        </Form>
                    </Formik>
                </div>
                <div className="Edit">
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
