import React from 'react';
import './home.css';
import { BsYoutube, BsInstagram } from 'react-icons/bs';
import Menu from '../../components/Menu/menu';
import Logo from '../../images/logo.png';

export default function Home() {
  return (
    <div className="container-home">

      <Menu/>
      <img src={Logo} alt="logo" />
      <h1 className="title">E-FLANELINHA</h1>
      <button className="aboutUs"> <span className="aboutUsspan">Sobre Nós</span></button>
      <button className="mainPage"> <span className="mainPagespan">Página Principal </span></button>
      <button className="projectDetails"> <span className="projectDetailsspan">Detalhes do Projeto </span></button>

      <a className="social" href="https://youtube.com">
        <BsYoutube color="#FFF" size={24} />
      </a>

      <a className="social" href="https://instagram.com/krachliwski">
        <BsInstagram color="#FFF" size={24} />
      </a>


      <h1>TESTE</h1>
    </div>
  )
}
