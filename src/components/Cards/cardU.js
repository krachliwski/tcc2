import React from "react"
import "./cardU.css"
import Axios from 'axios';
import swal from 'sweetalert';
import { Formik, Form } from "formik";

export default function CardU(props) {

    const ExcluiUser = () => {
        Axios.post("http://localhost:3001/excluiUser", {
            cpf: props.cpf
        }).then((response) => {
            swal({
                icon: 'info',
                title: response.data,
                mButton: false,
            })
            window.location.href = "/UserAlt";
        });
    };

    return (
        <Formik initialValues={{}} onSubmit={ExcluiUser}>
            <Form name="formLogin" method="post">
                <div className="card--container">
                    <p className="card--nome">{props.nome}</p>
                    <p className="card--email">{props.email}</p>
                    <p className="card--telefone">{props.telefone}</p>
                    <p className="card--cpf" name="cpf" id="cpf">{props.cpf}</p>
                    <p className="card--cpf"></p>
                    <button className="Excluir" type="submit">Excluir</button>
                </div>
            </Form>
        </Formik>
    );
}