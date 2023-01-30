import React, { useState, useEffect } from 'react';
import './alterEmp.css';
import Menu from '../../components/Menu/menu';
import { Button } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from "formik";
import Axios from 'axios';
import * as yup from "yup";
import swal from 'sweetalert2';
import Footer from '../Footer/index.js';
import Card from '../../components/Cards/cardE';

function alterEmp() {

    const alteraEmpresa = (values) => {
        Axios.post("http://localhost:3001/alteraEmpresa", {
            cnpj: values.cnpj,
            razao: values.razao,
            nomeF: values.nomeF,
            ie: values.ie,
        }).then((response) => {
            swal.fire({ icon: 'info', title: response.data, showConfirmButton: false, timer: 1500 });
            window.location.href = "/alterEmp";
        });
    };

    const valCriaEmpresa = yup.object().shape({
        cnpj: yup
            .string()
            .required("O CNPJ é obrigatório")
            .min(18, "CNPJ fora do padrão")
            .max(18, "CNPJ fora do padrão"),
        razao: yup
            .string()
            .required("Razão Social é obrigatória"),
        nomeF: yup
            .string()
            .required("Nome Fantasia é obrigatório"),
        ie: yup
            .string()
            .required("Inscrição Estadual é obrigatória")
            .max(15, "Inscrição Estadual fora do padrão"),
    });

    console.log(listEmp);
    const [listEmp, setListEmp] = useState();

    useEffect(() => {
        Axios.get("http://localhost:3001/getEmp").then((response) => {
            setListEmp(response.data);
        })
    }, [])

    return (
        <div className="container-login">
            <Menu />
            <div>
                <div className="Login-Box">
                    <h3>Alterar</h3>
                    <Formik initialValues={{}} onSubmit={alteraEmpresa} validationSchema={valCriaEmpresa}>
                        <Form name="formLogin" method="post" data-parsley-validate="">
                            <div>
                                <label for="login">CNPJ</label>
                                <Field type="text" name="cnpj" id="cnpj" class="form-control" placeholder="00.000.000/0000-00" />
                                <ErrorMessage component="span" name="cnpj" className="form-erro" />
                            </div>
                            <div>
                                <label for="login">Razão Social</label>
                                <Field type="text" name="razao" id="razao" class="form-control" />
                                <ErrorMessage component="span" name="razao" className="form-erro" />
                            </div>
                            <div>
                                <label for="login">Nome Fantasia</label>
                                <Field type="tel" name="nomeF" id="nomeF" class="form-control" />
                                <ErrorMessage component="span" name="nomeF" className="form-erro" />
                            </div>
                            <div>
                                <label for="login">Inscrição Estadual</label>
                                <Field type="text" name="ie" id="ie" class="form-control" />
                                <ErrorMessage component="span" name="ie" className="form-erro" placeholder="000000000000000" />
                            </div>
                            <div className="buttons">
                                <Button type="submit">Salvar</Button>
                                <Button type="submit" href="/Empre">Cadastrar</Button>
                            </div>
                        </Form>
                    </Formik>
                </div>
                <div className="listEmps">
                    {typeof listEmp !== "undefined" && listEmp.map((value) => {
                        return <Card
                            key={value.nome}
                            listCard={listEmp}
                            setListCard={setListEmp}
                            cnpj={value.cnpj}
                            razao={value.razaoSocial}
                            nomeF={value.nomeFantasia}
                            ie={value.inscricaoEstadual}></Card>;
                    })}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default alterEmp;
