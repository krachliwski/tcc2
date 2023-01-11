import React from 'react';
//import './home.css';
import Menu from '../../components/Menu/menu';
import Footer from '../Footer/index.js';
import About from '../About/index.js';
import Goals from '../Goals/index.js';
import Description from '../Description/index.js';

export default function Home() {
  return (
    <div className="container-home">
      <Menu />
      <About />
      <Description />
      <Goals />
      <Footer />
    </div>
  )
}

















/*

export default function Home() {
  return (
    <div className="container-home">
      <Menu />
      <div class="back-text-div">
        <div class="text-div">
          <h1 id='details'>Detalhes do Projeto</h1>
          <a>
            Com o atual cenário da tecnologia, tudo se tornou mais rápido e prático,
            sendo tudo em tempo real e sem pausas.
            <br />
            Com essa ideia em mente,
            o presente trabalho busca resolver um dos problemas mais comuns
            em grandes estacionamentos de lojas, mercados ou shoppings.
            A ideia consiste em permitir que o usuário consiga acessar remotamente a página
            web do estabelecimento e consultar a disponibilidade de vagas no local,
            além da consulta na página web, também será possível que o cliente consulte
            as vagas disponíveis ao chegar no local.
            <br />
            Desta maneira, pretendemos melhorar a experiência
            do usuário com os serviços oferecidos dentro do estacionamento do estabelecimento,
            e como resultado implícito, proporcionar um nível de satisfação elevado,
            gerando um nível de consumo maior no estabelecimento.
          </a>
          <br />
        </div>
      </div>
      <Footer />
    </div>
  )
}

*/