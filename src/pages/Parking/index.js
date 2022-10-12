import React, { useState } from 'react';
import './parking.css';
import Menu from '../../components/Menu/menu';
import Planta from '../../images/Planta1.png';
import Free from '../../images/Free.png';
import Ocup from '../../images/Occup.png';
import Indisp from '../../images/Indisp.png';
import EFree from '../../images/EFree.png';
import EOcup from '../../images/EOccup.png';
import EIndisp from '../../images/EIndisp.png';
import { Button } from 'react-bootstrap';
import swal from 'sweetalert';

export default function Parking() {
  const sucessImage = <img src={EOcup} alt="EOcup" width="20" height="25" />;
  const defaultImage = <img src={EFree} alt="EFree" width="20" height="25" />;
  const indispImage = <img src={EIndisp} alt="EIndisp" width="20" height="25" />;
  return (
    <div class="main">
      <Menu />
      <div class="div-h1">
        <h1>Parking</h1>
        <div id="Legenda">
          <a><img alt="Free" src={Free} width="28" height="40" />  Vaga Livre</a>
          <a><img alt="Ocup" src={Ocup} width="28" height="40" />  Vaga Ocupada</a>
          <a><img alt="Indisp" src={Indisp} width="28" height="40" />  Vaga Indisponível ou Reservada</a>
        </div>
        <div id="Planta" style={{ backgroundImage: `url(${Planta})` }}>
          <button onClick={() => {
            swal({
              title: "Quer mesmo reservar esta vaga?",
              icon: "warning",
              buttons: true,
              dangerMode: true,
            })
              .then((willDelete) => {
                if (willDelete) {
                  swal("Vaga Reservada!!", {
                    icon: "success"
                  });
                } else {
                  swal("Reserva Cancelada", {
                    icon: "error"
                  });
                }
              });
          }}
            id="b61" className="spots">

            {defaultImage}

          </button>
          <button onClick={() => { swal("Oops!!", "Vaga Indisponível", "error"); }}
            id="b62" className="spots">
            {sucessImage}
          </button>
          <button onClick={() => { swal("Oops!!", "Vaga Indisponível", "error"); }}
            id="b63" className="spots">
            {sucessImage}
          </button>
          <button onClick={() => { swal("Oops!!", "Vaga Indisponível", "error"); }}
            id="b64" className="spots">
            {indispImage}
          </button>
          <button onClick={() => {
            swal({
              title: "Quer mesmo reservar esta vaga?",
              icon: "warning",
              buttons: true,
              dangerMode: true,
            })
              .then((willDelete) => {
                if (willDelete) {
                  swal("Vaga Reservada!!", {
                    icon: "success",
                  });
                } else {
                  swal("Reserva Cancelada", {
                    icon: "error"
                  });
                }
              });
          }}
            id="b65" className="spots">
            {defaultImage}
          </button>
          <button onClick={() => {
            swal({
              title: "Quer mesmo reservar esta vaga?",
              icon: "warning",
              buttons: true,
              dangerMode: true,
            })
              .then((willDelete) => {
                if (willDelete) {
                  swal("Vaga Reservada!!", {
                    icon: "success",
                  });
                } else {
                  swal("Reserva Cancelada", {
                    icon: "error"
                  });
                }
              });
          }}
            id="b66" className="spots">
            {defaultImage}
          </button>
        </div>
      </div>
    </div>
  )
}
