import React, { useState, useEffect } from 'react';
import './parking.css';
import Menu from '../../components/Menu/menu';
import Planta from '../../images/Planta.png';
import Free from '../../images/Free.png';
import Ocup from '../../images/Occup.png';
import Indisp from '../../images/Indisp.png';
import Axios from 'axios';
import Card from "../../components/Cards/card";
import Footer from '../Footer/index.js';
import { Carousel } from 'react-bootstrap';

export default function Parking() {
  const refreshImg = (stat) => {
    Axios.post("http://localhost:3001/mapa", {
      stat: 'Z',
    }).then((response) => {

    });
  };

  console.log(listVagas);
  const [listVagas, setListVagas] = useState();

  useEffect(() => {
    Axios.get("http://localhost:3001/getCards").then((response) => {
      setListVagas(response.data);
    })
  }, [])

  console.log(listVagasB);
  const [listVagasB, setListVagasB] = useState();

  useEffect(() => {
    Axios.get("http://localhost:3001/getCardsB").then((response) => {
      setListVagasB(response.data);
    })
  }, [])

  console.log(listVagasC);
  const [listVagasC, setListVagasC] = useState();

  useEffect(() => {
    Axios.get("http://localhost:3001/getCardsC").then((response) => {
      setListVagasC(response.data);
    })
  }, [])

  const ocup = <img src={Ocup} alt="Ocup" width="20" height="25" />;
  const disp = <img src={Free} alt="Free" width="20" height="25" />;
  const indisp = <img src={Indisp} alt="Indisp" width="20" height="25" />;
  return (
    <div class="main">
      <Menu />
      <div class="div-h1">
        <h1>Estacionamento</h1>
        <div id="Legenda">
          <a><a className='disponivel'></a>  Vaga Livre</a>
          <a><a className='ocupado'></a>  Vaga Ocupada</a>
          <a><a className='indisponivel'></a>  Vaga Indisponível</a>
        </div>
        <>
          {refreshImg()}
        </>
        <div className="tabela-precos">
          <table class="darkTable">
            <thead>
              <tr>
                <th>Tabela de Preços</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Menos de 10 Minutos</td><td>Gratuito</td></tr>
              <tr>
                <td>De 10 à 30 Minutos</td><td>R$5,00</td></tr>
              <tr>
                <td>De 30 Minutos à 1 Hora</td><td>R$10,00</td></tr>
              <tr>
                <td>De 1 Hora à 3 Horas</td><td>R$15,00</td></tr>
              <tr>
                <td>Mais de 3 Horas</td><td>R$20,00</td></tr>
            </tbody>
          </table>
        </div>
        <Carousel>
          <Carousel.Item interval={100000}>
            <div id="NomeBloco">
              <a>Bloco A</a>
            </div>
            <div id="Planta" style={{ backgroundColor: `#161A25` }}>
              <div className='parent'>
                {typeof listVagas !== "undefined" && listVagas.map((value) => {
                  return (
                    <Card
                      key={value.codigo}
                      listCard={listVagas}
                      setListVagas={setListVagas}
                      codigo={value.codigo}
                      status={value.status}
                    ></Card>);
                })}
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={100000}>
            <div id="NomeBloco">
              <a>Bloco B</a>
            </div>
            <div id="Planta" style={{ backgroundColor: `#161A25` }}>
              <div className='parent'>
                {typeof listVagasB !== "undefined" && listVagasB.map((value) => {
                  return (
                    <Card
                      key={value.codigo}
                      listCard={listVagasB}
                      setListVagasB={setListVagasB}
                      codigo={value.codigo}
                      status={value.status}
                    ></Card>);
                })}
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={100000}>
            <div id="NomeBloco">
              <a>Bloco C</a>
            </div>
            <div id="Planta" style={{ backgroundColor: `#161A25` }}>
              <div className='parent'>
                {typeof listVagasC !== "undefined" && listVagasC.map((value) => {
                  return (
                    <Card
                      key={value.codigo}
                      listCard={listVagasC}
                      setListVagasC={setListVagasC}
                      codigo={value.codigo}
                      status={value.status}
                    ></Card>);
                })}
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      <Footer />
    </div>
  )
}
