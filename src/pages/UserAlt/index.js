import React, { useState, useEffect } from 'react';
import './userAlt.css';
import Menu from '../../components/Menu/menu';
import { Button } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from "formik";
import Axios from 'axios';
import * as yup from "yup";
import swal from 'sweetalert2';
import Footer from '../Footer/index.js';
import Card from '../../components/Cards/cardU';

function UserAlt() {

    const [logado, setLogado] = useState(false);

    const Autenticado = () => {
        setLogado(true);
    };

    const [deslogado, setDeslogado] = useState(false);

    const Desautenticado = () => {
        setDeslogado(true);
    };

    const handleClickUpdate = (values) => {
        Axios.post("http://localhost:3001/update", {
            nome: values.nome,
            email: values.email,
            telefone: values.telefone,
            cpf: values.cpf,
            endereco: values.endereco,
            cep: values.cep
        }).then((response) => {
            swal.fire({ icon: 'info', title: response.data, showConfirmButton: true, timer: 1500 });
            window.location.href = "/UserAlt";
        });
    };

    const validationUpdate = yup.object().shape({
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
    });

    console.log(listUsers);
    const [listUsers, setListUsers] = useState();

    useEffect(() => {
        Axios.get("http://localhost:3001/getUsers").then((response) => {
            setListUsers(response.data);
        })
    }, [])

    return (
        <div className="container-login">
            <Menu />
            <div>
                <div className="Login-Box">
                    <div>
                        <h3>Alterar Usuário</h3>
                        <Formik initialValues={{}} onSubmit={handleClickUpdate} validationSchema={validationUpdate}>
                            <Form name="formLogin" method="post" data-parsley-validate="">
                                <div>
                                    <label for="login">Insira o CPF do Usuário a ser alterado</label>
                                    <Field type="text" name="cpf" id="cpf" class="form-control" placeholder="000.000.000-00" />
                                    <ErrorMessage component="span" name="cpf" className="form-erro" />
                                </div>
                                <div>
                                    <label for="login">Nome</label>
                                    <Field type="text" name="nome" id="login" class="form-control" />
                                    <ErrorMessage component="span" name="nome" className="form-erro" />
                                </div>
                                <div>
                                    <label for="login">E-mail</label>
                                    <Field type="email" name="email" id="email" class="form-control" placeholder="meuemail@mail.com" />
                                    <ErrorMessage component="span" name="email" className="form-erro" />
                                </div>
                                <div>
                                    <label for="login">Telefone</label>
                                    <Field type="tel" name="telefone" id="telefone" class="form-control" placeholder="00000-0000" pattern="[0-9]{5}-[0-9]{4}" />
                                    <ErrorMessage component="span" name="telefone" className="form-erro" />
                                </div>
                                <div>
                                    <label for="login">Endereço</label>
                                    <Field type="text" name="endereco" id="endereco" class="form-control" />
                                    <ErrorMessage component="span" name="endereco" className="form-erro" />
                                </div>
                                <div>
                                    <label for="login">CEP</label>
                                    <Field type="number" name="cep" id="cep" class="form-control" placeholder="00000000" />
                                    <ErrorMessage component="span" name="cep" className="form-erro" />
                                </div>
                                <div className="buttons">
                                    <Button type="submit">Concluir</Button>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
                <div className="listUsers">
                    {typeof listUsers !== "undefined" && listUsers.map((value) => {
                        return <Card
                            key={value.nome}
                            listCard={listUsers}
                            setListCard={setListUsers}
                            nome={value.nome}
                            email={value.email}
                            telefone={value.telefone}
                            cpf={value.cpf}></Card>;
                    })}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default UserAlt;
