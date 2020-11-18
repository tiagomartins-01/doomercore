import React from 'react';
import Logo from '../../assets/img/Logo.png';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <img className="Logo" src={Logo} widht="95px" height="95px" alt="doomercore" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
