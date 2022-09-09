import React from 'react';
import './home.css';
import Menu from '../../components/Menu/menu';

export default function Home() {
  return (
    <div className="container-home">

    <Menu/>
    <br/>
    <br/>
    <h1 id='sobre'>Sobre Nós</h1>
    <a> Somos um grupo de desenvolvedores que procura melhorar a vida das pessoas, assim como todos no geral.<br/>
      Porém trabalhamos na otimização de uma área específica, a qual é a de gerenciamento de estacionamentos.
    </a>
    <br/>
    <br/>
    <br/>
    <br/>
    <a> Nosso diferencial é explorar ainda mais as tecnologias atuais, automatizando, otimizando e facilitando
      todo o processo o máximo possível.<br/>
        Dessa forma, conseguimos modificar grande parte de um processo que até hoje ainda existe, e é muito utilizado 
        (apesar de não ser muito viável e prático em alguns casos).<br/>
    </a>
    <br/>
    <a> Agora, imagine uma sala de cinema atualmente. Na grande maioria dos casos, para que podemos comprar os ingressos, somos apresentados a uma página<br/>
    contendo um mapa da sala, onde é mostrado quais poltronas estão disponíveis e quais estão ocupadas.<br/>
    Convenhamos que isso facilita e muito nesse momento de lazer, então por quê não utilizar a mesma ideia para estacionamentos?
    </a>
    <br/>
    <br/>
    <h1 id='details'>Detalhes do Projeto</h1>
    <a> Já que chegou aqui, deve estar pensando, "Mas como seria feito todo o controle de saída e entrada dentro do local?". Pois bem, vamos lá...<br/>
    O sistema funciona por meio da comunicação com sensores, e também com QRCodes.
    <br/>
    <br/>
    <a> Cada vaga contém um sensor de proximidade e um QRCode, dessa forma, podemos detectar a presença de veículos, fazendo com que o sensor<br/>
    envie um sinal para o sistema e marque a vaga como ocupada.
    <br/>
    Já os QRCodes são utilizados para a realização do pagamento por exemplo, ou também para o check-in, tendo basicamente a mesma função do sensor.<br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    </a> Também há a possibilidade de fazer a reserva de vagas através do site, onde é realizada a consulta de vagas.
    <br/>
    </a>
    
    <br/>
  </div>
)
}