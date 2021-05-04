import React from 'react';
import {HeaderStyle, LinkStyle} from './style.js';


function Header() {
    return (
      <div>
          <HeaderStyle>
              <a href="/" style={{ textDecoration: 'none', color: 'white' }}>
                <h3>Meu Portfolio</h3>
              </a>
              <a href="/" style={{ textDecoration: 'none', color: 'white' }}>
                <h3>Bem-vindo ao meu Portfólio</h3>
              </a>
              <div>
                <h3>Igor Chacon</h3>
              </div>
          </HeaderStyle>
      </div>
    );
  }
  
  export default Header;