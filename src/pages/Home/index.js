import React from 'react';
import './home.css';
import { BsYoutube, BsInstagram } from 'react-icons/bs';

export default function Home(){
  return(
    <div className="container-home">

      <header className="header">
        <img src="/logo.png" alt="logo"/>
        <h1 className="title">E-FLANELINHA</h1>
        <button className="aboutUs">Sobre Nós</button>
        <button className="mainPage">Página Principal</button>
        <button className="projectDetails">Detalhes do Projeto</button>
        
        <a className="social" href="https://youtube.com">
                <BsYoutube color="#FFF" size={24} />
            </a>

            <a className="social" href="https://instagram.com/krachliwski">
                <BsInstagram color="#FFF" size={24} />
        </a>

      </header>

      <h1>TESTE</h1>
    </div>
  )
}
