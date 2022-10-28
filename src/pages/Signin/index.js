import React, { useState } from 'react';
import './signin.css';
import Menu from '../../components/Menu/menu';
import Axios from 'axios';
import swal from 'sweetalert';

export default function login() {
    const [values, setValues] = useState;

    const handleChangeValues = (value) => {
        setValues((prevValue) => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }));
    };

    const handleClickButton = () => {
        Axios.post("http://localhost:3000/usuario", {
            nome: values.nome,
            senha: values.senha
        }).then((response) => {
            console.log(response);
        });
    };

    return (
        <div className="Back">
            <Menu />
            <div>
                <div className="Login-Box">
                    <form name="formLogin" method="post" data-parsley-validate="">
                        <label for="login">Nome Completo:</label>
                        <input type="text" name="login" id="login" class="form-control" required></input>
                        <br />
                        <label for="senha">Insira uma Senha</label>
                        <input type="password" name="senha" id="senha" class="form-control" required data-parsley-required-message="Por favor, preencha este campo"></input>
                        <br />
                        <label for="senha">Repita a Senha</label>
                        <input type="password" name="senha" id="senha" class="form-control" required data-parsley-required-message="Por favor, preencha este campo"></input>
                        <br />
                        <button type="submit" class="btn btn-success w-100">Concluir</button>
                    </form>
                </div>
            </div>
        </div>
    )
}