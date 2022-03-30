import React from 'react';
import './menu.css';
import { BsYoutube, BsInstagram } from 'react-icons/bs';

export default function Menu(){
    return(
        <div className="menu">
            
            <a className="social" href="https://youtube.com/c/sujeitoprogramador">
                <BsYoutube color="#FFF" size={24} />
            </a>

            <a className="social" href="https://instagram.com/krachliwski">
                <BsInstagram color="#FFF" size={24} />
            </a>
        </div>
    )
}