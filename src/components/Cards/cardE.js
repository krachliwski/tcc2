import React from "react"
import "./cardE.css"
import Axios from 'axios';
import swal from 'sweetalert';
import { Formik, Form } from "formik";

export default function CardU(props) {

    const ExcluiEmp = () => {
        Axios.post("http://localhost:3001/excluiEmp", {
            cnpj: props.cnpj
        }).then((response) => {
            swal({
                icon: 'info',
                title: response.data,
                mButton: false,
            })
            window.location.href = "/alterEmp";
        });
    };

    return (
        <Formik initialValues={{}} onSubmit={ExcluiEmp}>
            <Form name="formLogin" method="post">
                <div className="card--container">
                    <p className="card--cpf"></p>
                    <p className="card--nome" name="cnpj" id="cnpj">{props.cnpj}</p>
                    <p className="card--email">{props.razao}</p>
                    <p className="card--telefone">{props.nomeF}</p>
                    <p className="card--cpf">{props.ie}</p>
                    <button className="Excluir" type="submit">Excluir</button>
                </div>
            </Form>
        </Formik>
    );
}