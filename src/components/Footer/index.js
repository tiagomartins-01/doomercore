import React from 'react';
import Logo from '../../assets/img/Logo.png';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <p>
        Criado por
        {' '}
        <a className="a" href="https://github.com/tiagomartins-01">
          Tiago Martins
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
