import React from 'react';
import { FooterBase } from './styles';
import LogoDevs from '../LogoDevsFlix';

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <LogoDevs/>
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