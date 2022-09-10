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

export default function Parking() {
  return (
    <div>
      <Menu />
      <h1>Parking</h1>
      <div class="row">
        <div style={{ backgroundImage: `url(${Planta})` }} class="col">
          <img id="v61"
            alt="EFree"
            src={EFree}
            width="20"
            height="25"
          />
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
        <select className="SelectSpot">
          <option value="">Selecione</option>
          <option value="61">61</option>
          <option value="61">62</option>
          <option value="61">63</option>
          <option value="61">64</option>
          <option value="61">65</option>
          <option value="61">66</option>
        </select>
      </div>
      <div>
        <Button id="b1">Fazer Reserva</Button>
        <div>

        </div>
      </div>
    </div>
  )
}
