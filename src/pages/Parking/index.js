import React, { useState } from 'react';
import './parking.css';
import Menu from '../../components/Menu/menu';
import Planta from '../../images/Planta1.png';
import { Button } from 'react-bootstrap';
import { BsGrid } from 'react-icons/bs';

export default function Parking() {
  return (
    <div>
      <Menu />
      <h1>Parking</h1>
      <div class="row">
        <div class="col">
          <img
            alt="Planta"
            src={Planta}
          />
        </div>
        <div class="col">TESTE</div>
      </div>
      <div className="buttons">
        <Button>Fazer Reserva</Button>
        <div>

        </div>
      </div>
    </div>
  )
}
