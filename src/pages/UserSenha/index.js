import React from 'react';
import './userSenha.css';
import Menu from '../../components/Menu/menu';
import { Button } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from "formik";
import Axios from 'axios';
import * as yup from "yup";
import swal from 'sweetalert2';
import Footer from '../Footer/index.js';

function UserSenha() {

    const UpdateSenha = (values) => {
        Axios.post("http://localhost:3001/updateSenha", {
            cpf: values.cpf,
            senha: values.senha
        }).then((response) => {
            swal.fire({ icon: 'info', title: response.data, showConfirmButton: true, timer: 1500 });
            window.location.href = "/login";
        });
    };

    const validationUpdate = yup.object().shape({
        cpf: yup
            .string()
            .required("O CPF é obrigatório")
            .min(14, "CPF fora do padrão")
            .max(14, "CPF fora do padrão"),
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
        <div className="container-login">
            <Menu />
            <div>
                <div className="Login-Box">
                    <div>
                        <h3>Alterar Usuário</h3>
                        <Formik initialValues={{}} onSubmit={UpdateSenha} validationSchema={validationUpdate}>
                            <Form name="formLogin" method="post" data-parsley-validate="">
                                <div>
                                    <label for="login">Insira o seu CPF</label>
                                    <Field type="text" name="cpf" id="cpf" class="form-control" placeholder="000.000.000-00" />
                                    <ErrorMessage component="span" name="cpf" className="form-erro" />
                                </div>
                                <div>
                                    <label for="senha">Nova Senha</label>
                                    <Field type="password" name="senha" id="senha" class="form-control" />
                                    <ErrorMessage component="span" name="senha" className="form-erro" />
                                </div>
                                <div>
                                    <label for="senha">Confirme a Nova Senha</label>
                                    <Field type="password" name="confirmation" id="senha" class="form-control" />
                                    <ErrorMessage component="span" name="confirmation" className="form-erro" />
                                </div>
                                <div className="buttons">
                                    <Button type="submit">Concluir</Button>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default UserSenha;
