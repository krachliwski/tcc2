import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <ul>
                    <li className='nav-item'>
                        <a href='/'>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='login'>Entrar</a>
                    </li>
                    <li className='nav-item'>
                        <a href='login'>Cadastrar Vagas</a>
                    </li>
                    <li className='nav-item'>
                        <a href='parking'>Consultar vagas</a>
                    </li>
                </ul>
                <div className='bottom'>
                    <span className='line'></span>
                    <p>Centro Universitário Integrado </p>
                    <p>Trabalho de Conclusão de Curso - 2022 </p>
                    <p>Mateus Greco da Silva</p>
                    <p>Paulo Ricardo Krachliwski</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;