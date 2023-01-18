import React from 'react';
import Timer from '../../images/timer.png';
import Money from '../../images/money.png';
import Stress from '../../images/stress.png';
import Aval from '../../images/avaliacao.png';
import './goals.css';

const Goals = () => {
    return (
        <div className='goals' id='goals'>
            <div className='container'>
                <h2>Objetivos</h2>
                <span className='line'></span>
                <div className='content'>
                    <div className='card'>
                        <img src={Timer} alt='Timer'/>
                        <p><span>TEMPO</span></p>
                        <p>Economia de tempo gerada pela possibilidade de visualização e localização simples e rápida.</p>
                    </div>
                    <div className='card'>
                        <img src={Stress} alt='Estresse'/>
                        <p><span>ESTRESSE</span></p>
                        <p>Diminuição do estresse causado ao se sentir "perdido" dentro do estabelecimento.
                        </p>
                    </div>
                    <div className='card'>
                        <img src={Aval} alt='Avaliação'/>
                        <p><span>SATISFAÇÃO</span></p>
                        <p>Tornando o processo de localização de vagas mais simples e direto, é possível gerar um valor e satisfação maior ao usuário.
                        </p>
                    </div>
                    <div className='card'>
                        <img src={Money} alt='Money'/>
                        <p><span>DINHEIRO</span></p>
                        <p>Elevando a satisfação do cliente e diminuindo seu gasto fora do estabelecimento é possível retornarmos
                            esta geração de valor para dentro das lojas.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Goals;