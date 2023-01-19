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
  const refreshImg = () => {
    if (props.status == 'O') {
      { Ocupado() }
    } else if (props.status == 'I') {
      { Indisponivel() }
    } else {
      { Disponivel() }
    }
  };

  const ocup = <img src={Ocup} alt="Ocup" width="20" height="25" />;
  const disp = <img src={Free} alt="Free" width="20" height="25" />;
  const indisp = <img src={Indisp} alt="Indisp" width="20" height="25" />;

  const [dis, setDisp] = useState(false);

  const Disponivel = () => {
    setDisp(true);
    setIndisp(false);
    setOcup(false);
  };

  const [indis, setIndisp] = useState(false);

  const Indisponivel = () => {
    setIndisp(true);
    setDisp(false);
    setOcup(false);
  };

  const [ocupp, setOcup] = useState(false);

  const Ocupado = () => {
    setOcup(true);
    setDisp(false);
    setIndisp(false);
  };

  //{refreshImg()}

  return (
    <div className="card--container">
      <>
        
      </>
      <h3 className="card--status">{dis && (
        disp
      )}
        {indis && (
          indisp
        )}
        {ocupp && (
          ocup
        )}</h3>
      <h3 className="card--status">{props.status}</h3>
      <p className="card--codigo">{props.codigo}</p>
    </div>
  );
}