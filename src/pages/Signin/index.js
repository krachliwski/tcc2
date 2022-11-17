/*
SIGNIN NÃO SERÁ MAIS USADO EM PAGE SEPARADA!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
SIGNIN NÃO SERÁ MAIS USADO EM PAGE SEPARADA!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
SIGNIN NÃO SERÁ MAIS USADO EM PAGE SEPARADA!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
SIGNIN NÃO SERÁ MAIS USADO EM PAGE SEPARADA!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
SIGNIN NÃO SERÁ MAIS USADO EM PAGE SEPARADA!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
SIGNIN NÃO SERÁ MAIS USADO EM PAGE SEPARADA!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
SIGNIN NÃO SERÁ MAIS USADO EM PAGE SEPARADA!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
SIGNIN NÃO SERÁ MAIS USADO EM PAGE SEPARADA!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
SIGNIN NÃO SERÁ MAIS USADO EM PAGE SEPARADA!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
SIGNIN NÃO SERÁ MAIS USADO EM PAGE SEPARADA!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
SIGNIN NÃO SERÁ MAIS USADO EM PAGE SEPARADA!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
SIGNIN NÃO SERÁ MAIS USADO EM PAGE SEPARADA!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
SIGNIN NÃO SERÁ MAIS USADO EM PAGE SEPARADA!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
SIGNIN NÃO SERÁ MAIS USADO EM PAGE SEPARADA!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
*/
import React, { useState } from 'react';
import './signin.css';
import Menu from '../../components/Menu/menu';
import { Formik, Form, Field, ErrorMessage } from "formik";
import Axios from 'axios';
import * as yup from "yup";
import swal from 'sweetalert';

function signin() {
    const handleClickRegister = (values) => {
        Axios.post("http://localhost:3001/register", {
            nome: values.nome,
            senha: values.senha
        }).then((response) => {
            console.log(response);
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
            .oneOf([yup.ref("password"), null], "As senhas são diferentes")
            .required("A confirmação da senha é obrigatória"),
    });
    return (
        <div className="Back">
            <Menu />
            <div>
                <div className="Login-Box">
                    <Formik initialValues={{}} onSubmit={handleClickRegister} validationSchema={validationRegister}>
                        <form name="formLogin" method="post" data-parsley-validate="">
                            <div>
                                <label for="login">Nome:</label>
                                <Field type="text" name="nome" id="login" class="form-control" required />
                                <ErrorMessage component="span" name="nome" className="form-erro" />
                            </div>
                            <div>
                                <label for="senha">Insira uma Senha</label>
                                <Field type="password" name="senha" id="senha" class="form-control" required data-parsley-required-message="Por favor, preencha este campo" />
                                <ErrorMessage component="span" name="senha" className="form-erro" />
                            </div>
                            <div>
                                <label for="senha">Confirme a Senha</label>
                                <Field type="password" name="confirmation" id="senha" class="form-control" required data-parsley-required-message="Por favor, preencha este campo" />
                                <ErrorMessage component="span" name="confirmation" className="form-erro" />
                            </div>
                            <button type="submit" class="btn btn-success w-100">Concluir</button>
                        </form>
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default signin;
