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
        <div id="NomeBloco">
          <a>Bloco A</a>
        </div>
        <>
          {refreshImg()}
        </>
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
      </div>
      <Footer />
    </div>
  )
}
