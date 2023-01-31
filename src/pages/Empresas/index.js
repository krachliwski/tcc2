import React, { useState } from 'react';
import './empresas.css';
import Menu from '../../components/Menu/menu';
import { Button } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from "formik";
import Axios from 'axios';
import * as yup from "yup";
import swal from 'sweetalert2';
import Footer from '../Footer/index.js';

function empre() {

    const [logado, setLogado] = useState(false);

    const Autenticado = () => {
        setLogado(true);
    };

    const handleClickLogin = (values) => {
        Axios.post("http://localhost:3001/loginSupervisor", {
            nome: values.nome,
            senha: values.senha
        }).then((response) => {
            if (response.data == "Logado com Supervisor!") {
                { Autenticado() }
                swal.fire({
                    title: response.data
                })
            } else {
                swal.fire({ icon: 'info', title: response.data, showConfirmButton: false, timer: 2000 });
            }
        });
    };

    const criaEmpresa = (values) => {
        Axios.post("http://localhost:3001/criaEmpresa", {
            cnpj: values.cnpj,
            razao: values.razao,
            nomeF: values.nomeF,
            ie: values.ie,
        }).then((response) => {
            swal.fire({ icon: 'info', title: response.data, showConfirmButton: false, timer: 1500 });
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

    const validationLogin = yup.object().shape({
        nome: yup
            .string()
            .required("O nome é obrigatório"),
        senha: yup
            .string()
            .min(8, "A senha está fora do padrão")
            .required("A senha é obrigatória"),
    });

    return (
        <div className="container-login">
            <Menu />
            <div>
                <div className="Login-Box">
                    <h3>Login</h3>
                    <Formik initialValues={{}} onSubmit={handleClickLogin} validationSchema={validationLogin}>
                        <Form name="formLogin" method="post" data-parsley-validate="">
                            <div>
                                <label for="login">Login</label>
                                <Field type="text" name="nome" id="login" class="form-control" />
                                <ErrorMessage component="span" name="nome" className="form-erro" />
                            </div>
                            <div>
                                <label for="senha">Senha</label>
                                <Field type="password" name="senha" id="senha" class="form-control" />
                                <ErrorMessage component="span" name="senha" className="form-erro" />
                            </div>
                            <div className="buttons">
                                <Button type="submit">Entrar</Button>
                            </div>
                        </Form>
                    </Formik>
                    <br />
                    {logado ?
                        <div><h3>Cadastrar</h3>
                            <Formik initialValues={{}} onSubmit={criaEmpresa} validationSchema={valCriaEmpresa}>
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
                                        <Button type="submit">Cadastrar</Button>
                                        <Button type="submit" href="/alterEmp">Alterar Empresa</Button>
                                    </div>
                                </Form>
                            </Formik>
                        </div>
                        : <div>
                            <h3>Entre com Supervisor para cadastrar uma empresa</h3>
                        </div>
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default empre;
