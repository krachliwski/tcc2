import React, { useState } from 'react';
import './userCad.css';
import Menu from '../../components/Menu/menu';
import { Button } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from "formik";
import Axios from 'axios';
import * as yup from "yup";
import swal from 'sweetalert2';
import Footer from '../Footer/index.js';

function UserCad() {

    const [logado, setLogado] = useState(false);

    const Autenticado = () => {
        setLogado(true);
    };

    const [deslogado, setDeslogado] = useState(false);

    const Desautenticado = () => {
        setDeslogado(true);
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

    const validationLogin = yup.object().shape({
        nome: yup
            .string()
            .required("O nome é obrigatório"),
        senha: yup
            .string()
            .min(8, "A senha está fora do padrão")
            .required("A senha é obrigatória"),
    });

    const handleClickRegister = (values) => {
        Axios.post("http://localhost:3001/register", {
            nome: values.nome,
            email: values.email,
            telefone: values.telefone,
            cpf: values.cpf,
            endereco: values.endereco,
            cep: values.cep,
            senha: values.senha
        }).then((response) => {
            swal.fire({ icon: 'info', title: response.data, showConfirmButton: false, timer: 1500 });
        });
    };

    const validationRegister = yup.object().shape({
        nome: yup
            .string()
            .required("O nome é obrigatório"),
        email: yup
            .string()
            .required("O email é obrigatório"),
        telefone: yup
            .string()
            .required("O telefone é obrigatório"),
        cpf: yup
            .string()
            .required("O CPF é obrigatório")
            .min(14, "CPF fora do padrão")
            .max(14, "CPF fora do padrão"),
        endereco: yup
            .string()
            .required("O endereço é obrigatório"),
        cep: yup
            .string()
            .required("O CEP é obrigatório"),
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
                    {logado
                        ? <div>
                            <h3>Cadastrar</h3>
                            <Formik initialValues={{}} onSubmit={handleClickRegister} validationSchema={validationRegister}>
                                <Form name="formLogin" method="post" data-parsley-validate="">
                                    <div>
                                        <label for="login">Nome</label>
                                        <Field type="text" name="nome" id="login" class="form-control" />
                                        <ErrorMessage component="span" name="nome" className="form-erro" />
                                    </div>
                                    <div>
                                        <label for="login">E-mail</label>
                                        <Field type="email" name="email" id="email" class="form-control" placeholder="meuemail@mail.com"/>
                                        <ErrorMessage component="span" name="email" className="form-erro" />
                                    </div>
                                    <div>
                                        <label for="login">Telefone</label>
                                        <Field type="tel" name="telefone" id="telefone" class="form-control" placeholder="00000-0000" pattern="[0-9]{5}-[0-9]{4}"/>
                                        <ErrorMessage component="span" name="telefone" className="form-erro" />
                                    </div>
                                    <div>
                                        <label for="login">CPF</label>
                                        <Field type="text" name="cpf" id="cpf" class="form-control" placeholder="000.000.000-00"/>
                                        <ErrorMessage component="span" name="cpf" className="form-erro" />
                                    </div>
                                    <div>
                                        <label for="login">Endereço</label>
                                        <Field type="text" name="endereco" id="endereco" class="form-control" />
                                        <ErrorMessage component="span" name="endereco" className="form-erro" />
                                    </div>
                                    <div>
                                        <label for="login">CEP</label>
                                        <Field type="number" name="cep" id="cep" class="form-control" placeholder="00000000"/>
                                        <ErrorMessage component="span" name="cep" className="form-erro" />
                                    </div>
                                    <div>
                                        <label for="senha">Senha</label>
                                        <Field type="password" name="senha" id="senha" class="form-control" />
                                        <ErrorMessage component="span" name="senha" className="form-erro" />
                                    </div>
                                    <div>
                                        <label for="senha">Confirme a Senha</label>
                                        <Field type="password" name="confirmation" id="senha" class="form-control" />
                                        <ErrorMessage component="span" name="confirmation" className="form-erro" />
                                    </div>
                                    <div className="buttons">
                                        <Button type="submit">Concluir</Button>
                                        <Button href="UserAlt">Alterar Usuário</Button>
                                    </div>
                                </Form>
                            </Formik>
                        </div>
                        : <div>
                            <h3>Entre com Supervisor para cadastrar um usuário</h3>
                        </div>
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default UserCad;
