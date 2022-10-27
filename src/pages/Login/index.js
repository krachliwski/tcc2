import React from 'react';
import './login.css';
import Menu from '../../components/Menu/menu';
import Axios from 'axios';
import swal from 'sweetalert';

export default function login() {
    return (
        <div className="Back">
            <Menu />
            <div>
                <div className="Login-Box">
                    <form name="formLogin" method="post" data-parsley-validate="">
                        <label for="login">Login:</label>
                        <input type="text" name="login" id="login" class="form-control" required></input>
                        <br />
                        <label for="senha">Senha:</label>
                        <input type="password" name="senha" id="senha" class="form-control" required data-parsley-required-message="Por favor, preencha este campo"></input>
                        <br />
                        <button type="submit" class="btn btn-success w-100">Efetuar Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}