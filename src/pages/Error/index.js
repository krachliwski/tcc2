import React from 'react';
import './error.css';
import { Link } from 'react-router-dom';
import NotFound from '../../images/notfound.png';

export default function Error(){
    return(
        <div className='container-error'>
            <img src={NotFound} alt="Pagina nao encontrada"/>
            <h1>Página não encontrada!</h1>
            <Link to="/">
                Voltar para Página Principal
            </Link>
        </div>
    )
}