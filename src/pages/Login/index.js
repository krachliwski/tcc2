import React from 'react';
import './login.css';
import Menu from '../../components/Menu/menu';
import { Button } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from "formik";
import Axios from 'axios';
import * as yup from "yup";
import swal from 'sweetalert2';

function login() {
    const handleClickLogin = (values) => {
        Axios.post("http://localhost:3001/login", {
            nome: values.nome,
            senha: values.senha
        }).then((response) => {
            swal.fire({icon: 'info', title: response.data, showConfirmButton: false, timer: 1500});
        });
    };

    const validationLogin = yup.object().shape({
        nome: yup
            .string()
            .required("O nome é obrigatório"),
        senha: yup
            .string()
            .min(8, "A senha deve ter pelo menos 8 caracteres")
            .required("A senha é obrigatória"),
    });

    const handleClickRegister = (values) => {
        Axios.post("http://localhost:3001/register", {
            nome: values.nome,
            senha: values.senha
        }).then((response) => {
            swal.fire({icon: 'info', title: response.data, showConfirmButton: false, timer: 1500});
        });
    };

    const validationRegister = yup.object().shape({
        nome: yup
            .string()
            .required("O nome é obrigatório"),
        senha: yup
            .string()
            .min(8, "A senha deve ter pelo menos 8 caracteres")
            .required("A senha é obrigatória"),
        confirmation: yup
            .string()
            .oneOf([yup.ref("senha"), null], "As senhas são diferentes")
            .required("A confirmação da senha é obrigatória"),
    });
    return (
        <div className="Back">
            <Menu />
            <div>
                <div className="Login-Box">
                    <Formik initialValues={{}} onSubmit={handleClickLogin} validationSchema={validationLogin}>
                        <Form name="formLogin" method="post" data-parsley-validate="">
                            <div>
                                <label for="login">Login:</label>
                                <Field type="text" name="nome" id="login" class="form-control" />
                                <ErrorMessage component="span" name="nome" className="form-erro" />
                            </div>
                            <div>
                                <label for="senha">Senha:</label>
                                <Field type="password" name="senha" id="senha" class="form-control" />
                                <ErrorMessage component="span" name="senha" className="form-erro" />
                            </div>
                            <div className="buttons">
                                <Button type="submit">Efetuar Login</Button>
                            </div>
                        </Form>
                    </Formik>
                    <br />
                    <h3>Registrar</h3>
                    <Formik initialValues={{}} onSubmit={handleClickRegister} validationSchema={validationRegister}>
                        <Form name="formLogin" method="post" data-parsley-validate="">
                            <div>
                                <label for="login">Nome:</label>
                                <Field type="text" name="nome" id="login" class="form-control" />
                                <ErrorMessage component="span" name="nome" className="form-erro" />
                            </div>
                            <div>
                                <label for="senha">Insira uma Senha</label>
                                <Field type="password" name="senha" id="senha" class="form-control" />
                                <ErrorMessage component="span" name="senha" className="form-erro" />
                            </div>
                            <div>
                                <label for="senha">Confirme a Senha</label>
                                <Field type="password" name="confirmation" id="senha" class="form-control" />
                                <ErrorMessage component="span" name="confirmation" className="form-erro" />
                            </div>
                            <Button type="submit">Concluir</Button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default login;
