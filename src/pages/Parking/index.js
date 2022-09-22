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
  return (
    <div>
      <Menu />
      <h1>Parking</h1>
      <div class="row">
        <div id="Planta" style={{ backgroundImage: `url(${Planta})` }} class="col">
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
            id="b61"><img
              alt="EFree"
              src={EFree}
              width="20"
              height="25"
            /></button>
          <button onClick={() => { swal("Oops!!", "Vaga Indisponível", "error"); }}
            id="b62"><img
              alt="EOcup"
              src={EOcup}
              width="20"
              height="25"
            /></button>
          <button onClick={() => { swal("Oops!!", "Vaga Indisponível", "error"); }}
            id="b63"><img
              alt="EOcup"
              src={EOcup}
              width="20"
              height="25"
            /></button>
          <button onClick={() => { swal("Oops!!", "Vaga Indisponível", "error"); }}
            id="b64"><img
              alt="EIndisp"
              src={EIndisp}
              width="20"
              height="25"
            /></button>
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
            id="b65"><img
              alt="EFree"
              src={EFree}
              width="20"
              height="25"
            /></button>
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
          id="b66"><img
            alt="EFree"
            src={EFree}
            width="20"
            height="25"
          /></button>
        </div>
        <div class="col" id="Legenda">
          <div class="col"><img alt="Free" src={Free} width="28" height="40" />  <a>Vaga Livre</a></div>
          <br />
          <div class="col"><img alt="Ocup" src={Ocup} width="28" height="40" />  <a>Vaga Ocupada</a></div>
          <br />
          <div class="col"><img alt="Indisp" src={Indisp} width="28" height="40" />  <a>Vaga Indisponível ou Reservada</a></div>
        </div>

      </div>
      <div id="root">
      </div>
      <div>
        <div>
        </div>
      </div>
    </div>
  )
}
