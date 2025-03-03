import React from 'react';
import logo from '../assets/images/PinguimLogo.png';

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Pinguim Logo" className="logo" />
      <h1>Mini Game - Pinguim Run</h1>
    </header>
  );
}

export default Header;
