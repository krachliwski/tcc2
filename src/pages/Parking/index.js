import React, { useState } from 'react';
import './parking.css';
import { Link } from 'react-router-dom';
import Menu from '../../components/Menu/menu';

export default function Parking(){
  return(
    <div>
      <Menu/>
      <h1>Parking</h1>
      <Link to="/">
        Voltar para Home
      </Link>
    </div>
  )
}
