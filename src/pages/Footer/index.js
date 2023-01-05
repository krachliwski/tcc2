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
                        <a href='#about'>Entrar</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#testimonials'>Cadastrar Vagas</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#demo'>Consultar vagas</a>
                    </li>
                </ul>
                <div className='bottom'>
                    <span className='line'></span>
                    <p>Centro Universitário Integrado </p>
                    <p>Trabalho de Conclusão de Curso - 2022 </p>
                    <p>Mateus & Paulo </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;