import React from 'react';
import './description.css';

function Description() {
    return (
        <div className='description' id='description'>
            <div className='container'>
                <h2 id='details'>Sobre</h2>
                <span className='line'></span>
                <div className='content'>
                    <p>
                        O presente trabalho busca resolver um dos problemas mais comuns
                        em grandes estacionamentos de lojas, mercados ou shoppings.
                        A ideia consiste em permitir que o usuário consiga acessar remotamente a página
                        web do estabelecimento e consultar a disponibilidade de vagas no local,
                        além da consulta na página web, também será possível que o cliente consulte
                        as vagas disponíveis ao chegar no local.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Description;