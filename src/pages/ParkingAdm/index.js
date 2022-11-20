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
    const [success, setSucess] = useState(false);
    const sucessImage = <img src={Ocup} alt="Ocup" width="20" height="25" />;
    const defaultImage = <img src={Free} alt="Free" width="20" height="25" />;
    const indispImage = <img src={Indisp} alt="Indisp" width="20" height="25" />;
    return (
        <div class="main">
            <Menu />
            <div class="div-h1">
                <h1>Parking Administration</h1>
                <div id="Legenda">
                    <a><img alt="Free" src={Free} width="28" height="40" />  Vaga Livre</a>
                    <a><img alt="Ocup" src={Ocup} width="28" height="40" />  Vaga Ocupada</a>
                    <a><img alt="Indisp" src={Indisp} width="28" height="40" />  Vaga Indisponível</a>
                </div>
                <div id="Planta" style={{ backgroundImage: `url(${Planta})` }}>
                    <button id="b61" className="spots">

                        {defaultImage}

                    </button>
                    <button id="b62" className="spots">
                        {sucessImage}
                    </button>
                    <button id="b63" className="spots">
                        {sucessImage}
                    </button>
                    <button id="b64" className="spots">
                        {indispImage}
                    </button>
                    <button id="b65" className="spots">
                        {defaultImage}
                    </button>
                    <button onClick={() => {
                        swal({
                            title: "Alterar status da vaga?",
                            icon: "warning",
                            buttons: true,
                            dangerMode: true,
                        })
                            .then((willDelete) => {
                                if (willDelete) {
                                    swal("Status alterado", {
                                        icon: "success",
                                    });
                                    if (defaultImage) {
                                        setSucess(true);
                                    } else {
                                        setSucess(false);
                                    }
                                } else {
                                    swal("Ação cancelada!", {
                                        icon: "error"
                                    });
                                }
                            });
                    }}
                        id="b66" className="spots">
                        {success ? indispImage : defaultImage}
                    </button>
                </div>
                <div className="Edit">
                    <Button onClick={() => {
                        swal({
                            title: "Quer mesmo sair?",
                            icon: "warning",
                            buttons: true,
                            dangerMode: true,
                        })
                            .then((willDelete) => {
                                if (willDelete) {
                                    window.location.href = "/";
                                } else {
                                    swal("Cancelado", {
                                        icon: "error"
                                    });
                                }
                            });
                    }}>Sair</Button>
                </div>
            </div>
        </div>
    )
}