import React from 'react';
import Logo from '../../assets/img/Logo.png';
import { FooterBase } from './style';

function FooterCadastro() {
  return (
    <FooterBase>
      <a href="/">
        <img className="Logo" src={Logo} widht="95px" height="95px" alt="doomercore" />
      </a>
      <p>
        Criado por
        {' '}
        <a href="https://github.com/tiagomartins-01">
          Tiago Martins
        </a>
      </p>
    </FooterBase>
  );
}

export default FooterCadastro;
