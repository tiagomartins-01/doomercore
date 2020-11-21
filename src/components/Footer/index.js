import React from 'react';
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
