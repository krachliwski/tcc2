import React, { useState } from 'react';
import './user.css';
import Menu from '../../components/Menu/menu';
import swal from 'sweetalert2';
import Footer from '../Footer/index.js';
import emailjs from '@emailjs/browser';
import Axios from 'axios';

function User() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    function sendEmail(e){
        e.preventDefault();

        if(name === '' || email === ''){
            swal.fire("Preencha todos os campos!");
            //return;
        }

        const templateParams = {
            from_name: name,
            email: email,
        }
        
        emailjs.send("service_4q4bor8", "template_dvpn5un", templateParams, "wH7KgZzvHlXoQ86oG")
        .then((response) => {
            console.log("EMAIL ENVIADO", response.status, response.text);
            setName('')
            setEmail('')
        }, (err) => {
            console.log("ERRO: ", err);
        })
    }

    const enviaEmail = (values) => {
        Axios.post("http://localhost:3001/mandaEmail", {
            name: values.name,
            email: values.email
        }).then((response) => {
            if (response.data == "Usuário Logado!") {
                alert("OK");
            } else {
                swal.fire({ icon: 'info', title: response.data, showConfirmButton: false, timer: 2000 });
            }
        });
    };

    return (
        <div className="container-login">
            <Menu />
            <div className="Login-Box">
                <h3>Redefinição de Senha</h3>

                <form className="form" onSubmit={sendEmail}>
                    <input
                        name="name"
                        className="input"
                        type="text"
                        placeholder="Digite seu CPF"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />

                    <input
                        name="email"
                        className="input"
                        type="text"
                        placeholder="Digite seu email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <input className="button" type="submit" value="Enviar" />
                </form>

            </div>
            <br />
            <br />
            <Footer />
        </div>
    );
}

export default User;