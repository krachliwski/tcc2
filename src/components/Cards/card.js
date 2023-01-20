import React, { useState } from "react"
import "./card.css"
import Free from '../../images/Free.png';
import Ocup from '../../images/Occup.png';
import Indisp from '../../images/Indisp.png';

export default function Card(props) {

  var status = '';
/*
  if (props.status == 'O') {
    status = <img src={Ocup} alt="Ocup" width="20" height="25" />;
  } else if (props.status == 'I') {
    status = <img src={Indisp} alt="Indisp" width="20" height="25" />;
  } else {
    status = <img src={Free} alt="Free" width="20" height="25" />;
  }
*/

  if (props.status == 'O') {
    status = <a className='ocupado'></a>;
  } else if (props.status == 'I') {
    status = <a className='indisponivel'></a>;;
  } else {
    status = <a className='disponivel'></a>;;
  }

  return (
    <div className="card--container">
      <h3 className="card--status">{status}</h3>
      <p className="card--codigo">{props.codigo}</p>
    </div>
  );
}