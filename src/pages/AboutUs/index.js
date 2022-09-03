import React, { useState } from 'react';
import './aboutUs.css';
import { Link } from 'react-router-dom';
import Menu from '../../components/Menu/menu';

export default function AboutUs(){
  return(
    <div>
      <Menu/>
      <h1>ABOUT US</h1>
      <Link to="/">
        Voltar para Home
      </Link>
    </div>
  )
}