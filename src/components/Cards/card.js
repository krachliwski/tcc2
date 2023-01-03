import React, { useState } from "react"
import "./card.css"
import Free from '../../images/Free.png';
import Ocup from '../../images/Occup.png';
import Indisp from '../../images/Indisp.png';

export default function Card(props) {

    /*
    <button id="Indicador" className="spots">
              {dis && (
                disp
              )}
              {indis && (
                indisp
              )}
              {ocupp && (
                ocup
              )}
              <br />
              66
            </button> 
    */

    return (
        <div className="card--container">
            <h3 className="card--status">{props.status}</h3>
            <p className="card--codigo">{props.codigo}</p>
        </div>
    );
}